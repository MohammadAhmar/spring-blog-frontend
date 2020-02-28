import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostPayload } from './add-post/post-payload';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient: HttpClient) {
   }
   
   addPost(postPayload:PostPayload) {
    return this.httpClient.post('http://localhost:8081/api/posts/', PostPayload);
   }
}
