import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AccountTypesComponent } from './account-types/account-types.component';
import { AuxiliarSystemComponent } from './auxiliar-system/auxiliar-system.component';
import { AccountContableComponent } from './account-contable/account-contable.component';
import { CurrencyTypeComponent } from './currency-type/currency-type.component';
import { ContableEntriesComponent } from './contable-entries/contable-entries.component';


@NgModule({
  declarations: [
    AccountTypesComponent,
    AuxiliarSystemComponent,
    AccountContableComponent,
    CurrencyTypeComponent,
    ContableEntriesComponent
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    SharedModule
  ]
})
export class FeaturesModule { }
