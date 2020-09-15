import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';



@Component({
  selector: 'app-popover-cuenta',
  templateUrl: './popover-cuenta.component.html',
  styleUrls: ['./popover-cuenta.component.scss'],
})
export class PopoverCuentaComponent /*implements OnInit*/ {

  segmentCuenta = 'registro';

  constructor(
    // private navParams: NavParams,
    public popover: PopoverController,
  ) {

  }

  segmentChanged(event){
    console.log(this.segmentCuenta);
    console.log(event);
  }


  closePopover() { this.popover.dismiss(); }
}
