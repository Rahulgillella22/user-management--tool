export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  address?: {
    street?: string;
    city?: string;
    zip?: string;
  };
}

export type CreateUserRequest = Omit<User, 'id'>;
export type UpdateUserRequest = Partial<CreateUserRequest>;