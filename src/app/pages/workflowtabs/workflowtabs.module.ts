import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { WorkflowtabsPage } from './workflowtabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: WorkflowtabsPage,
    children: [
      {
        path: 'dashboard',
        loadChildren: '../workflow/dashboard/dashboard.module#DashboardPageModule'
      },
      {
        path: 'tab1/details',
        loadChildren: '../details/details.module#DetailsPageModule'
      },
      {
        path: 'tasks',
        loadChildren: '../workflow/tasks/tasks.module#TasksPageModule'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'tabs/dashboard',
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
  declarations: [WorkflowtabsPage]
})
export class WorkflowtabsPageModule {}
