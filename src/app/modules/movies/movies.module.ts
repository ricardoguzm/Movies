import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import {InputTextModule} from 'primeng/inputtext'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {PasswordModule} from 'primeng/password'
import {ButtonModule} from 'primeng/button';
import { HttpClientModule } from '@angular/common/http';
import { MoviesComponent } from './movies.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';

@NgModule({
  declarations: [
   MoviesComponent,
   MovieDetailComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    InputTextModule,
    RouterModule,
    PasswordModule,
    ButtonModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [MoviesComponent],
  exports:[MoviesComponent]
})
export class MoviesModule { }