import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';
import {User} from './interfaces/user';
import {UserService} from './services/user.service'
import {UserListComponent} from './components/user_list/user-list.component'
import {CreateUserComponent} from './components/create-user/create-user.component';
import {CollectionCreateComponent} from './components/collection_create_form/collection-create.component'

@Component({
  selector:'my-app',
  template:`
  <h1>{{title}}</h1>
  <h2 *ngIf="selectedUser">Current User : {{selectedUser.name}}</h2>
  <button (click)="onSelect('user-list')">User List</button>
  <button (click)="onSelect('new-user')">Register User</button>
  <button *ngIf="selectedUser" (click)="onSelect('create-collection')">Create Collection</button>

  <user-list *ngIf="selectedView=='user-list'" [(user)]="selectedUser"></user-list>
  <collection-create-form *ngIf="selectedView=='create-collection'" [user]="selectedUser"></collection-create-form>
  <create-user *ngIf="selectedView=='new-user'"></create-user>

  `,
  providers:[UserService],
  directives:[UserListComponent,CreateUserComponent,CollectionCreateComponent]
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
