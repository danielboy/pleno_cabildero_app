import { Component } from '@angular/core';
// import { ModalController } from '@ionic/angular';
import { PopoverController } from '@ionic/angular';
import { PopoverCuentaComponent } from '../component/popover-cuenta/popover-cuenta.component';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  comi = 'all';

  lists = [
    {
      nombre: 'Miguel Ángel Navarro Quintero',
      suplente: 'Daniel Sepúlveda Árcega',
      email: 'miguel.navarro@senado.gob.mx',
      tipo_eleccion: 'Mayoría Relativa',
      partido: 'MORENA',
      entidad: 'Nayarit',
      comision: 'Salud',
      cv: '',
      mensajes: '',
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
      comision: 'Turismo',
      cv: '',
      mensajes: '',
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
      comision: 'Salud',
      cv: '',
      mensajes: '',
      asistencias: '',
      votaciones: '',
      imagen: 'assets/varios/cora.jpg'
    },
    {
      nombre: ' María Geraldine Ponce Méndez',
      suplente: 'África Azucena Sánchez Hernández',
      email: 'maria.ponce@diputados.gob.mx',
      tipo_eleccion: 'Mayoría Relativa',
      partido: 'MORENA ',
      entidad: 'Nayarit',
      comision: 'Deporte',
      cv: '',
      mensajes: '',
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
      comision: 'Infraestructura',
      cv: '',
      mensajes: '',
      asistencias: '',
      votaciones: '',
      imagen: 'assets/varios/martha.jpg'
    }
  ];


  constructor( public Popover: PopoverController )  {}



  async cuenta() {
    const popover = await this.Popover.create({
      component: PopoverCuentaComponent,
      cssClass: 'cuenta-modal ',
      translucent: true
    });
    return await popover.present();
  }
}
