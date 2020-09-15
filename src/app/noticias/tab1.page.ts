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
      titulo: 'Seleccionan a 10 candidatas para ocupar magistratura del TSJ',
      extracto: 'El presidente del Tribunal Superior de Justicia, Francisco Javier Mendoza, señaló que al admitir los diez perfiles cumplirían ',
      texto: 'El Pleno del Consejo de la Judicatura de Nuevo León seleccionó a diez mujeres para que una de ellas ocupe el cargo de Magistrada del Tribunal Superior de Justicia (TSJ). En sesión presencial en la que se siguieron los protocolos sanitarios, el presidente del TSJ y del Consejo de la Judicatura, Francisco Javier Mendoza, dijo que al admitir los diez perfiles, se daría cumplimiento a lo dispuesto en la convocatoria pública emitida la semana pasada. Te recomendamos: Utilizará San Nicolás recursos propios para reparación en canalón En este sentido, el secretario General de Acuerdos entregó a los consejeros un tarjetón sellado, con los nombres de los 25 aspirantes que cumplieron con los requisitos. Sin embargo, los consejeros pasaron a un atril del Pleno para marcar en la boleta los nombres de los diez aspirantes que, de acuerdo al análisis jurídico, cuentan con aptitudes y el perfil adecuado para desempeñarse en el citado cargo.',
      url: 'https://www.milenio.com/politica/leon-eligen-10-candidatas-ocupar-magistratura-tsj',
      fecha: '2020-09-08',
      imagen: 'assets/varios/eligen.jpeg'
    },
    {
      titulo: 'Estado evade adeudo a Fiscalía con controversia en la SCJN… y pierde',
      extracto: 'Pleito. Pese al fallo del Tribunal Superior de Justicia para que el gobierno de NL entregara más de 3 mil mdp y un acuerdo posterior, el secretario general, Manuel González, promovió recursos ante la Corte.',
      texto: 'Mientras que de manera pública se muestra conciliador, el gobierno del estado maneja un doble discurso, ya que en lo que va del año, ha presentado una controversia constitucional ante la Suprema Corte de Justicia de la Nación (SCJN), que ya fue rechazada y actualmente está en proceso un segundo recurso para no pagar a la Fiscalía General de Justicia un adeudo correspondiente al presupuesto 2019. El 6 de diciembre de 2019, el Tribunal Superior de Justicia (TSJ) falló a favor del organismo encabezado por Gustavo Adolfo Guerrero en una controversia, obligando al estado a entregar una partida de 3 mil 377 millones de pesos -una diferencia de 413.7 millones de pesos contra lo autorizado por las autoridades estatales- eliminada de manera unilateral dentro del recurso asignado a la Fiscalía General de Justicia. Fuentes confirmaron que el gobierno estatal le otorgó una ampliación de 222 millones de pesos a la Fiscalía, por lo que el adeudo al día de hoy supera los 191 millones de pesos. Pese a que el 24 de enero del presente año se anunció la existencia de un acuerdo para cubrir ese monto, en realidad el secretario general de gobierno, Manuel González, promovió una controversia constitucional semanas después para evadir dicha responsabilidad. Ese día, en palacio de gobierno se reunieron por varias horas González Flores, el tesorero de Nuevo León, Carlos Garza, y el fiscal Gustavo Adolfo Guerrero. "Ya termina la discusión sobre la controversia entre la Fiscalía General y el Ejecutivo y el convenio que se celebró será publicado en los próximos días, pero consiste en unos terrenos de gobierno para la Fiscalía, para que sean utilizados en la construcción de oficinas que la Fiscalía requiere. Llegamos a un feliz acuerdo y a un feliz término de esta controversia", dijo Manuel González a los medios de comunicación en esa ocasión. Semanas después de esta declaración, el número dos de la administración estatal presentó una controversia constitucional ante la Suprema Corte, la cual fue desechada por el Pleno el 17 de marzo. González Flores sustentó la queja en que, con su determinación, el Tribunal Superior de Justicia violentó la autonomía del gobierno estatal y la división de poderes; los ministros advirtieron que la controversia constitucional no era la vía para resolver el tema. “Al respecto, este alto tribunal ha establecido que la controversia constitucional no es la vía idónea para impugnar determinaciones jurisdiccionales dictadas por tribunales judiciales o administrativos. Incluso, en los casos en que se aduzcan violaciones a preceptos de la Constitución federal, porque reconocer la procedencia de esta vía para plantear la invalidez de un acto de esta naturaleza, implicaría hacer de este medio de control constitucional un recurso o ulterior medio de defensa para someter a revisión una cuestión relativa al procedimiento natural”, se lee en la sentencia. Tras el revés, el gobierno estatal promovió el pasado 28 de julio un recurso de reclamación nuevamente ante la Suprema Corte, por conducto de José Arcadio Molina Villagómez, delegado del Poder Ejecutivo de Nuevo León, del cual MILENIO posee una copia. Al ser aceptado para su estudio y quedar enlistado como el expediente 59/2020-CA, el estado gana más tiempo, por lo que el pleito legal seguirá por varios meses y podría resolverse hasta 2021.',
      url: 'https://www.milenio.com/politica/evade-adeudo-fiscalia-controversia-scjn-pierde',
      fecha: '2020-08-31',
      imagen: 'assets/varios/suprema.jpg'
    },
    {
      titulo: 'Toma protesta Ángel García Guerra como magistrado del TSJ',
      extracto: 'Ángel Mario García Guerra tomó protesta como Magistrado de la Duodécima Sala Penal y Cuarta Colegiada Penal del TSJ por un periodo de 10 años.',
      texto: 'Dos años después de litigios, finalmente Ángel Mario García Guerra tomó protesta como magistrado de la Duodécima Sala Penal y por ende a la Segunda Sala Colegiada Penal del Tribunal Superior de Justicia (TSJ) para un periodo de 10 años. El ahora magistrado rindió protesta a las 11:40 horas ante la sesión extraordinaria de la Diputación Permanente del Congreso local. Te recomendamos: Alcaldesa propone tener un administrador de crisis tras covid-19 Después de tomar protesta, García Guerra asistió a la Sesión Solemne del TSJ programada para las 12:00, en la que le asignaron las citadas salas. “El precedente que se marca es que nunca en la historia de México un Tribunal Colegiado había proyectado destitución por desacato de todo un Poder Legislativo. “No podemos ser cómplices de violaciones reiteradas a la ley. No creo que tenga que ver con cosas políticas, sé que hay diputados que me han apoyado, pero no tengo contacto personal con ellos”, declaró García Guerra para MILENIO Monterrey. En este sentido, dijo que afortunadamente están pasando por un proceso judicial federal, el cual aún no concluye, debido a que están tomando en cuenta la votación del 18 de diciembre de 2019 que fue la que el Colegiado resolvió hace dos semanas. “Considero que a finales de septiembre el Colegiado podría enviar el sentido del proyecto a la Corte. Ésta ya les había dicho que me ratificaran, pero lo desacataron y el artículo 198 de la Ley de Amparo claramente dice que la Corte resolverá a la brevedad posible. “Lo que le limitará en su participación por la contienda electoral es que tuvieran una sentencia penal por un delito y evidentemente no la van a tener pronto, esto se tardaría mucho tiempo, no interferiría”, indicó para MILENIO Monterrey, García Guerra. El lunes pasado, con la presión del Consejo de la Judicatura y una posible destitución en puerta, el Congreso local ratificó a García Guerra como magistrado del TSJ. “Se ratifica al C. Doctor Ángel Mario García Guerra como Magistrado del Tribunal Superior de Justicia del Estado para fungir por un segundo periodo de diez años, a partir del 1 de marzo de 2018, hasta el último día de febrero de 2028“, leyó Juan Carlos Ruiz, presidente del Legislativo. En este sentido, sorprendió que en el decreto aprobado indica que, a García Guerra, se le deberán cubrir los salarios y prestaciones vencidas desde el primero de marzo de 2018, y hasta la fecha en que tome posesión nuevamente de su encargo como magistrado del TSJ, lo que equivaldría a poco más de 4 millones de pesos.',
      url: 'https://www.milenio.com/politica/toma-protesta-angel-garcia-guerra-magistrado-tsj',
      fecha: '2020-08-26',
      imagen: 'assets/varios/toma.jpeg'
    }
  ];

  constructor(    public toast: ToastController,
                  public modal: ModalController,
                  public Popover: PopoverController) {}



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
