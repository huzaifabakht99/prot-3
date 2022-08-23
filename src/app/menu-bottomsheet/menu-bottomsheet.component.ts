import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DataService } from '../data.service';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-menu-bottomsheet',
  templateUrl: './menu-bottomsheet.component.html',
  styleUrls: ['./menu-bottomsheet.component.css']
})
export class MenuBottomsheetComponent implements OnInit {

  quantity=1
  totalValueProduct=360
  total=361.26
  total1=this.total+5.95;
  total2=this.total+12.95;
  total3=this.total+22.95;
  showCounter=false;
  remove=false;
  deliveryType=0
  selectedOpt=0
  @Input() discount=false;
  // price=(360*this.quantity)+5.95+(1.26*this.quantity);
  showCart=false;
  title = 'flow2';
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
    this.service.taxAmount(1.26*this.quantity)
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
    this.totalValueProduct=(360*this.quantity)
    this.total=(360*this.quantity)+(1.26*this.quantity)
    this.total1=(360*this.quantity)+(1.26*this.quantity)+5.95
    this.total2=(360*this.quantity)+(1.26*this.quantity)+12.95
    this.total3=(360*this.quantity)+(1.26*this.quantity)+22.95
    this.service.subtotalAmount(this.totalValueProduct)
    this.service.taxAmount(1.26*this.quantity)

  }
  onMinus(){
    this.quantity--
    this.totalValueProduct=(360*this.quantity)
    this.total=(360*this.quantity)+(1.26*this.quantity)
    this.total1=(360*this.quantity)+(1.26*this.quantity)+5.95
    this.total2=(360*this.quantity)+(1.26*this.quantity)+12.95
    this.total3=(360*this.quantity)+(1.26*this.quantity)+22.95
    this.service.subtotalAmount(this.totalValueProduct)
    this.service.taxAmount(1.26*this.quantity)
  }
  onRemove(){
    this.remove=!this.remove
    this.total=0;
    this.total1=0;
    this.total2=0;
    this.total3=0;
    this.service.subtotalAmount(this.total)
  }

}

