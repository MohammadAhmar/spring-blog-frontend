import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { ActivatedRoute } from '@angular/router';
import { PostPayload } from '../add-post/post-payload';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  
  idParam: Number;
  post: PostPayload;

  constructor(private router:ActivatedRoute, private postService:PostService) { }

  ngOnInit(): void {
    this.router.params.subscribe(params => {
      this.idParam = params['id'];
    });
    
    this.postService.getPost(this.idParam).subscribe((data:PostPayload)=> {
      this.post = data;
    }, error => {
      console.log("fialed");
    })
  }

}
