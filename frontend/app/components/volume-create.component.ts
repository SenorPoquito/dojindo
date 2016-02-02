import {Component} from 'angular2/core';
import {Volume} from '../interfaces/volume';

@Component({
  selector:'volume-create-form',
  template: `
  <div>
    VolumeForm
  </div>`
})

export class VolumeCreateComponent {
  public volume:Volume;
}
