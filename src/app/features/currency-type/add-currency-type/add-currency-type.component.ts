import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CoreService } from '@shared/services/core.service';

@Component({
  selector: 'app-add-currency-type',
  templateUrl: './add-currency-type.component.html',
  styleUrls: ['./add-currency-type.component.css']
})
export class AddCurrencyTypeComponent implements OnInit {

  public isSelectInvalid = false;
  public isEdit = false;
  @Input() public cuantaId:number;
  @Output() public clientUpdated = new EventEmitter();
  @Output() public closeEvent = new EventEmitter();

  public closeWindow(): void {
    this.clientUpdated.emit('');
    this.closeEvent.emit('');
  }
  constructor(
    private readonly service: CoreService,
    private readonly formBuilder: FormBuilder,
  ) {}

  public addAccountContableForm: FormGroup;

  public ngOnInit(): void {
    if(this.cuantaId){
    this.isEdit = true
    this.service.getTipoMonedabyId(this.cuantaId).subscribe((data)=>{
      this.addAccountContableForm = this.formBuilder.group({
        id: data.id,
        codigo: data.codigo,
        descripcion: data.descripcion,
        ultimaTasaCambiara:data.ultimaTasaCambiara,
        estado: data.estado,
      });
    });
    }
    this.buildForm();
   }

  public option1 = true;
  public option2 = false;

  public buildForm(): void {
    this.addAccountContableForm = this.formBuilder.group({
      codigo: [''],
      descripcion: [''],
      ultimaTasaCambiara: [0],
      estado: [ ],
    });

  }
  /* public selectedValue(value: string, valueToChange: string) {
    // this.editClientForm.get(valueToChange)?.patchValue(value);
  } */
  public addClient(add): void {
    this.service.addTipoMoneda(add).subscribe();
    this.closeWindow();
  }
  public updateClient(edit): void {
    this.service.updateTipoMoneda(edit).subscribe();
    this.closeWindow();
  }
}
