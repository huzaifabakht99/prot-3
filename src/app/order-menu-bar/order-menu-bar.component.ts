import { DialogRef } from '@angular/cdk/dialog';
import { ThisReceiver } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DataService } from '../data.service';
import { MainCheckoutComponent } from '../main-checkout/main-checkout.component';
import { MenuBottomsheetComponent } from '../menu-bottomsheet/menu-bottomsheet.component';
import { OrderPlacedComponent } from '../order-placed/order-placed.component';
import { OtpDialogComponent } from '../otp-dialog/otp-dialog.component';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-order-menu-bar',
  templateUrl: './order-menu-bar.component.html',
  styleUrls: ['./order-menu-bar.component.css']
})
export class OrderMenuBarComponent implements OnInit {
  @Input() disabledBuyButton=true
  quantity=1
  totalValueProduct=1890
  total=1990
  total1=this.total+150;
  total2=this.total+350;
  total3=this.total+500;
  showCounter=false;
  remove=false;
  deliveryType=0
  selectedOpt=0
 
  @Input() discount=false;
  // price=(360*this.quantity)+5.95+(1.26*this.quantity);
  showCart=false;
  title = 'flow2';
  station=''
  // price=''
  constructor(
    private ref:MatDialogRef<MainCheckoutComponent>,
    private service:SharedService,
    public data:DataService,
    public dialog:MatDialog) { 
      this.service.optionMainForm.subscribe(opt => {
        if(opt){
          
          this.selectedOpt=opt;
        }
      })
    }

  ngOnInit(): void {
    this.deliveryType=this.data.getDeliveryType()
    this.service.subtotalAmount(this.totalValueProduct)
    this.service.taxAmount(100*this.quantity)
    this.station= this.data.getSation()
    //  this.price=this.data.getprice()
  }
  
  // onclick(){
  //   this.showCounter=!this.showCounter;
  // }
  // onClickCart(){
  //   this.dialog.open(CartComponent,{
  //     width:'376px',
  //     position:{top:'125px'},
  //   })
  //   this.showCart=!this.showCart;
  //   console.log("sdcsc")
  // }
  onclick(){
    this.showCounter=!this.showCounter;
  }
  onAdd(){
    this.quantity++
    this.totalValueProduct=(1890*this.quantity)
    this.total=(1890*this.quantity)+(100*this.quantity)
    this.total1=(1890*this.quantity)+(100*this.quantity)+150
    this.total2=(1890*this.quantity)+(100*this.quantity)+350
    this.total3=(1890*this.quantity)+(100*this.quantity)+500
    this.service.subtotalAmount(this.totalValueProduct)
    this.service.taxAmount(100*this.quantity)

  }
  onMinus(){
    this.quantity--
    this.totalValueProduct=(1890*this.quantity)
    this.total=(1890*this.quantity)+(100*this.quantity)
    this.total1=(1890*this.quantity)+(100*this.quantity)+150
    this.total2=(1890*this.quantity)+(100*this.quantity)+350
    this.total3=(1890*this.quantity)+(100*this.quantity)+500
    this.service.subtotalAmount(this.totalValueProduct)
    this.service.taxAmount(100*this.quantity)
  }
  onRemove(){
    this.remove=!this.remove
    this.total=0;
    this.total1=0;
    this.total2=0;
    this.total3=0;
    this.service.subtotalAmount(this.total)
  }
  onBuy(){
    this.dialog.open(OtpDialogComponent,{
      width:'400px',
      panelClass:'custom'
    })
  }
  onOrderPlaced(){
    this.ref.close()
  }
}

