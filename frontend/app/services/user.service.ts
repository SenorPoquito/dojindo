import {User} from '../interfaces/user';
import {Injectable}     from 'angular2/core';
import {USERS} from './mock-user';

import 'rxjs/Rx';
// import {Http, HTTP_PROVIDERS} from 'angular2/http';

// import { Injectable } from 'angular2/core';
@Injectable()
export class UserService{

  private _baseUrl = "http://localhost:8000/api/v1/";

  public getUsers(){
    // return this.http.get(this._baseUrl+'/users').map(res => <User[]> res.json().data)
                    // .catch(this.handleError);
    return Promise.resolve(USERS);
  }

  getUser(user){


  }

}
