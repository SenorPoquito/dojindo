import {Component} from 'angular2/core';
import {EventEmitter} from 'angular2/core';
import {User} from '../../interfaces/user'
import {UserService} from '../../services/user.service'

@Component({
  selector:'create-user',
  template:`
  <div>
  <form>
  <input [(ngModel)]="user.name" name="user-name" placeholder="Username" ><br>
  <input [(ngModel)]="user.email" type="email" name="email-description" placeholder="Email" ><br>
  <button (click)="submitUser(user)" >Register</button>
  </form>
  </div>

  `,
  providers:[UserService],

})

export class CreateUserComponent{
  private updateUser:EventEmitter<User> = new EventEmitter();
  constructor(private _userService:UserService){}
  public user:User = {
    'name':"",
    'email':"",
    'collection_set':[],
    'updated':new Date(),
    'created':new Date()
  };

  ngOnInit(){
    console.log("Create User")
  }

  submitUser(newUser){
    this._userService.createUser(newUser);
    this.user = {
      'name':"",
      'email':"",
      'collection_set':[],
      'updated':new Date(),
      'created':new Date()
    };
  }


}
