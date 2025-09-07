import { Routes, Route } from 'react-router-dom';
import UserList from './pages/UserList';
import UserForm from './components/UserForm';

function App() {
  return (
    <div className="container">
      <h1>User Management Dashboard</h1>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/add" element={<UserForm />} />
        <Route path="/edit/:id" element={<UserForm />} />
      </Routes>
    </div>
  );
}

export default App;