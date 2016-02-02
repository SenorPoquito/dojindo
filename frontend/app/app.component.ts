import {Component} from 'angular2/core';
import {User} from './interfaces/user';

@Component({
  selector:'dojindo-test',
  template: '<h1>{{user.name}}</h1>'
})

export class AppComponent{
  public title = 'Dojo';
  public user = testUser;
}

var testUser: User = {
  'name':'Omarebi',
  'email':'ebi@omar.com'
}
