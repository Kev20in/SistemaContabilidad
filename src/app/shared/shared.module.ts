import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { AcountsService } from './services/acounts.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreService } from './services/core.service';
import { ModalComponent } from './components/modal/modal.component';


const providers = [
  AcountsService,
  CoreService
]
@NgModule({
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [ CommonModule, FormsModule, ReactiveFormsModule,ModalComponent],
  providers: [...providers],
  declarations: [
    ModalComponent
  ],

})
export class SharedModule { }
