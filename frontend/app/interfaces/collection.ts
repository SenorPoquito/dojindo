import {Volume} from './volume';

export interface Collection {
  id: number;
  author: string;
  name: string;
  description:string;
  cover_art:string;
  volume_set:Volume[];
  category:number[];
  referenceWork:string[];
  updated:Date;
  created:Date;
}
