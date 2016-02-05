import {Component, OnInit} from 'angular2/core';
import {Volume} from './../../interfaces/volume';
import {User} from './../../interfaces/user';
import {UserService} from './../../services/user.service';

@Component({
  selector:'volume-create-form',
  templateUrl:'app/components/volume_create_form/volume-create.html',
  bindings:[UserService]
})

export class VolumeCreateComponent implements OnInit{
  constructor (private _userService:UserService){}
  public volume:Volume;
  users:User[];
  errorMessage: string;
  ngOnInit() { this.getUsers(); }

  getUsers(){
    this._userService.getUsers().subscribe(
                       users => this.users = users,
                       error =>  this.errorMessage = <any>error);

  }
}
