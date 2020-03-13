import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { PostPayload } from '../add-post/post-payload';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  posts: Observable<Array<PostPayload>>;

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.posts = this.postService.getAllPosts();
  }

}
