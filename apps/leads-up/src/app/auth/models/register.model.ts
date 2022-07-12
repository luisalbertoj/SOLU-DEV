export interface RegisterModel {
  name: string;
  email: string;
  password: string;
}

export interface RegisterResModel {
  code: number;
  status: boolean;
  message?: string;
}
