import {Component} from 'angular2/core';
import {User} from '../../interfaces/user'
import {UserService} from '../../services/user.service'

@Component({
  selector:'user-list',
  template:`
  <div>
  <ul>
    <li *ngFor="#user of users" (click)="onSelect(user)" [class.selected]="user === selectedUser">
    <p>----{{user.name}}----</p>
    <p>Email: {{user.email}}</p>
    <p>Last Login : {{user.updated}}</p>
    <p>Created : {{user.created}}</p>
    </li>
  </ul>
  </div>
  `,
  providers:[UserService]
  // inputs:['user']
})
export class UserListComponent{
  constructor(private _userService:UserService){}
  public users:User[];
  public selectedUser : User;

  ngOnInit(){
    this.getUsers();
  }

  getUsers(){
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
