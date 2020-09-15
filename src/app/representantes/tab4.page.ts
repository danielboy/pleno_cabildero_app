import { Component } from '@angular/core';
import { DetailsPage } from './details/details.page';
import { ModalController, ToastController, LoadingController } from '@ionic/angular';
import { PopoverController } from '@ionic/angular';
import { PopoverCuentaComponent } from '../component/popover-cuenta/popover-cuenta.component';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page {

  segmentModel = 'Diputados';

  senadores = [
    {
      nombre: 'Miguel Ángel Navarro Quintero',
      suplente: 'Daniel Sepúlveda Árcega',
      email: 'miguel.navarro@senado.gob.mx',
      tipo_eleccion: 'Mayoría Relativa',
      partido: 'MORENA',
      entidad: 'Nayarit',
      cv: '',
      iniciativas: '',
      proposiciones: '',
      asistencias: '',
      votaciones: '',
      imagen: 'assets/varios/navarro.jpg'
    },
    {
      nombre: 'Gloria Elizabeth Núñez Sánchez',
      suplente: 'Martha María Rodríguez Domínguez',
      email: 'gloria.nunez@senado.gob.mx',
      tipo_eleccion: 'Primera Minoria',
      partido: 'PAN',
      entidad: 'Nayarit',
      cv: '',
      iniciativas: '',
      proposiciones: '',
      asistencias: '',
      votaciones: '',
      imagen: 'assets/varios/gloria.jpg'
    },
    {
      nombre: 'Cora Cecilia Pinedo Alonso',
      suplente: 'Sandra Elizabeth Alonso Gutiérrez',
      email: ' cora.pinedo@senado.gob.mx',
      tipo_eleccion: 'Mayoría Relativa',
      partido: 'PT',
      entidad: 'Nayarit',
      cv: '',
      iniciativas: '',
      proposiciones: '',
      asistencias: '',
      votaciones: '',
      imagen: 'assets/varios/cora.jpg'
    }
  ];

  diputados = [
    {
      nombre: ' María Geraldine Ponce Méndez',
      suplente: 'África Azucena Sánchez Hernández',
      email: 'maria.ponce@diputados.gob.mx',
      tipo_eleccion: 'Mayoría Relativa',
      partido: 'MORENA ',
      entidad: 'Nayarit',
      cv: '',
      iniciativas: '',
      proposiciones: '',
      asistencias: '',
      votaciones: '',
      imagen: 'assets/varios/Geraldine.jpg'
    },
    {
      nombre: 'Martha Elena García Gómez',
      suplente: 'Mayela Leonila Godínez Alarcón',
      email: 'melena.garcia@diputados.gob.mx',
      tipo_eleccion: 'Representación proporcional',
      partido: 'PAN ',
      entidad: 'Nayarit',
      cv: '',
      iniciativas: '',
      proposiciones: '',
      asistencias: '',
      votaciones: '',
      imagen: 'assets/varios/martha.jpg'
    }
  ];

  constructor(    public toast: ToastController,
                  public modal: ModalController,
                  public Popover: PopoverController) {}


  segmentChanged(event){
    console.log(this.segmentModel);
    console.log(event);
  }

  async presentModal(post) {
    const modal = await this.modal.create({
      component: DetailsPage,
      componentProps: post
    });
    return await modal.present();
  }

  async presentToast() {
    const toast = await this.toast.create({
      message: 'No se cargaron las noticias, revisa tu conexión a internet.',
      duration: 4000
    });
    toast.present();
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
