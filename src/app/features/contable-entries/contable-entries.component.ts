import { Component, OnInit } from '@angular/core';
import { TipoCuenta } from '@features/account-types/account-types.component';
import { AuxiliarSystem } from '@features/auxiliar-system/auxiliar-system.component';
import { CoreService } from '@shared/services/core.service';

@Component({
  selector: 'app-contable-entries',
  templateUrl: './contable-entries.component.html',
  styleUrls: ['./contable-entries.component.css']
})
export class ContableEntriesComponent implements OnInit {

  constructor(private readonly service: CoreService) { }
  public tipoCuentaData: EntradaContable[];
  public menuOption = false;
  public cuentaId :string;
  public auxiliaresDropdown: AuxiliarSystem[];
  public cuentaDropdown:TipoCuenta[];

  ngOnInit(): void {
    this.getCuentas();
  }

  public getCuentas(){

    this.service.getSistemasAuxiliares().subscribe((data)=>{
      this.auxiliaresDropdown = data
    })
    this.service.getCuentaContable().subscribe((data)=>{
      this.cuentaDropdown = data
    })
    this.service.getEntradaContable().subscribe((data)=>{
      this.tipoCuentaData = data
    })
  }

  public getNombre(id:string){
    const nombreCuenta = this.cuentaDropdown.find(obj => obj._id === id);
    return nombreCuenta.descripcion
  }
  public getAuxiliares(id:string){
    const auxiliares = this.auxiliaresDropdown.find(obj => obj._id === id);
    return auxiliares.nombre
  }

  public updateCuentas(){
    setTimeout(() => {
      this.service.getEntradaContable().subscribe((data)=>{
        this.tipoCuentaData = data
      });
    }, 500 )
  
  }

  public modalActiveWindow: string;
  public openModalWindow(windowName: string, id?:string): void {
    this.modalActiveWindow = windowName;
    this.menuOption = false;
    if(id){
      this.cuentaId = id; 
    }
  }
  public closeModalWindow(closeModalValue: string): void {
    this.getCuentas()
    this.modalActiveWindow = closeModalValue;
  }

  public deleted(id):void{
    this.service.deletedEntradaContable(id).subscribe();
/*     this.getCuentas() */
  }



}


export interface EntradaContable {
  _id: string,
  descripcion: string,
  idOrigen: string,
  cuenta: string,
  tipoMovimiento: string,
  ferchaAsiento: string,
  montoAsiento: string,
  estado: boolean
}
