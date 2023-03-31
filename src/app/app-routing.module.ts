import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { SignComponent } from './sign/sign.component';

const routes: Routes = [
  {
    path:'',component:LoginComponent,pathMatch:'full'
  },
  {
    path:'sign',component:SignComponent,pathMatch:'full'
  },
  {
    path:'dash',component:DashboardComponent,pathMatch:'full'
  },
  {
    path:'**',component:ErrorComponent,pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
