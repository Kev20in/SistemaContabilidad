import { Component, OnInit } from '@angular/core';
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
  public cuentaId :number;
  ngOnInit(): void {
    this.getCuentas();
  }

  public getCuentas(){
    this.service.getEntradaContable().subscribe((data)=>{
      this.tipoCuentaData = data
    })
  }
  public updateCuentas(){
    setTimeout(() => {
      this.service.getEntradaContable().subscribe((data)=>{
        this.tipoCuentaData = data
      });
    }, 500 )
  
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
    this.service.deletedEntradaContable(id).subscribe();
/*     this.getCuentas() */
  }



}


export interface EntradaContable {
  id: number,
  codigo: string,
  descripcion: string,
  origen: string,
  estado: boolean
}
