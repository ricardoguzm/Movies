import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './modules/login/login.component';
import { MoviesComponent } from './modules/movies/movies.component';
import { MovieDetailComponent } from './modules/movies/movie-detail/movie-detail.component';
import { BaseComponent } from './shared/base/base.component';
import {InputTextModule} from 'primeng/inputtext'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {PasswordModule} from 'primeng/password'
import {ButtonModule} from 'primeng/button';
import { HttpClientModule } from '@angular/common/http';
import { MoviesModule } from './modules/movies/movies.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BaseComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    InputTextModule,
    RouterModule,
    PasswordModule,
    ButtonModule,
    ReactiveFormsModule,
    HttpClientModule,
    MoviesModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }