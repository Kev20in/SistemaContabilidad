import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor() { }

  public modalValue: string;
  private readonly _modalValue = new BehaviorSubject(null);
  public modalValue$ = this._modalValue.asObservable();

  public setModalValue(value = 'HolaMundo'): void {
    this._modalValue.next(value);
  }

  public getModalValue(): string {
    return this.modalValue;
  }
}
