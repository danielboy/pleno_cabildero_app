import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'noticias',
        loadChildren: () => import('../noticias/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'agenda',
        loadChildren: () => import('../agenda/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'mapeo',
        loadChildren: () => import('../mapeo/tab3.module').then(m => m.Tab3PageModule)
      },
      {
        path: 'sondeos',
        loadChildren: () => import('../sondeos/tab4.module').then(m => m.Tab4PageModule)
      },
      {
        path: 'estadisticas',
        loadChildren: () => import('../estadisticas/tab5.module').then(m => m.Tab5PageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/noticias',
        pathMatch: 'full',
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/noticias',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
