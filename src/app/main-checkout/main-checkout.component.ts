import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CancelComponent } from '../cancel/cancel.component';

@Component({
  selector: 'app-main-checkout',
  templateUrl: './main-checkout.component.html',
  styleUrls: ['./main-checkout.component.css']
})
export class MainCheckoutComponent implements OnInit {

  constructor(private dialog:MatDialog) { }

  ngOnInit(): void {
  }
  onClose(){
    this.dialog.open(CancelComponent)
  }

}
