import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';
import {User} from './interfaces/user';
import {UserService} from './services/user.service'
import {UserListComponent} from './components/user_list/user-list.component'
// import {VolumeCreateComponent} from './components/volume_create_form/volume-create.component'

@Component({
  selector:'my-app',
  template:`
  <h1>{{title}}</h1>
  <h2 *ngIf="selectedUser">Current User : {{selectedUser.name}}</h2>
  <button (click)="onSelect('user-list')">User List</button>
  <button (click)="onSelect('create-collection')">Create Collection</button>

  <user-list *ngIf="selectedView=='user-list'" [(user)]="selectedUser"></user-list>
  <volume-create-form *ngIf="selectedView=='create-collection'" ></volume-create-form>


  `,
  providers:[UserService],
  directives:[UserListComponent]
})

export class AppComponent implements OnInit{
  public selectedUser:User;
  public title = 'Dojo';
  public selectedView:string;
  ngOnInit(){
    console.log("App Started")
  }

  onSelect(view){
    this.selectedView = view;
    console.log(this.selectedView)
  }
}
