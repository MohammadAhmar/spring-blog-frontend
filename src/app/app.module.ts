import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterSucessComponent } from './auth/register-success/register-sucess.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {NgxWebstorageModule} from 'ngx-webstorage';
import { HomeComponent } from './home/home.component';
import { AddPostComponent } from './add-post/add-post.component';
import { EditorModule } from '@tinymce/tinymce-angular';
import { HttpClientInterceptor } from './http-client-interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegisterComponent,
    LoginComponent,
    RegisterSucessComponent,
    HomeComponent,
    AddPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    EditorModule,
    NgxWebstorageModule.forRoot(),
    RouterModule.forRoot([
      {path: 'register', component: RegisterComponent},
      {path: 'register-success', component: RegisterSucessComponent},
      {path: 'login', component: LoginComponent},
      {path: 'home', component: HomeComponent},
      {path: 'add-post', component: AddPostComponent}
    ])

  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: HttpClientInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
