import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TipoCuenta } from '@features/account-types/account-types.component';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CoreService {
  
  private readonly serviceUrl = `${environment.baseUrl}`;

  constructor(private readonly http: HttpClient,) { }

  public getCuentaContable():Observable<TipoCuenta[]>{
    const url = `${this.serviceUrl}CrearTipoCuentaContable`;
    return this.http.get<TipoCuenta[]>(url);
  }


}
