import { Component } from '@angular/core';
import { ApiService } from './services/api.service';
import { constantUri } from './utils/constantUri';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private apiService: ApiService<any>
  ){

    const getConfig = { url:constantUri.tokenNew, params: {api_key: constantUri.apikey} } 
    this.apiService.getService(getConfig).subscribe(val => {
      //console.log(val);
      const {request_token} = val;
      sessionStorage.setItem('requestToken', request_token);
      
    });
  }

  title = 'movies';
}
