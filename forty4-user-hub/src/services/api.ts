import { User, CreateUserRequest, UpdateUserRequest } from "@/types/user";

const API_BASE_URL = "https://user-management-tool-0qps.onrender.com/api/v1";

class ApiService {
  private async request<T>(endpoint: string, options?: RequestInit): Promise<T> {
    const url = `${API_BASE_URL}${endpoint}`;
    
    const config: RequestInit = {
      headers: {
        'Content-Type': 'application/json',
        ...options?.headers,
      },
      ...options,
    };

    try {
      const response = await fetch(url, config);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('API request failed:', error);
      throw error;
    }
  }

  // Get all users
  async getAllUsers(): Promise<User[]> {
    return this.request<User[]>('/users');
  }

  // Get single user by ID
  async getUserById(id: string): Promise<User> {
    return this.request<User>(`/users/${id}`);
  }

  // Create new user
  async createUser(userData: CreateUserRequest): Promise<User> {
    return this.request<User>('/users', {
      method: 'POST',
      body: JSON.stringify(userData),
    });
  }

  // Update existing user
  async updateUser(id: string, userData: UpdateUserRequest): Promise<User> {
    return this.request<User>(`/users/${id}`, {
      method: 'PUT',
      body: JSON.stringify(userData),
    });
  }

  // Delete user
  async deleteUser(id: string): Promise<void> {
    await this.request<void>(`/users/${id}`, {
      method: 'DELETE',
    });
  }
}

export const apiService = new ApiService();