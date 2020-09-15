import { Component } from '@angular/core';
// import { FeedItem } from '../../providers/feed/feed';
import { ModalController, NavParams } from '@ionic/angular';
// import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { DomSanitizer} from '@angular/platform-browser';
// import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { Platform } from '@ionic/angular';

// import moment from 'moment';
// import 'moment/locale/es';


@Component({
    // tslint:disable-next-line: component-selector
    selector: 'detail',
    templateUrl: 'detail.html',
    styleUrls: ['detail.scss'],
})
// tslint:disable-next-line: component-class-suffix
export class NotaModal {



  post: any;

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
   this.post = this.navParams.data;
   console.log(this.navParams);
   // this.post.texto = this.post.texto.replace(/<a /,"<a (click)=\"open('{{}}')\"");
   this.post.texto = this.sanitizer.bypassSecurityTrustHtml(this.post.texto) as string;

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

 /* openPage(url) {
    this.iab.create(url, '_system');
  }

  share(item) {
    this.socialSharing.share(item.titulo, null, null, item.url).then(() => {
    }).catch(() => {
    this.iab.create(item.url, '_system');
    });
  }

  shareFacebook(item: any) {
    // let message = item.titulo+". "+item.url;
    // this.socialSharing.shareViaFacebookWithPasteMessageHint(item.titulo, null, item.url, message);
    this.socialSharing.shareViaFacebook(item.titulo, null, item.url);
  }

  shareTwit(item: any) {
    this.socialSharing.shareViaTwitter(item.titulo, null, item.url);
  }

  shareWhatsApp(item: any) {
    this.socialSharing.shareViaWhatsApp(item.titulo, null, item.url);
  }

  */

}
