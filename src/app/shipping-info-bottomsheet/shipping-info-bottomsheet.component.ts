import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { ContactInfoBottomsheetComponent } from '../contact-info-bottomsheet/contact-info-bottomsheet.component';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-shipping-info-bottomsheet',
  templateUrl: './shipping-info-bottomsheet.component.html',
  styleUrls: ['./shipping-info-bottomsheet.component.css']
})
export class ShippingInfoBottomsheetComponent implements OnInit {

  item:{name:string,add:string}[]=[]
  addNew=false;
  fullAdd=''
  add=false
  name=''
  constructor(
    private sharedService:SharedService,
    private bsRef:MatBottomSheetRef<ContactInfoBottomsheetComponent>) { }

  fullName= new FormControl('');
  shippingAdd= new FormControl('');
  city= new FormControl('');
  country= new FormControl('');
  state= new FormControl('');
  zip= new FormControl('');

  ngOnInit(): void {
  }
  onAddNew(){
    // this.fullAdd=this.shippingAdd.value!+','+this.city.value!+','+this.country.value!+','+this.zip.value!
    this.addNew=!this.addNew;
    // this.name=this.fullName.value!
    console.log(this.fullAdd)
  }
  onSave(){
    this.fullAdd=this.shippingAdd.value!+','+this.city.value!+','+this.country.value!+','+this.zip.value!
    this.name=this.fullName.value!
    this.add=true
    this.addNew=!this.addNew;
  }
  onClose(){
    this.bsRef.dismiss();
  }
  onRadioSelected(){
  
    // console.log("DIV CLICKED");
    this.sharedService.sendName(this.name);
    this.sharedService.fullAddress(this.fullAdd)
    this.sharedService.optionValue('3')
   
  }
  onSelected1(){
  
    // console.log("DIV CLICKED");
    this.sharedService.optionValue('0');
   
  }
  onSelected2(){
  
    // console.log("DIV CLICKED");
    this.sharedService.optionValue('1');
  
  }
  onSelected3(){
  
    // console.log("DIV CLICKED");
    this.sharedService.optionValue('2');
   
  }
  onDone(){
    this.bsRef.dismiss()
  }

}