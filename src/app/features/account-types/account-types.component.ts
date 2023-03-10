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
  ngOnInit(): void {
    this.service.getCuentaContable().subscribe((data)=>{
      this.tipoCuentaData = data
      console.log(data);
    })
    
  }

}


export interface TipoCuenta {
  id: number,
  codigo: string,
  descripcion: string,
  origen: string,
  estado: boolean
}