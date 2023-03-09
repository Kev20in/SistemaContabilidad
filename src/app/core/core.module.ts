import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from '../features/home/home.component';

const declarations = [
  MainComponent
]
@NgModule({
  declarations: [
    ...declarations,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    SharedModule,
    RouterModule
  ]
})
export class CoreModule { }
