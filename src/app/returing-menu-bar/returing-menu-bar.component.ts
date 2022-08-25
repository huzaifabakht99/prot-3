import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DataService } from '../data.service';
import { OrderPlacedComponent } from '../order-placed/order-placed.component';
import { OtpDialogComponent } from '../otp-dialog/otp-dialog.component';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-returing-menu-bar',
  templateUrl: './returing-menu-bar.component.html',
  styleUrls: ['./returing-menu-bar.component.css']
})
export class ReturingMenuBarComponent implements OnInit {
  @Input() disabledBuyButton=true
  quantity=1
  totalValueProduct=1099
  total=1149
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
    this.service.taxAmount(50*this.quantity)
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
    this.totalValueProduct=(1099*this.quantity)
    this.total=(1099*this.quantity)+(50*this.quantity)
    this.total1=(1099*this.quantity)+(50*this.quantity)+150
    this.total2=(1099*this.quantity)+(50*this.quantity)+350
    this.total3=(1099*this.quantity)+(50*this.quantity)+500
    this.service.subtotalAmount(this.totalValueProduct)
    this.service.taxAmount(50*this.quantity)

  }
  onMinus(){
    this.quantity--
    this.totalValueProduct=(1099*this.quantity)
    this.total=(1099*this.quantity)+(50*this.quantity)
    this.total1=(1099*this.quantity)+(50*this.quantity)+150
    this.total2=(1099*this.quantity)+(50*this.quantity)+350
    this.total3=(1099*this.quantity)+(50*this.quantity)+500
    this.service.subtotalAmount(this.totalValueProduct)
    this.service.taxAmount(50*this.quantity)
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
    this.dialog.open(OrderPlacedComponent)
  }
}
