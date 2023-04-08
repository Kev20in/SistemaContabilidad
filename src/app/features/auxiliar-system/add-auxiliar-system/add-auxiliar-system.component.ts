import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CoreService } from '@shared/services/core.service';

@Component({
  selector: 'app-add-auxiliar-system',
  templateUrl: './add-auxiliar-system.component.html',
  styleUrls: ['./add-auxiliar-system.component.css']
})
export class AddAuxiliarSystemComponent implements OnInit {

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

  public ngOnInit(): void {
    if(this.cuantaId){
    this.isEdit = true
    this.service.getSistemasAuxiliaresbyId(this.cuantaId).subscribe((data)=>{
      this.addAccountContableForm = this.formBuilder.group({
        id: data._id,
        nombre: data.nombre,
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
      nombre: [''],
      estado: [ ],
    });

  }
  /* public selectedValue(value: string, valueToChange: string) {
    // this.editClientForm.get(valueToChange)?.patchValue(value);
  } */
  public addClient(add): void {
    this.service.addSistemasAuxiliares(add).subscribe();
    this.closeWindow();
  }
  public updateClient(edit): void {
    this.service.updateSistemasAuxiliares(this.cuantaId, edit).subscribe();
    this.closeWindow();
  }
}