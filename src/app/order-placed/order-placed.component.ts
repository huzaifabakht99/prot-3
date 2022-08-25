import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-order-placed',
  templateUrl: './order-placed.component.html',
  styleUrls: ['./order-placed.component.css']
})
export class OrderPlacedComponent implements OnInit {

  constructor(private ref:MatDialogRef<OrderPlacedComponent>) { }

  ngOnInit(): void {
  }
  onClose(){
    this.ref.close()
  }

}
