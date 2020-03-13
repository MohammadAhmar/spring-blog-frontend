import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormControlName } from '@angular/forms';
import { PostPayload } from './post-payload';
import { PostService } from '../post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  addPostForm:FormGroup
  postPayload: PostPayload

  constructor(private postService: PostService, private router: Router) {

    this.addPostForm = new FormGroup({
      title: new FormControl(),
      content: new FormControl()
    });
    this.postPayload = {
      id: '',
      title: '',
      content: '',
      username: ''
    };
   }

  ngOnInit(): void {
  }

  addPost() {
  this.postPayload.title = this.addPostForm.get('title').value;
  this.postPayload.content = this.addPostForm.get('content').value;

  this.postService.addPost(this.postPayload).subscribe(data => {
    this.router.navigateByUrl('/home')
  }, error => {
    console.log('Failure Response');
  }) 
  }
}
