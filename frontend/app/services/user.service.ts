import {User} from '../interfaces/user';
import {Injectable}     from 'angular2/core';
import {Http} from 'angular2/http';

import 'rxjs/Rx';

@Injectable()
export class UserService{
  private _baseUrl = "http://localhost:8000/api/v1/";
  constructor(private _http:Http){}
  public getUsers(){
    var query = this._baseUrl+'users/';
    console.log('GET : ' + query);
    return this._http
           .get(this._baseUrl+'users/')
           .map(res => res.json()).share();
  }

  getUser(user){


  }

}
