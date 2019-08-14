import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { MenuPage } from './menu.page';
const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children: [
      
      {
        path: 'workflow',
        loadChildren: '../workflowtabs/workflowtabs.module#WorkflowtabsPageModule'
      },
      {
        path: 'home',
        loadChildren: '../home/home.module#HomePageModule'
      },
      {
        path: 'rollcall',
        loadChildren: '../rollcalltabs/rollcalltabs.module#RollcalltabsPageModule'
      }
    ]
    
  },
];
 
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MenuPage]
})
export class MenuPageModule { }