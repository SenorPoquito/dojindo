import {Collection} from './collection'

export interface User{
  name:string;
  email:string;
  collection_set:Collection[];
  updated:Date;
  created:Date;
}
