import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CancelComponent } from '../cancel/cancel.component';

@Component({
  selector: 'app-main-checkout-returning',
  templateUrl: './main-checkout-returning.component.html',
  styleUrls: ['./main-checkout-returning.component.css']
})
export class MainCheckoutReturningComponent implements OnInit {

  constructor(private dialog:MatDialog) { }

  ngOnInit(): void {
  }
  onClose(){
    this.dialog.open(CancelComponent)
  }
  onActivate(){
    window.scroll(0,0)
  }

}
