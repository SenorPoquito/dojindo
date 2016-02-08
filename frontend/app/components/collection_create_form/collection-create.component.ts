import {Component, OnInit} from 'angular2/core';
import {Collection} from './../../interfaces/collection';
import {User} from './../../interfaces/user';
import {Category} from '../../interfaces/category';
import {ReferenceWork} from '../../interfaces/reference';
import {CategoryService} from './../../services/category.service';
import {ReferenceWorkService} from './../../services/reference.service';
import {CollectionService} from './../../services/collection.service';

@Component({
  selector:'collection-create-form',
  templateUrl:'app/components/collection_create_form/collection-create.html',
  inputs:['user'],
  providers:[CategoryService, ReferenceWorkService, CollectionService]
})

export class CollectionCreateComponent implements OnInit{
  constructor (private _categoryService:CategoryService,
               private _referenceService:ReferenceWorkService,
               private _collectionService:CollectionService){}

  public categories:Category[];
  public references:ReferenceWork[];
  public user:User;

  public selectedCategories=[];
  public selectedReferences=[];

  public collection:Collection = {
    id:0,
    author:"",
    name:"",
    description:"",
    cover_art:"file.zip",
    volume_set:[],
    category:[],
    referenceWork:[],
    updated:new Date(),
    created:new Date()

  }

  ngOnInit() {
    this.getCategories();
    this.getReferences();
  }

  createCollection(collection){
    collection.author=this.user.name;
    collection.category.push(this.selectedCategories);
    collection.referenceWork.push(this.selectedReferences);

    this._collectionService.createCollection(collection);
  }
  getCategories(){
    this._categoryService.getCategories().subscribe(
      data => this.categories = data,
      error => console.error('Error' + error),
      () => console.log(JSON.stringify(this.categories))
    );
  }

  getReferences(){
    this._referenceService.getReferenceWorks().subscribe(
      data => this.references = data,
      error => console.error('Error' + error),
      () => console.log(JSON.stringify(this.references))
    );
  }


}
