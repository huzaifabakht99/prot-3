import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  delivery=0
  data=null
  // dataStream=new BehaviorSubject(this.data);
  price=''
  contact=''
  selectedMethod=''
  withoutDeliveryType=0
  station=''

 

  constructor() { }
  setData(data:any){
    this.data=data;
    // this.dataStream.next(this.data)
  }
  getData(){
    // return this.dataStream.asObservable()
     return this.data
  }
  setDeliveryType(data:number){
    this.delivery=data;
  }
  getDeliveryType(){
    return this.delivery
  }
  setprice(data:string){
    this.price=data
  }
  getprice(){
    return this.price
  }
  setContact(data:string){
    this.contact=data
  }
  getContact(){
    return this.contact
  }
  setSelectedMethod(method:string){
    this.selectedMethod=method;

  }
  getSelectedMethod(){
    return this.selectedMethod;
  }
  setWithoutDeliveryType(data:number){
    this.withoutDeliveryType=data

  }
  gatWithoutDeliveryType(){
    return this.withoutDeliveryType
  }

  setStation(data:string){
    this.station=data
  }
  getSation(){
    return this.station
  }
}

