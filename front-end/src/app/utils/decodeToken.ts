import jwt_decode from 'jwt-decode';

export interface UserData {
  id: number,
  name: string,
  lname: string,
  username: string,
  email: string,
  createdAt: string,
  updatedAt: string,
  exp?: number,
  iat?: number
}

export const decodeToken = (a: any) : any => {
  let token: UserData = jwt_decode(a);
  return token;
}
