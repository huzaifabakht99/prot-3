import { Dialog } from '@angular/cdk/dialog';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { OtpDialogComponent } from '../otp-dialog/otp-dialog.component';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {
  billingAddress=true
  
  toSelectRadio=false
  showCard=false
  showPaypal=false
  showKlarna=false
  showAfterpay=false
  showAmazon=false
  selectedMethod=''
 

  isCheckedDelivery=false
  selectedRadio=0
  station='newUser'

  phoneNumber= new FormControl('');
  email= new FormControl('');
  fullName= new FormControl('');
  shippingAddress= new FormControl('');

  constructor(
    private data:DataService,
    private service:SharedService,
    private router:Router,
    private dialog:MatDialog
   
    ) { }

  ngOnInit(): void {
    this.phoneNumber.setValue(localStorage.getItem('flow3-number'))
    this.data.setStation(this.station)
    
    

  }
  onSelectRadio1(){
    this.selectedRadio=1
    localStorage.setItem('flow3-email',this.email.value!)
    localStorage.setItem('flow3-fullName',this.fullName.value!)
    localStorage.setItem('flow3-shippingAddress',this.shippingAddress.value!)
    this.service.optionMain(1)
    this.data.setDeliveryType(this.selectedRadio)
    console.log(this.selectedRadio)

  }
  onSelectRadio2(){
    this.selectedRadio=2
    localStorage.setItem('flow3-email',this.email.value!)
    localStorage.setItem('flow3-fullName',this.fullName.value!)
    localStorage.setItem('flow3-shippingAddress',this.shippingAddress.value!)
    this.service.optionMain(2)
    this.data.setDeliveryType(this.selectedRadio)
    console.log(this.selectedRadio)
  }
  onSelectRadio3(){
    this.selectedRadio=3
    localStorage.setItem('flow3-email',this.email.value!)
    localStorage.setItem('flow3-fullName',this.fullName.value!)
    localStorage.setItem('flow3-shippingAddress',this.shippingAddress.value!)
    this.service.optionMain(3)
    this.data.setDeliveryType(this.selectedRadio)
    console.log(this.selectedRadio)
  }


  onPaymentMethodCard(){
    this.showCard=!this.showCard
    this.showAfterpay=false
    this.showAmazon=false
    this.showKlarna=false
    this.showPaypal=false

    this.selectedMethod='card'
    this.data.setSelectedMethod(this.selectedMethod)
    // setInterval(() => {
    //   this.showCard=false
    // },5000)
    
  }
  onPaymentMethodPaypal(){
    this.showCard=false
    this.showAfterpay=false
    this.showAmazon=false
    this.showKlarna=false
    this.showPaypal=!this.showPaypal
    this.selectedMethod='paypal'
    this.data.setSelectedMethod(this.selectedMethod)
    
  }
  onPaymentMethodKlarna(){
    this.showCard=false
    this.showAfterpay=false
    this.showAmazon=false
    this.showKlarna=!this.showKlarna
    this.showPaypal=false
    this.selectedMethod='klarna'
    this.data.setSelectedMethod(this.selectedMethod)
  }
  onPaymentMethodAfterpay(){
    this.showCard=false
    this.showAfterpay=!this.showAfterpay
    this.showAmazon=false
    this.showKlarna=false
    this.showPaypal=false
    this.selectedMethod='clearpay'
    this.data.setSelectedMethod(this.selectedMethod)
  }
  onPaymentMethodAmazon(){
    this.showCard=false
    this.showAfterpay=false
    this.showAmazon=!this.showAmazon
    this.showKlarna=false
    this.showPaypal=false
    this.selectedMethod='amazon'
    this.data.setSelectedMethod(this.selectedMethod)
    
  }

  onBuy(){
    this.dialog.open(OtpDialogComponent)
    localStorage.setItem
  }
  onClickCheckBox(){
    this.billingAddress=!this.billingAddress
    console.log(this.billingAddress)
  }

}
