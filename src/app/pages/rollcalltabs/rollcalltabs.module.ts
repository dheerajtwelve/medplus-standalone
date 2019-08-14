import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RollcalltabsPage } from './rollcalltabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: RollcalltabsPage,
    children: [
      {
        path: 'history',
        loadChildren: '../rollcall/history/history.module#HistoryPageModule'
      },
      {
        path: 'tab1/details',
        loadChildren: '../details/details.module#DetailsPageModule'
      },
      {
        path: 'submitreq',
        loadChildren: '../rollcall/submitreq/submitreq.module#SubmitreqPageModule'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'tabs/history',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RollcalltabsPage]
})
export class RollcalltabsPageModule {}
