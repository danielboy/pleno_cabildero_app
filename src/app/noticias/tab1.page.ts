import { Component } from '@angular/core';
import { NotaModal } from './../noticias/details/detail';
import { PopoverController } from '@ionic/angular';
import { PopoverCuentaComponent } from '../component/popover-cuenta/popover-cuenta.component';
import { ModalController, ToastController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss']
})
export class Tab1Page {


  items = [
    {
      titulo: 'Convoca Congreso participar en selección de auditor de la ASEN',
      extracto: 'De acuerdo con la convocatoria aprobada, este proceso de selección que designará al Auditor Superior de la Auditoría Superior de la entidad por un periodo de ocho años, deberá cumplir con las funciones establecidas en la Constitución local.',
      texto: 'De acuerdo con la convocatoria aprobada, este proceso de selección que designará al Auditor Superior de la Auditoría Superior de la entidad por un periodo de ocho años, deberá cumplir con las funciones establecidas en la Constitución local. Uno de los requisitos que establece la convocatoria aprobada es que los aspirantes deben presentar copia certificada del acta de nacimiento, de la credencial para votar vigente, del título y cédula profesional, carta de no antecedentes penales, constancia de no inhabilitación, currículum vitae, documentación oficial que acredite conocimientos o experiencia de al menos cinco años en materia de control, auditoría financiera y de responsabilidades, constancia que acredite residencia efectiva en la entidad de por lo menos cinco años,  tener cuando menos 35 años de edad y ser mexicano. Cada solicitud de registro será dirigida al presidente de la Comisión de Hacienda, Cuenta Pública y Presupuesto, mediante escrito libre y presentarla personalmente ante la Secretaría General, en la sede del recinto oficial del Poder Legislativo en Avenida México número 38 norte, en el centro de la ciudad de Tepic. El 28 de septiembre es el último día de registro; ya pueden acudir a presentar sus propuestas en un horario de 8:00 a 16:00 horas en días hábiles. Una vez cerrado el plazo, las diputadas y diputados integrantes de la Comisión de Hacienda, Cuenta Pública y Presupuesto se reunirán para revisar la documentación recibida, aprobar y publicar la lista de los aspirantes registrados que hayan presentado la documentación completa. Posteriormente se hará una valoración curricular y entrevistas a quienes hayan cumplido con los requisitos de la convocatoria; las entrevistas serán de manera virtual a través de las plataformas digitales que indique el Congreso local. Luego de las entrevistas la Comisión legislativa emitirá un dictamen que contendrá la terna de los aspirantes que hubiesen cumplido con los requisitos, con la entrevista y que a consideración de las diputadas y diputados cuentan con los perfiles idóneos para el cargo para posteriormente ante el pleno de los 30 representantes populares someter a discusión y en su caso votación el dictamen para elegir al titular de la Auditoría Superior del Estado.',
      url: 'http://www.congresonayarit.mx/2020/09/17/convoca-congreso-participar-en-seleccion-de-auditor-de-la-asen/',
      fecha: '2020-09-17',
      imagen: 'assets/varios/eligen.jpeg'
    },
    {
      titulo: 'Elige Congreso magistrados del Tribunal de Justicia Administrativa',
      extracto: 'Los decretos de idoneidad de las ternas enviadas por el Titular del Poder Ejecutivo aprobados por la Trigésima Segunda Legislatura se resolvieron con 27 y 25 votos a favor de Irma Carmina Cortés Hernández y de Juan Manuel Ochoa Sánchez',
      texto: 'Tepic, 02 de septiembre de 2020.- Reconociendo la experiencia y capacidad de cada uno de los aspirantes, las diputadas y diputados aprobaron mediante cédula electrónica la designación de magistrados numerarios  del Tribunal de Justicia Administrativa.',
      url: 'http://www.congresonayarit.mx/2020/09/03/elige-congreso-magistrados-del-tribunal-de-justicia-administrativa/',
      fecha: '2020-09-02',
      imagen: 'assets/varios/suprema.jpg'
    },
    {
      titulo: 'Convoca Congreso a formar parte de la Comisión de Selección del Comité de Participación Ciudadana',
      extracto: 'Tepic, 31 de agosto de 2020.- Para elegir a nueve integrantes de la Comisión de Selección del Comité de Participación Ciudadana del Sistema Local Anticorrupción, el Congreso del Estado a través de la Comisión de Gobernación y Puntos Constitucionales emite convocatoria.',
      texto: 'Tepic, 31 de agosto de 2020.- Para elegir a nueve integrantes de la Comisión de Selección del Comité de Participación Ciudadana del Sistema Local Anticorrupción, el Congreso del Estado a través de la Comisión de Gobernación y Puntos Constitucionales emite convocatoria. Convoca a las instituciones de educación superior y de investigación de la entidad y organizaciones de la sociedad civil especializadas en materia de fiscalización, transparencia, rendición de cuentas y combate a la corrupción, para que propongan integrantes a formar parte de la Comisión de Selección del Comité de Participación Ciudadana del Sistema Local Anticorrupción del Estado de Nayarit, los cuales serán designados por un periodo de tres años. Convoca a las instituciones de educación superior y de investigación de la entidad y organizaciones de la sociedad civil especializadas en materia de fiscalización, transparencia, rendición de cuentas y combate a la corrupción, para que propongan integrantes a formar parte de la Comisión de Selección del Comité de Participación Ciudadana del Sistema Local Anticorrupción del Estado de Nayarit, los cuales serán designados por un periodo de tres años. La convocatoria señala que los aspirantes deben cumplir con ciertos requisitos, como presentar copia certificada del acta de nacimiento, copia certificada de la credencial para votar vigente, carta de no antecedentes penales, constancia de no inhabilitación, no ser ministro de culto religioso, no haber sido condenado por algún delito doloso, no haber ocupado un cargo de dirección en un partido político, copia certificada de los documentos que respalden experiencia y/o conocimiento en materia de fiscalización, transparencia, rendición de cuentas y combate a la corrupción. También deben incluir currículum vitae, en el que se precise la fecha de su nacimiento, los datos generales y número telefónico de la persona propuesta; exposición en la que exprese su proyecto de trabajo y una descripción de las razones que justifican su idoneidad para el cargo. Las solicitudes de registro deben dirigirse al presidente de la Comisión de Gobernación y Puntos Constitucionales y presentarse de manera personal ante la Secretaría General del Congreso del Estado; en Avenida México 38 Norte, Colonia Centro de Tepic, en un horario de 8:00 a 16:00 horas hasta el viernes 11 de septiembre. Una vez cerrado el plazo, la Comisión de Gobernación y Puntos Constitucionales se reunirá para revisar la documentación recibida, aprobar y publicar la lista de las personas que hayan cumplido con los requisitos para posteriormente hacer la valoración curricular y entrevistas a cada uno de los aspirantes, y después elegir ante el Pleno de los 30 representantes populares nayaritas a las personas idóneas. El Sistema Local se coordina entre el gobierno estatal y los municipios en la prevención, detección y sanción de faltas administrativas y hechos de corrupción, así como en la fiscalización y control de recursos públicos, para establecer, articular y evaluar la política en la materia.',
      url: 'http://www.congresonayarit.mx/2020/09/01/convoca-congreso-a-formar-parte-de-la-comision-de-seleccion-del-comite-de-participacion-ciudadana/',
      fecha: '2020-08-31',
      imagen: 'assets/varios/toma.jpeg'
    }
  ];

  constructor(    public toast: ToastController,
                  public modal: ModalController,
                  public Popover: PopoverController ) {}



async presentModal(post) {
  const modal = await this.modal.create({
    component: NotaModal,
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
