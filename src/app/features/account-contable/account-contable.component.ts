import { Component, OnInit } from '@angular/core';
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
  public cuentaId :number;
  ngOnInit(): void {
    this.getCuentas();
  }

  public getCuentas(){
    this.service.getCuentaContables().subscribe((data)=>{
      this.tipoCuentaData = data
    })
  }

  public modalActiveWindow: string;
  public openModalWindow(windowName: string, id?:number): void {
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
  id: number,
  codigo: string,
  descripcion: string,
  permiteTransaciones: string,
  nivel: number,
  cuentaMayor: string,
  balance: number,
  estado: boolean
  tipoCuentaContableId: number,
  tipoMonedaId: number,
}