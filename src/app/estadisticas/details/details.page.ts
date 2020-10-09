import { Component } from '@angular/core';
// import { FeedItem } from '../../providers/feed/feed';
import { ModalController, NavParams } from '@ionic/angular';
// import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { DomSanitizer} from '@angular/platform-browser';
// import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { Platform } from '@ionic/angular';


@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage {

  segmento = 'cv';
  data: any;

  constructor(
    private navParams: NavParams,
    public modal: ModalController,
   // private socialSharing: SocialSharing,
    public platform: Platform,
 //   private viewCtrl: ViewController,
     // tslint:disable-next-line: comment-format
     //private iab: InAppBrowser,
    private sanitizer: DomSanitizer
  ) {
   this.data = this.navParams.data;
   console.log(this.navParams);
   // this.post.texto = this.post.texto.replace(/<a /,"<a (click)=\"open('{{}}')\"");
   // this.post.texto = this.sanitizer.bypassSecurityTrustHtml(this.post.texto) as string;

  }

  formatfecha(fecha, format?) {
    // moment.locale('es');
    // format = format ? format : 'MMM D, YYYY';
    // return moment(fecha).format('MMM D, YYYY');
    return fecha;
  }

  dismiss() {
    this.modal.dismiss({
      dismissed: true
    });
  }

  segmentoR(event){
    console.log(this.segmento);
    console.log(event);
  }
}
