import {Collection} from '../interfaces/collection';
import {Injectable}     from 'angular2/core';
import {Http} from 'angular2/http';
import {Response} from 'angular2/http';
import {Headers} from 'angular2/http';

import 'rxjs/Rx';

@Injectable()
export class CollectionService {
  private _baseUrl = "http://localhost:8000/api/v1/collections/";
  constructor(private _http: Http) { }

  public getCollections() {
    var query = this._baseUrl;
    console.log('GET : ' + query);
    return this._http
      .get(query)
      .map(res => res.json()).share();
  }

  public createCollection(collection) {
    // var bodyJson = {
    //   'name':collection.name,
    //   'description':collection.description,
    //   'cover_art':collection.cover_art,
    //   'author' : collection.author,
    //   'category' : [],
    //   'referenceWork' : []
    // }
    //
    // bodyJson.category.push(collection.category);
    // bodyJson.referenceWork.push(collection.referenceWork);
    //

    var body = JSON.stringify(collection)
    var query = this._baseUrl;
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

  deleteCollection(collection) {
    var collectionId = collection.id;
    var query = this._baseUrl + collectionId+'/';
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
