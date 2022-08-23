import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  change =  new Subject<string>();      

  constructor() { }
  emitPaymentValue(value: string){
    this.change.next(value);
  }
}
