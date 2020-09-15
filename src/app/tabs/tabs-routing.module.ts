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
        path: 'tribuna',
        loadChildren: () => import('../tribuna/tab3.module').then(m => m.Tab3PageModule)
      },
      {
        path: 'representantes',
        loadChildren: () => import('../representantes/tab4.module').then(m => m.Tab4PageModule)
      },
      {
        path: 'vota',
        loadChildren: () => import('../vota/tab5.module').then(m => m.Tab5PageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/noticias',
        pathMatch: 'full'
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
