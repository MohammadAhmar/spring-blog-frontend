import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PostPayload } from './add-post/post-payload';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  httpOptions = {
    headers: new HttpHeaders({ 
      "Content-Type": "application/json",
      'Access-Control-Allow-Origin':'*',
      
          'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, DELETE, PUT',
          'Access-Control-Allow-Headers': 'append,delete,entries,foreach,get,has,keys,set,values,Authorization',
          'Accept': 'application/json, text/*'
    })
  };


  constructor(private httpClient: HttpClient) {
   }
   
   addPost(postPayload:PostPayload) {
    return this.httpClient.post('http://localhost:8081/api/posts/create', postPayload);
   }

   getAllPosts() : Observable<Array<PostPayload>> {
     return this.httpClient.get<Array<PostPayload>>('http://localhost:8081/api/posts/all');
   }

   getPost(idParam : Number) : Observable<PostPayload> {
   return this.httpClient.get<PostPayload>('http://localhost:8081/api/posts/get/' + idParam);
   }
}
