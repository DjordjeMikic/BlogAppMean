export interface LoginInfo {
  username: string,
  password: string
}

export interface UserInfo {
  id: number,
  name: string,
  lname: string,
  username: string,
  email: string,
  password?: string,
  createdAt?: string,
  updatedAt?: string,
  iat?: number,
  exp?: number
}

export interface AddingPost {
  id?: number,
  title: string,
  content: string
}

export type Success = string | null;
