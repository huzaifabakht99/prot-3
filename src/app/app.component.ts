import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MainCheckoutReturningComponent } from './main-checkout-returning/main-checkout-returning.component';
import { MainCheckoutComponent } from './main-checkout/main-checkout.component';
import { NewUserComponent } from './new-user/new-user.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'flow3';
  selectedRadio=0




  constructor(public dialog:MatDialog) { 

  }

  openDialog(){
    this.dialog.open(MainCheckoutComponent,{
      height:'100%',
      panelClass: 'custom-dialog',
    });
    console.log
  }
  openDialogReturning(){
    this.dialog.open(MainCheckoutReturningComponent,{
      height:'100%',
      panelClass: 'custom-dialog',
    });
    console.log

  }
}
