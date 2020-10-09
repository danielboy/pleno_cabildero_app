import { Component } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverCuentaComponent } from '../component/popover-cuenta/popover-cuenta.component';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page {

  constructor( public Popover: PopoverController ) {}

  async cuenta() {
    const popover = await this.Popover.create({
      component: PopoverCuentaComponent,
      cssClass: 'cuenta-modal ',
      translucent: true
    });
    return await popover.present();
  }

}
