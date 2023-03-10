import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '@features/home/home.component';
import { AccountContableComponent } from './account-contable/account-contable.component';
import { AccountTypesComponent } from './account-types/account-types.component';
import { AuxiliarSystemComponent } from './auxiliar-system/auxiliar-system.component';
import { ContableEntriesComponent } from './contable-entries/contable-entries.component';
import { CurrencyTypeComponent } from './currency-type/currency-type.component';

const routes: Routes = [
  {
    path: 'Home',
    component: HomeComponent
  },
  {
    path: 'AccountType',
    component: AccountTypesComponent
  },
  {
    path: 'AuxiliarSystem',
    component: AuxiliarSystemComponent
  },
  {
    path: 'AccountContable',
    component: AccountContableComponent
  },
  {
    path: 'CurrencyType',
    component: CurrencyTypeComponent
  },
  {
    path: 'ContableEntries',
    component: ContableEntriesComponent
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
