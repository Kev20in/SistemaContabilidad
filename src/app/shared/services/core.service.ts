import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TipoCuenta } from '@features/account-types/account-types.component';
import { AuxiliarSystem } from '@features/auxiliar-system/auxiliar-system.component';
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
    const url = `${this.serviceUrl}CrearTipoCuentaContable`;
    return this.http.get<TipoCuenta[]>(url);
  }
  public getCuentaContablebyId(id:number):Observable<TipoCuenta>{
    const url = `${this.serviceUrl}CrearTipoCuentaContable/${id}`;
    return this.http.get<TipoCuenta>(url);
  }
  public addCuentaContable(form){
    const url = `${this.serviceUrl}CrearTipoCuentaContable`;
    return this.http.post(url, form);
  }
  public updateCuentaContable(form){
    const url = `${this.serviceUrl}CrearTipoCuentaContable`;
    return this.http.put(url, form);
  }
  public deletedCuentaContable(id:number){
    const url = `${this.serviceUrl}CrearTipoCuentaContable/${id}`;
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


}
