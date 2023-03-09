import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AccountTypesComponent } from './account-types/account-types.component';


@NgModule({
  declarations: [
    AccountTypesComponent
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    SharedModule
  ]
})
export class FeaturesModule { }
