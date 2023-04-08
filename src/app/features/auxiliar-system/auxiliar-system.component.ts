import { Component, OnInit } from '@angular/core';
import { CoreService } from '@shared/services/core.service';

@Component({
  selector: 'app-auxiliar-system',
  templateUrl: './auxiliar-system.component.html',
  styleUrls: ['./auxiliar-system.component.css']
})
export class AuxiliarSystemComponent implements OnInit {

  constructor(private readonly service: CoreService) { }
  public tipoCuentaData: AuxiliarSystem[];
  public menuOption = false;
  public cuentaId :string;
  ngOnInit(): void {
    this.getCuentas();
  }

  public getCuentas(){
    this.service.getSistemasAuxiliares().subscribe((data)=>{
      this.tipoCuentaData = data
    })
  }

  public updateCuentas(){
    setTimeout(() => {
      this.service.getSistemasAuxiliares().subscribe((data)=>{
        this.tipoCuentaData = data
      });
    }, 200 )
  
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
    this.service.deletedSistemasAuxiliares(id).subscribe();
    this.updateCuentas();
  }



}


export interface AuxiliarSystem {
  _id: string,
  nombre: string,
  estado: boolean
}
