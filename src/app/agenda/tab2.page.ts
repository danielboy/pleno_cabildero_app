import { Component } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverCuentaComponent } from '../component/popover-cuenta/popover-cuenta.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  logs = [{time: new Date(), title: 'testing 1'},
  {time: new Date(), title: 'testing 2 testing 2 testing 2 testing 2 testing 2 testing 2 testing 2 testing 2'},
  {time: new Date(), title: 'testing 3 testing 2 testing 2 testing 2 testing 2 testing 2 testing 2 testing 2 testing 2'},
  {time: new Date(), title: 'testing 4 testing 2 testing 2 testing 2 testing 2 testing 2 testing 2 testing 2 testing 2'},
  {time: new Date(), title: 'testing 5 testing 2 testing 2 testing 2 testing 2 testing 2 testing 2 testing 2 testing 2'},
  {time: new Date(), title: 'testing 6 testing 2 testing 2 testing 2 testing 2 testing 2 testing 2 testing 2 testing 2'} ];

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
