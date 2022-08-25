import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MainCheckoutReturningComponent } from '../main-checkout-returning/main-checkout-returning.component';
import { MainCheckoutComponent } from '../main-checkout/main-checkout.component';

@Component({
  selector: 'app-cancel',
  templateUrl: './cancel.component.html',
  styleUrls: ['./cancel.component.css']
})
export class CancelComponent implements OnInit {

  
  constructor(public dialog:MatDialog,
    public ref:MatDialogRef<CancelComponent>,
    public ref2:MatDialogRef<MainCheckoutComponent>,
    public ref3:MatDialogRef<MainCheckoutReturningComponent>
    ) { }

ngOnInit(): void {
}
openDialog(){
const dialogref=this.dialog.open(CancelComponent,{
width:'302px',
height:'auto',
});
dialogref.afterClosed().subscribe(result => {
console.log('The dialog was closed');

});
}
onClick(){
this.ref.close()
console.log('2432424242')
}
onClickyes(){
  this.ref.close()
  location.reload()
  console.log('2432424242')
  }

}
