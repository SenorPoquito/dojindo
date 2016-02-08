import {Component, OnInit} from 'angular2/core';
import {Volume} from './../../interfaces/volume';
import {User} from './../../interfaces/user';
import {UserService} from './../../services/user.service';

@Component({
  selector:'volume-create-form',
  templateUrl:'app/components/volume_create_form/volume-create.html',
})

export class VolumeCreateComponent implements OnInit{
  constructor (private _userService:UserService){}

  ngOnInit() {}

}
