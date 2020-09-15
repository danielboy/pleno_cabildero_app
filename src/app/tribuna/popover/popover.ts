import { Component } from '@angular/core';
// import { ModalController, NavParams } from '@ionic/angular';
import { PopoverController } from '@ionic/angular';

// import moment from 'moment';
// import 'moment/locale/es';


@Component({
    // tslint:disable-next-line: component-selector
    selector: 'popover',
    templateUrl: 'popover.html',
    styleUrls: ['popover.scss'],
})
// tslint:disable-next-line: component-class-suffix
export class PopoverPropuesta {


  constructor(
    // private navParams: NavParams,
    public popover: PopoverController,
  ) {

  }


  closePopover() { this.popover.dismiss(); }
}
