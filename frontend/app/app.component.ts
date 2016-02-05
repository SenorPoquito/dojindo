import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';
import {User} from './interfaces/user';
import {UserService} from './services/user.service'

@Component({
  selector:'my-app',
  template:`
  <h1>{{title}}</h1>
  <ul>
    <li *ngFor="#user of users" (click)="onSelect(user)" [class.selected]="user === selectedUser">
    <p>----{{user.name}}----</p>
    <p>Email: {{user.email}}</p>
    <p>Last Login : {{user.updated}}</p>
    <p>Created : {{user.created}}</p>
    </li>
  </ul>
  `,
  providers:[UserService]
})

export class AppComponent implements OnInit{
  constructor(private _userService:UserService){}

  public title = 'Dojo';
  public users: User[];
  public selectedUser : User;
  ngOnInit(){
    this.getHeroes();
  }
  getHeroes(){
    // this._userService.getUsers().then(users=>this.users = users)
    this._userService.getUsers().subscribe(
      users => this.users = users,
      error => console.error('Error' + error),
      () => console.log(this.users)
    );

  }

  onSelect(user:User){
    this.selectedUser = user;
    console.log(this.selectedUser);
  }
}
