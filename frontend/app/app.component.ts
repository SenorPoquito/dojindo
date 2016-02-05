import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';
import {User} from './interfaces/user';
import {UserService} from './services/user.service'
import {UserListComponent} from './components/user_list/user-list.component'

@Component({
  selector:'my-app',
  template:`
  <h1>{{title}}</h1>
  <button (click)="onSelect('user-list')">User List</button>
  <button (click)="onSelect('create-collection')">Create Collection</button>

  <user-list *ngIf="selectedView=='user-list'"></user-list>

  `,
  providers:[UserService],
  directives:[UserListComponent]
})

export class AppComponent implements OnInit{

  public title = 'Dojo';
  public selectedView = "";
  ngOnInit(){
    console.log("App Started")
  }

  onSelect(view){
    this.selectedView = view;
    console.log(this.selectedView)
  }
}
