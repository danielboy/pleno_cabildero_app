import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Chart } from 'chart.js';
import { PopoverController } from '@ionic/angular';
import { PopoverCuentaComponent } from '../component/popover-cuenta/popover-cuenta.component';

@Component({
  selector: 'app-tab5',
  templateUrl: 'tab5.page.html',
  styleUrls: ['tab5.page.scss']
})
export class Tab5Page   {

  @ViewChild('barCanvas') barCanvas: ElementRef;
  @ViewChild('doughnutCanvas') doughnutCanvas: ElementRef;
  @ViewChild('lineCanvas') lineCanvas: ElementRef;

  private barChart: Chart;
  private doughnutChart: Chart;
  private lineChart: Chart;

  constructor( public Popover: PopoverController ) {}
  ionViewWillEnter(): void {
    this.barChart = new Chart(this.barCanvas.nativeElement, {
      type: 'horizontalBar',
      data: {
        labels: ['Miguel Ángel Navarro', ' María Geraldine Ponce', 'Gloria Elizabeth Núñez'],
        datasets: [{
            label: 'INTERACCIÓN',
            data: [59, 87, 45],
            backgroundColor: '#5B7BEC',
            borderColor: '#1A1A1A',
            borderWidth: 1
        }, {
            label: 'DESEMPEÑO',
            backgroundColor: '#00FFCC',
            data: [59, 85, 23],
            borderColor: '#1A1A1A',
            borderWidth: 1
        }, {
            label: 'TRANSPARENCIA',
            backgroundColor: '#C9C9C8',
            data: [59, 65, 51],
            borderColor: '#1A1A1A',
            borderWidth: 1
        }],
    },
      options: {
        scales: {
          xAxes: [{
            barPercentage: 0.9,
            gridLines: {
              offsetGridLines: true
            },
            stacked: true
          }],
          yAxes: [{
            ticks: {
              beginAtZero: true
            },
            stacked: true
          }]
        }
      }
    });

    this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
      type: 'bar',
      data: {
        labels: ['PRI', 'PRD', 'MORENA', 'PT', 'Sin Partido', 'PAN', 'MC', 'NA'],
        datasets: [
          {
            data: [7, 5, 2, 2, 2, 10, 1, 1],
            backgroundColor: [
              '#e41919hsl',
              '#ffcc00',
              '#fffff0',
              '#ff1d1d',
              '#989298',
              '#002a95',
              '#ff8209',
              '#079ebb'
            ],
            borderWidth: 1
          }
        ]
      },
      options: {
        legend: {
          display: false
      },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });

    this.lineChart = new Chart(this.lineCanvas.nativeElement, {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'My First dataset',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [65, 59, 80, 81, 56, 55, 40],
            spanGaps: false
          }
        ]
      }
    });
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
