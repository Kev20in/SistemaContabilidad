import { Component, OnInit } from '@angular/core';
import { CoreService } from '@shared/services/core.service';

@Component({
  selector: 'app-currency-type',
  templateUrl: './currency-type.component.html',
  styleUrls: ['./currency-type.component.css']
})
export class CurrencyTypeComponent implements OnInit {

  constructor(private readonly service: CoreService) { }
  public tipoCuentaData: TipoMoneda[];
  public menuOption = false;
  public cuentaId :string;
  ngOnInit(): void {
    this.getCuentas();
  }

  public getCuentas(){
    this.service.getTipoMoneda().subscribe((data)=>{
      this.tipoCuentaData = data
    })
  }

  public updateCuentas(){
    setTimeout(() => {
      this.service.getTipoMoneda().subscribe((data)=>{
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
    this.service.deletedTipoMoneda(id).subscribe();
    this.updateCuentas();
  }



}


export interface TipoMoneda {
  _id: string,
  codigo: string,
  descripcion: string,
  ultimaTasaCambiara: number,
  estado: boolean
}
