import { Component } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverCuentaComponent } from '../component/popover-cuenta/popover-cuenta.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public Popover: PopoverController) {}

  async cuenta() {
    const popover = await this.Popover.create({
      component: PopoverCuentaComponent,
      cssClass: 'cuenta-modal ',
      translucent: true
    });
    return await popover.present();
  }

}
