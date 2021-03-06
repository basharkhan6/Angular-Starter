export interface User {
  id?: number;
  username?: string;
  first_name: string;
  last_name: string;
  email: string;
  password?: string;
  confirm_password?: string;
  phone?: string;
  avatar?: string;
  avatar_thumb?: string;
}
