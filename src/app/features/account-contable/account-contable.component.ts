import { Component, OnInit } from '@angular/core';
import { TipoCuenta } from '@features/account-types/account-types.component';
import { TipoMoneda } from '@features/currency-type/currency-type.component';
import { CoreService } from '@shared/services/core.service';

@Component({
  selector: 'app-account-contable',
  templateUrl: './account-contable.component.html',
  styleUrls: ['./account-contable.component.css']
})
export class AccountContableComponent implements OnInit {

  constructor(private readonly service: CoreService) { }
  public tipoCuentaData: CuentaContable[];
  public menuOption = false;
  public cuentaId :string;
  public monedaDropdown:TipoMoneda[];
  public cuentaDropdown:TipoCuenta[];
  ngOnInit(): void {
    this.getCuentas();
  }

  public getCuentas(){
    this.service.getTipoMoneda().subscribe((data)=>{
      this.monedaDropdown = data
    })
    this.service.getCuentaContable().subscribe((data)=>{
      this.cuentaDropdown = data
    })
    this.service.getCuentaContables().subscribe((data)=>{
      this.tipoCuentaData = data
    })
  }
//  public nombreCuenta
  public getNombre(id:string){
    const nombreCuenta = this.cuentaDropdown.find(obj => obj._id === id);
    return nombreCuenta.descripcion
  }
  public getMoneda(id:string){
    const tipoMoneda = this.monedaDropdown.find(obj => obj._id === id);
    return tipoMoneda.descripcion
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
    this.service.deletedCuentaContable(id).subscribe();
/*     this.getCuentas() */
  }



}


export interface CuentaContable {
  _id: string,
  codigo: string,
  descripcion: string,
  permiteTransaciones: string,
  nivel: number,
  cuentaMayor: string,
  balance: number,
  estado: boolean
  tipoCuentaContableId: string,
  tipoMonedaId: string,
}