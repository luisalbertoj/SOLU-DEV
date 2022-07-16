export interface LoginModel {
  name: string;
  email: string;
  password: string;
}

export interface LoginResModel {
  code: number;
  status: boolean;
  message?: string;
}
