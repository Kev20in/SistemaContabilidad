import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from '@core/components/main/main.component';
import { LoginComponent } from '@core/components/login/login.component';


const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: '', loadChildren: () => import('@features/features.module').then((m) => m.FeaturesModule) }
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  },
]
 


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule { }
