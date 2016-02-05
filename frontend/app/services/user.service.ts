import {User} from '../interfaces/user';
import {Injectable}     from 'angular2/core';
import {Http, Response, Jsonp} from 'angular2/http';
import {Observable}     from 'rxjs/Observable';
import 'rxjs/Rx';
// import {Http, HTTP_PROVIDERS} from 'angular2/http';

// import { Injectable } from 'angular2/core';
@Injectable()
export class UserService{

  constructor(private jsonp:Jsonp){}
  private _baseUrl = "http://localhost:8000/api/v1/";

  public getUsers(){
    // return this.http.get(this._baseUrl+'/users').map(res => <User[]> res.json().data)
                    // .catch(this.handleError);
    return this.jsonp.get(this._baseUrl+'users').map(request=>request.json()[1])
  }

  getUser(user){


  }

  private handleError (error: Response) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
