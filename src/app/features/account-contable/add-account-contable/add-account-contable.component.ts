import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TipoCuenta } from '@features/account-types/account-types.component';
import { TipoMoneda } from '@features/currency-type/currency-type.component';
import { CoreService } from '@shared/services/core.service';

@Component({
  selector: 'app-add-account-contable',
  templateUrl: './add-account-contable.component.html',
  styleUrls: ['./add-account-contable.component.css']
})
export class AddAccountContableComponent implements OnInit {

  public isSelectInvalid = false;
  public isEdit = false;
  @Input() public cuantaId:string;
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
  public monedaDropdown:TipoMoneda[];
  public cuentaDropdown:TipoCuenta[];

  public ngOnInit(): void {
    if(this.cuantaId){
    this.isEdit = true
    this.service.getCuentaContablesbyId(this.cuantaId).subscribe((data)=>{
      this.addAccountContableForm = this.formBuilder.group({
        id: data._id,
        codigo: data.codigo,
        descripcion: data.descripcion,
        permiteTransaciones:data.permiteTransaciones,
        nivel:data.nivel,
        cuentaMayor:data.cuentaMayor,
        balance:data.balance,
        tipoCuentaContableId:data.tipoCuentaContableId,
        tipoMonedaId:data.tipoMonedaId,
        estado: data.estado,
      });
    });
    }
    this.service.getTipoMoneda().subscribe((data)=>{
      this.monedaDropdown = data
    })
    this.service.getCuentaContable().subscribe((data)=>{
      this.cuentaDropdown = data
    })
    this.buildForm();
   }

  public option1 = true;
  public option2 = false;

  public buildForm(): void {
    this.addAccountContableForm = this.formBuilder.group({
      codigo: ['', Validators.required],
      descripcion: ['', Validators.required],
      permiteTransaciones: [''],
      nivel: [''],
      cuentaMayor: [''],
      balance: [''],
      tipoCuentaContableId: [''],
      tipoMonedaId: [''],
      estado: [ ],
    });

  }
  /* public selectedValue(value: string, valueToChange: string) {
    // this.editClientForm.get(valueToChange)?.patchValue(value);
  } */
  public addClient(add): void {
    this.service.addCuentaContables(add).subscribe();
    this.closeWindow();
  }
  public updateClient(edit): void {
    this.service.updateCuentaContables(this.cuantaId,edit).subscribe();
    this.closeWindow();
  }
}
