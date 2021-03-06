import {User} from '../interfaces/user';
import {Injectable}     from 'angular2/core';
import {Http} from 'angular2/http';
import {Response} from 'angular2/http';
import {Headers} from 'angular2/http';

import 'rxjs/Rx';

@Injectable()
export class UserService {
  private _baseUrl = "http://localhost:8000/api/v1/";
  constructor(private _http: Http) { }
  public getUsers() {
    var query = this._baseUrl + 'users/';
    console.log('GET : ' + query);
    return this._http
      .get(query)
      .map(res => res.json()).share();
  }

  public createUser(user) {
    var body = JSON.stringify(user)
    var query = this._baseUrl + 'users/';
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');

    console.log('POST : ' + query);
    console.log("BODY : " + body);
    console.log("HEADERS : " + headers);

    this._http
      .post(query, body, {
      headers: headers
    })
      .map(res => res.json())
      .subscribe(
      data => console.log("RETURN : " + data),
      err => console.log("ERROR : " + err),
      () => console.log("User Created")
      );
  }

  deleteUser(user) {
    var username = user.name;
    var query = this._baseUrl + 'users/' + username+'/';
    this._http
      .delete(query)
      .map(res => res.json())
      .subscribe(
      err => console.log("ERROR : " + err),
      () => console.log("User Deleted")
      );

  }
  getUser(user) {


  }

}
