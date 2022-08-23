import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { DataService } from '../data.service';
import { OtpBpttomsheetComponent } from '../otp-bpttomsheet/otp-bpttomsheet.component';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
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
    this.bs.open(OtpBpttomsheetComponent)
    this.disabledBuyButton=false
    localStorage.setItem('flow3-number',this.phoneNumber.value!)
  }
  

}
