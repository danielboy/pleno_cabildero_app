import { Component } from '@angular/core';
// import { ModalController } from '@ionic/angular';
import { PopoverController } from '@ionic/angular';
import { PopoverPropuesta } from './popover/popover';
import { PopoverCuentaComponent } from '../component/popover-cuenta/popover-cuenta.component';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(public Popover: PopoverController)  {}


  async newPropuesta() {
    console.log('si entra la funcion de modal');
    const popover = await this.Popover.create({
      component: PopoverPropuesta,
      cssClass: 'tribuna-modal ',
      translucent: true
    });
    return await popover.present();
  }

  async cuenta() {
    const popover = await this.Popover.create({
      component: PopoverCuentaComponent,
      cssClass: 'cuenta-modal ',
      translucent: true
    });
    return await popover.present();
  }
}
