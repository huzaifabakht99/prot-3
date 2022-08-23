import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { ContactInfoBottomsheetComponent } from '../contact-info-bottomsheet/contact-info-bottomsheet.component';
import { PaymentService } from '../payment.service';

@Component({
  selector: 'app-payment-method-bottomsheet',
  templateUrl: './payment-method-bottomsheet.component.html',
  styleUrls: ['./payment-method-bottomsheet.component.css']
})
export class PaymentMethodBottomsheetComponent implements OnInit {
  amazon=false
  clear=false
  addNew=false;
  cardDiv=false;
  constructor(
    private paymentService:PaymentService,
    private bsRef:MatBottomSheetRef<ContactInfoBottomsheetComponent>) { }
  

  ngOnInit(): void {
  }
  onAddNew(){
    this.addNew=!this.addNew
  }
  onClickAmazon(){
    this.amazon=true
    this.addNew=false
  }
  onClickClear(){
    this.clear=true
    this.addNew=false
    

  }
  onClickAlreadyAdded(){
    this.addNew=false
  }
  onClose(){
    this.bsRef.dismiss();
  }
  onButtonSelectedCard(){
  
    // console.log("DIV CLICKED");
    this.paymentService.emitPaymentValue('0');
   
  }
  onButtonSelectedPaypal(){
  
    // console.log("DIV CLICKED");
    this.paymentService.emitPaymentValue('1');
  
  }
  onButtonSelectedKlarna(){
  
    // console.log("DIV CLICKED");
    this.paymentService.emitPaymentValue('2');
   
  }
  onButtonSelectedAmazon(){
  
    // console.log("DIV CLICKED");
    this.paymentService.emitPaymentValue('3');
   
  }
  onButtonSelectedClearpay(){
  
    // console.log("DIV CLICKED");
    this.paymentService.emitPaymentValue('4');
   
  }
  onClickCard(){
    this.cardDiv=true
    this.addNew=false
  }
  onDone(){
    this.bsRef.dismiss()
  }

}
