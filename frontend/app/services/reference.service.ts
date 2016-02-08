import {ReferenceWork} from '../interfaces/reference';
import {Injectable}     from 'angular2/core';
import {Http} from 'angular2/http';
import {Response} from 'angular2/http';
import {Headers} from 'angular2/http';

import 'rxjs/Rx';

@Injectable()
export class ReferenceWorkService {
  private _baseUrl = "http://localhost:8000/api/v1/";
  constructor(private _http: Http) { }

  public getReferenceWorks() {
    var query = this._baseUrl + 'referenceWorks/';
    console.log('GET : ' + query);
    return this._http
      .get(query)
      .map(res => res.json()).share();
  }

}
