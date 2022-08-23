import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {


  change =  new Subject<string>();

  name=new Subject<string>();
  address=new Subject<string>();
  option=new Subject<string>();
  optionMainForm=new Subject<number>();
  subtotal=new Subject<number>();
  tax=new Subject<number>();
 
   constructor() { }
 
   emitContactValue(value: string){
     this.change.next(value);
   }
   sendName(name:string){
     this.name.next(name)
   }
   fullAddress(add:string){
     this.address.next(add)
   }
   optionValue(number:string){
     this.option.next(number)
   }
   optionMain(number:number){
     this.optionMainForm.next(number);
   }
   subtotalAmount(number:number){
     this.subtotal.next(number)
   }
   taxAmount(number:number){
     this.tax.next(number)
   }
   
 }
