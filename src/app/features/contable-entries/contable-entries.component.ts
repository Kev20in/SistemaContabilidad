import { Component, OnInit } from '@angular/core';
import { CoreService } from '@shared/services/core.service';

@Component({
  selector: 'app-contable-entries',
  templateUrl: './contable-entries.component.html',
  styleUrls: ['./contable-entries.component.css']
})
export class ContableEntriesComponent implements OnInit {

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
