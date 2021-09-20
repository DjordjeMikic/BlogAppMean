export interface LoginInfo {
  username: string,
  password: string
}

export interface AddingPost {
  id?: number,
  title: string,
  content: string
}

export type Success = string | null;
