import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../types/post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  api: string = "http://localhost:8000/api";
  constructor(private http: HttpClient) { }

  getPosts() : Observable<Post[]> {
    return this.http.get<Post[]>(`${this.api}/posts`);
  }

  getPostsByUrl(a: string) : Observable<Post[]> {
    return this.http.get<Post[]>(`${this.api}/posts/${a}`);
  }
  getPostByTitle(a: string) : Observable<Post> {
    return this.http.get<Post>(`${this.api}/posts/${a}`);
  }
}
