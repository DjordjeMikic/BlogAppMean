import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { decodeToken, UserData } from '../../../utils/decodeToken';

import { Post } from '../../../types/post';
import { RegisterInfo } from '../../../types/register';
import { LoginInfo, AddingPost } from './type';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  api: string = 'http://localhost:8000/api/user';
  title: string = 'Neki titl';
  authToken: any = '';
  user!:UserData;
  loggedIn:boolean = false;
  loginChange: Subject<boolean> = new Subject<boolean>();

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  getPath(url: string) : string {
    let path = url.slice(url.lastIndexOf('/') + 1);
    return path;
  }

  login(a: LoginInfo) : Observable<any> {
    return this.http.post(`${this.api}/login`, a);
  }

  checkIsLogged() {
    if(localStorage.getItem('bearer')) {
      let token = localStorage.getItem('bearer');
      this.setAuthToken(token);
      this.setLogged(true);
      let info = decodeToken(token);
      this.setUser(info);
      // console.log(this.user);
    }
  }

  setAuthToken(a: any) {
    this.authToken = a;
  }

  getHeaders() : any {
    let headers: any = new HttpHeaders({ 'authorization': this.authToken });
    return headers;
  }

  register(registerInfo: RegisterInfo) : Observable<string> {
    return this.http.post<string>(`${this.api}/register`, { ...registerInfo });
  }

  getMyPosts() : Observable<any> {
    return this.http.get(`${this.api}/author/${this.user.id}`, { headers: this.getHeaders() });
  }

  addPost(post: AddingPost) : Observable<string> {
    return this.http.post<string>(`${this.api}/add`, { ...post }, { headers: this.getHeaders() });
  }

  changePost(title: string, content: string) : Observable<string> {
    return this.http.put<string>(`${this.api}/change/${title}`, { content }, { headers: this.getHeaders() });
  }

  deletePost(title: string) : Observable<string> {
    return this.http.delete<string>(`${this.api}/rm/${title}`, { headers: this.getHeaders() });
  }

  getPost(title: string) : Observable<Post> {
    return this.http.get<Post>(`${this.api}/post/${title}`, { headers: this.getHeaders() });
  }

  setUser(a: UserData) : void {
    this.user = a;
  }

  setLogged(a: boolean) : void {
    this.loggedIn = a;
    this.loginChange.next(this.loggedIn);
  }

  logout() : void {
    if(localStorage.getItem('bearer')) {
      localStorage.removeItem('bearer');
      this.authToken = '';
    }
    this.setLogged(false);
    this.router.navigate(['/']);
  }
}
