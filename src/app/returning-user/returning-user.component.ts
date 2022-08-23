import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatDialog } from '@angular/material/dialog';
import { CancelComponent } from '../cancel/cancel.component';
import { ContactInfoBottomsheetComponent } from '../contact-info-bottomsheet/contact-info-bottomsheet.component';
import { DataService } from '../data.service';
import { DeliveryTypeBottomsheetComponent } from '../delivery-type-bottomsheet/delivery-type-bottomsheet.component';
import { DeliveryService } from '../delivery.service';
import { OrderPlacedComponent } from '../order-placed/order-placed.component';
import { PaymentMethodBottomsheetComponent } from '../payment-method-bottomsheet/payment-method-bottomsheet.component';
import { PaymentService } from '../payment.service';
import { SharedService } from '../shared.service';
import { ShippingInfoBottomsheetComponent } from '../shipping-info-bottomsheet/shipping-info-bottomsheet.component';

@Component({
  selector: 'app-returning-user',
  templateUrl: './returning-user.component.html',
  styleUrls: ['./returning-user.component.css']
})
export class ReturningUserComponent implements OnInit {
  newNumber=''
  contact=''
  numberFromSignIn=''
  deliveryCheck=''
  paymentMethodCheck=''
  name=''
  fullAdd=''
  selectedOption=''
  subtotalAmount=0
  taxAmount=0
  station='orderDetail'
  constructor(
    private data:DataService,
    public dialog:MatDialog,
    public bottomSheet: MatBottomSheet,
    private service:SharedService,
    private paymentService:PaymentService, 
    private deliveryService:DeliveryService        
    ) { 
      this.service.change.subscribe(value => {
        if (value) {
          console.log(value);
          this.numberFromSignIn = value;
        }
      });
      this.deliveryService.change.subscribe(value => {  
        if (value) {
          console.log(value);
          this.deliveryCheck = value;
        }
      });
      this.paymentService.change.subscribe(value => {    
        if (value) {
          console.log(value);
          this.paymentMethodCheck = value;
        }
      });
      this.service.name.subscribe(name=>{
        if(name){
          console.log(name);
          this.name=name;
        }
      });
      this.service.address.subscribe(add => {
        if(add){
          console.log(add);
          console.log(this.fullAdd)
          this.fullAdd=add;
        }
      })
      this.service.option.subscribe(opt => {
        if(opt){
          
          this.selectedOption=opt;
        }
      })
      this.service.subtotal.subscribe(opt => {
        if(opt){
          
          this.subtotalAmount=opt;
        }
      })
      this.service.tax.subscribe(opt => {
        if(opt){
          
          this.taxAmount=opt;
        }
      })
    
    }

  ngOnInit(): void {
    // mat.classList.remove('myClass');
    this.newNumber=localStorage.getItem('newNumber')!
    this.contact=this.data.getContact()
    this.numberFromSignIn=localStorage.getItem('flow3-number')!
    this.data.setStation(this.station)
  }
  onClickPayment(){
    this.bottomSheet.open(PaymentMethodBottomsheetComponent,{
      panelClass:'custom-bottomsheet'
    })
  }
  onClickDeliveryType(){
    this.bottomSheet.open(DeliveryTypeBottomsheetComponent,{
      panelClass:'custom-bottomsheet'

    })
  }
  onClickShippingInfo(){
    this.bottomSheet.open(ShippingInfoBottomsheetComponent,{
      panelClass:'custom-bottomsheet'
    })
  }
  onClickContactInfo(){
    this.bottomSheet.open(ContactInfoBottomsheetComponent,{
      panelClass:'custom-bottomsheet',




    

    })
    console.log(this.data.getContact())
  }
  openDialog(){
    const dialogref=this.dialog.open(CancelComponent);
    dialogref.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }
  onPlaceOrder(){
    const dailog=this.dialog.open(OrderPlacedComponent)
  }
  


}
