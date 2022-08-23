import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { DataService } from '../data.service';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-contact-info-bottomsheet',
  templateUrl: './contact-info-bottomsheet.component.html',
  styleUrls: ['./contact-info-bottomsheet.component.css']
})
export class ContactInfoBottomsheetComponent implements OnInit {
  enableButton=false
  addNew=false;
  save=false;
  phoneNumber=new FormControl('');
  numbers:String[]=[];
  newDiv=false;
  number:string='';
  selectedItem=''
  numberFromSignIn=''
  
  constructor(
    private data:DataService,
    private service:SharedService,
    private bsRef:MatBottomSheetRef<ContactInfoBottomsheetComponent>) {
      
     }

  ngOnInit(): void {
    this.number=this.phoneNumber.value!
    this.numberFromSignIn=localStorage.getItem('num')!
  }
  onAddNew(){
    this.addNew=true;
  }
  onSave(){
    this.save=true;
  }
  onChangeMobile(){
    this.save=false
    this.addNew=false;
    this.newDiv=true;
    this.numbers.push(this.phoneNumber.value!)
    localStorage.setItem('newNumber',(this.phoneNumber.value)!)
    // this.data.setContact(this.selectedItem)
   
      
 
    
    
    
  
  }
  onOtpChange(){
    this.enableButton=true
  }
  onClose(){
    this.bsRef.dismiss({data:this.selectedItem})
    console.log(this.selectedItem)
  }
  onRadioSelected(number1:any){
    // this.bsRef.dismiss()
  
    // console.log("DIV CLICKED");
    this.service.emitContactValue(number1);
    console.log(number1)
  }
  onBack(){
    this.save=false
    this.addNew=true
  }
  onDone(){
    this.bsRef.dismiss()
  }



}
