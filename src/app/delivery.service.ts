import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeliveryService {
  change =  new Subject<string>(); 
       

  constructor() { }
  emitDeliveryValue(value: string){
    this.change.next(value);
  }
}
