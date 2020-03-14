import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GridListComponent } from './grid-list/grid-list.component';
import { StepperComponent } from './stepper/stepper.component';
import { TabsComponent } from './tabs/tabs.component';
import { TableComponent } from './table/table.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { HeaderBarComponent } from './header-bar/header-bar.component';
import { LoginComponent } from './login/login.component';


import { AuthGuard } from './_helpers';


const routes: Routes = 
[
  { path: '', component: GridListComponent, canActivate: [AuthGuard] },
  {
     path: 'login',
     component: LoginComponent
   }, 
  {
    path: "grid-list",
    component: GridListComponent
  },
  {
    path: "stepper",
    component: StepperComponent
  },
  {
    path: "tabs",
   component: TabsComponent
  },
  {
    path: "table",
    component: TableComponent
  },
  {
    path: "side-bar",
    component: SideBarComponent
  },
  {
    path: "header-bar",
    component: HeaderBarComponent
  },
 
   // otherwise redirect to home  
  { path: '**', redirectTo: '' }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
