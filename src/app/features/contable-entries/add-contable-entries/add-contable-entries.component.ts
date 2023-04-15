import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TipoCuenta } from '@features/account-types/account-types.component';
import { AuxiliarSystem } from '@features/auxiliar-system/auxiliar-system.component';
import { TipoMoneda } from '@features/currency-type/currency-type.component';
import { CoreService } from '@shared/services/core.service';

@Component({
  selector: 'app-add-contable-entries',
  templateUrl: './add-contable-entries.component.html',
  styleUrls: ['./add-contable-entries.component.css'],
})
export class AddContableEntriesComponent implements OnInit {
  public isSelectInvalid = false;
  public isEdit = false;
  @Input() public cuantaId: string;
  @Output() public clientUpdated = new EventEmitter();
  @Output() public closeEvent = new EventEmitter();

  public closeWindow(): void {
    this.clientUpdated.emit('');
    this.closeEvent.emit('');
  }
  constructor(
    private readonly service: CoreService,
    private readonly formBuilder: FormBuilder
  ) {}

  public addContableEntriesForm: FormGroup;
  public auxiliaresDropdown: AuxiliarSystem[];
  public cuentaDropdown: TipoCuenta[];

  public ngOnInit(): void {
    if (this.cuantaId) {
      this.isEdit = true;
      this.service.getEntradaContablebyId(this.cuantaId).subscribe((data) => {
        this.addContableEntriesForm = this.formBuilder.group({
          _id: data._id,
          descripcion: data.descripcion,
          idOrigen: data.idOrigen,
          cuenta: data.cuenta,
          tipoMovimiento: data.tipoMovimiento,
          ferchaAsiento: data.ferchaAsiento,
          montoAsiento: data.montoAsiento,
          estado: data.estado,
        });
      });
    }
    this.service.getSistemasAuxiliares().subscribe((data) => {
      this.auxiliaresDropdown = data;
    });
    this.service.getCuentaContable().subscribe((data) => {
      this.cuentaDropdown = data;
    });
    this.buildForm();
  }

  public option1 = true;
  public option2 = false;

  public buildForm(): void {
    this.addContableEntriesForm = this.formBuilder.group({
      descripcion: ['', Validators.required],
      idOrigen: [''],
      cuenta: [''],
      tipoMovimiento: [''],
      ferchaAsiento: [''],
      montoAsiento: [''],
      estado: [],
    });
  }
  /* public selectedValue(value: string, valueToChange: string) {
    // this.editClientForm.get(valueToChange)?.patchValue(value);
  } */
  public pre_add(){
    const currentDate = new Date();
    console.log(currentDate.toLocaleDateString());
    this.addContableEntriesForm.controls['ferchaAsiento'].patchValue(currentDate);
    this.addClient(this.addContableEntriesForm.value)
  }
  public pre_edit(){
    const currentDate = new Date();
    console.log(currentDate);
    this.addContableEntriesForm.controls['ferchaAsiento'].patchValue(currentDate);
    this.updateClient(this.addContableEntriesForm.value)
  }
  public addClient(add): void {
    this.service.addEntradaContable(add).subscribe();
    this.closeWindow();
  }
  public updateClient(edit): void {
    this.service.updateEntradaContable(this.cuantaId, edit).subscribe();
    this.closeWindow();
  }
}
