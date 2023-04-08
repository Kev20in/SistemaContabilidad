import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CuentaContable } from '@features/account-contable/account-contable.component';
import { TipoCuenta } from '@features/account-types/account-types.component';
import { AuxiliarSystem } from '@features/auxiliar-system/auxiliar-system.component';
import { EntradaContable } from '@features/contable-entries/contable-entries.component';
import { TipoMoneda } from '@features/currency-type/currency-type.component';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CoreService {
  
  private readonly serviceUrl = `${environment.baseUrl}`;

  constructor(private readonly http: HttpClient,) { }
//tipo de cuenta//
  public getCuentaContable():Observable<TipoCuenta[]>{
    const url = `${this.serviceUrl}account-type`;
    return this.http.get<TipoCuenta[]>(url);
  }
  public getCuentaContablebyId(id:string):Observable<TipoCuenta>{
    const url = `${this.serviceUrl}account-type/${id}`;
    return this.http.get<TipoCuenta>(url);
  }
  public addCuentaContable(form){
    const url = `${this.serviceUrl}account-type/add`;
    return this.http.post(url, form);
  }
  public updateCuentaContable(id:string,form){
    const url = `${this.serviceUrl}account-type/update/${id}`;
    return this.http.put(url, form);
  }
  public deletedCuentaContable(id:string){
    const url = `${this.serviceUrl}account-type/delete/${id}`;
    return this.http.delete(url);
  }
// sistemas auxiliares  SistemasAuxiliares// 

public getSistemasAuxiliares():Observable<AuxiliarSystem[]>{
  const url = `${this.serviceUrl}SistemasAuxiliares`;
  return this.http.get<AuxiliarSystem[]>(url);
}
public getSistemasAuxiliaresbyId(id:number):Observable<AuxiliarSystem>{
  const url = `${this.serviceUrl}SistemasAuxiliares/${id}`;
  return this.http.get<AuxiliarSystem>(url);
}
public addSistemasAuxiliares(form){
  const url = `${this.serviceUrl}SistemasAuxiliares`;
  return this.http.post(url, form);
}
public updateSistemasAuxiliares(form){
  const url = `${this.serviceUrl}SistemasAuxiliares`;
  return this.http.put(url, form);
}
public deletedSistemasAuxiliares(id:number){
  const url = `${this.serviceUrl}SistemasAuxiliares/${id}`;
  return this.http.delete(url);
}

//TipoMoneda//

public getTipoMoneda():Observable<TipoMoneda[]>{
  const url = `${this.serviceUrl}TipoMoneda`;
  return this.http.get<TipoMoneda[]>(url);
}
public getTipoMonedabyId(id:number):Observable<TipoMoneda>{
  const url = `${this.serviceUrl}TipoMoneda/${id}`;
  return this.http.get<TipoMoneda>(url);
}
public addTipoMoneda(form){
  const url = `${this.serviceUrl}TipoMoneda`;
  return this.http.post(url, form);
}
public updateTipoMoneda(form){
  const url = `${this.serviceUrl}TipoMoneda`;
  return this.http.put(url, form);
}
public deletedTipoMoneda(id:number){
  const url = `${this.serviceUrl}TipoMoneda/${id}`;
  return this.http.delete(url);
}

//CuentaContable//

public getCuentaContables():Observable<CuentaContable[]>{
  const url = `${this.serviceUrl}CuentaContable`;
  return this.http.get<CuentaContable[]>(url);
}
public getCuentaContablesbyId(id:number):Observable<CuentaContable>{
  const url = `${this.serviceUrl}CuentaContable/${id}`;
  return this.http.get<CuentaContable>(url);
}
public addCuentaContables(form){
  const url = `${this.serviceUrl}CuentaContable`;
  return this.http.post(url, form);
}
public updateCuentaContables(form){
  const url = `${this.serviceUrl}CuentaContable`;
  return this.http.put(url, form);
}
public deletedCuentaContables(id:number){
  const url = `${this.serviceUrl}CuentaContable/${id}`;
  return this.http.delete(url);
}


//EntradaContable//

public getEntradaContable():Observable<EntradaContable[]>{
  const url = `${this.serviceUrl}EntradaContable`;
  return this.http.get<EntradaContable[]>(url);
}
public getEntradaContablebyId(id:number):Observable<EntradaContable>{
  const url = `${this.serviceUrl}EntradaContable/${id}`;
  return this.http.get<EntradaContable>(url);
}
public addEntradaContable(form){
  const url = `${this.serviceUrl}EntradaContable`;
  return this.http.post(url, form);
}
public updateEntradaContable(form){
  const url = `${this.serviceUrl}EntradaContable`;
  return this.http.put(url, form);
}
public deletedEntradaContable(id:number){
  const url = `${this.serviceUrl}EntradaContable/${id}`;
  return this.http.delete(url);
}

}
