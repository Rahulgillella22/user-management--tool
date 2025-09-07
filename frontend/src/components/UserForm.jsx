import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { createUser, getUserById, updateUser } from '../services/apiService';

function UserForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    address: { street: '', city: '', zip: '' },
  });
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditMode = Boolean(id);

  useEffect(() => {
    if (isEditMode) {
      const fetchUser = async () => {
        try {
          const response = await getUserById(id);
          const userData = response.data;
          // Ensure address object exists to prevent errors
          if (!userData.address) {
            userData.address = { street: '', city: '', zip: '' };
          }
          setFormData(userData);
        } catch (error) {
          console.error('Failed to fetch user:', error);
        }
      };
      fetchUser();
    }
  }, [id, isEditMode]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith('address.')) {
      const field = name.split('.')[1];
      setFormData(prev => ({
        ...prev,
        address: { ...prev.address, [field]: value }
      }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isEditMode) {
        await updateUser(id, formData);
      } else {
        await createUser(formData);
      }
      navigate('/');
    } catch (error) {
      console.error('Failed to save user:', error);
      alert('Failed to save user.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{isEditMode ? 'Edit User' : 'Add New User'}</h2>
      <div className="form-group">
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label>Phone:</label>
        <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>Company:</label>
        <input type="text" name="company" value={formData.company} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>Street:</label>
        <input type="text" name="address.street" value={formData.address?.street || ''} onChange={handleChange} />
      </div>
       <div className="form-group">
        <label>City:</label>
        <input type="text" name="address.city" value={formData.address?.city || ''} onChange={handleChange} />
      </div>
      <button type="submit">{isEditMode ? 'Update User' : 'Create User'}</button>
      <button type="button" onClick={() => navigate('/')}>Cancel</button>
    </form>
  );
}

export default UserForm;