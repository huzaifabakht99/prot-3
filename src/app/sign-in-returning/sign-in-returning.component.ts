import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { DataService } from '../data.service';
import { OtpReturningComponent } from '../otp-returning/otp-returning.component';

@Component({
  selector: 'app-sign-in-returning',
  templateUrl: './sign-in-returning.component.html',
  styleUrls: ['./sign-in-returning.component.css']
})
export class SignInReturningComponent implements OnInit {

  disabledBuyButton=true;
  toSelectRadio=false
  showCard=false
  showPaypal=false
  showKlarna=false
  showAfterpay=false
  showAmazon=false
  deliveryType=0
  station='signIn'
 

  isCheckedDelivery=false
  selectedRadio=0
  withoutDeliveryType=1

  phoneNumber= new FormControl('');
  email= new FormControl('');
  fullName= new FormControl('');
  shippingAddress= new FormControl('');

  constructor(
    private data:DataService,
    private bs:MatBottomSheet) { }

  ngOnInit(): void {
    this.data.setDeliveryType(0)
    this.data.setStation(this.station)
  }
  onSelectRadio1(){
    this.selectedRadio=1
  }
  onSelectRadio2(){
    this.selectedRadio=2
  }
  onSelectRadio3(){
    this.selectedRadio=3
  }


  onPaymentMethodCard(){
    this.showCard=!this.showCard
    
  }
  onPaymentMethodPaypal(){
    this.showPaypal=!this.showPaypal
    
  }
  onPaymentMethodKlarna(){
    this.showKlarna=!this.showKlarna
  }
  onPaymentMethodAfterpay(){
    this.showAfterpay=!this.showAfterpay
  }
  onPaymentMethodAmazon(){
    this.showAmazon=!this.showAmazon
    
  }
  onEnter(){
    this.bs.open(OtpReturningComponent)
    this.disabledBuyButton=false
    localStorage.setItem('flow3-number',this.phoneNumber.value!)
  }
  

}
