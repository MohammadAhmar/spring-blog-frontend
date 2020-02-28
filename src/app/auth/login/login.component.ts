import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';
import { LoginPayload } from '../login-payload';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;
  loginPayload:LoginPayload;

  constructor(private authService:AuthService, private router:Router) {
    this.loginForm = new FormGroup({
      username: new FormControl(),
      password: new FormControl()
    });
    this.loginPayload = {
      username: '',
      password: ''
    };
   }

  ngOnInit(): void {
  }

  onSubmit() {
   this.loginPayload.username = this.loginForm.get('username').value
   this.loginPayload.password = this.loginForm.get('password').value

   this.authService.login(this.loginPayload).subscribe(data => {
     if(data) {
       console.log('success')
       this.router.navigateByUrl('/home')
     } else
     console.log('failed to login')
   });
  }

}
