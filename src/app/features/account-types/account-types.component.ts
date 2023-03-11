import { Component, OnInit } from '@angular/core';
import { CoreService } from '@shared/services/core.service';

@Component({
  selector: 'app-account-types',
  templateUrl: './account-types.component.html',
  styleUrls: ['./account-types.component.css']
})

export class AccountTypesComponent implements OnInit {

  constructor(private readonly service: CoreService) { }
  public tipoCuentaData: TipoCuenta[];
  public menuOption = false;
  public cuentaId :number;
  ngOnInit(): void {
    this.getCuentas();
  }

  public getCuentas(){
    this.service.getCuentaContable().subscribe((data)=>{
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

  public add(){
    const add = {
      codigo: "001",
      descripcion: "123",
      origen: "123",
      estado: true
    }
    this.service.addCuentaContable(add).subscribe();

  }

  public deleted(id):void{
    this.service.deletedCuentaContable(id).subscribe();
/*     this.getCuentas() */
  }



}


export interface TipoCuenta {
  id: number,
  codigo: string,
  descripcion: string,
  origen: string,
  estado: boolean
}