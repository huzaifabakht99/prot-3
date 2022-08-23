import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-user-check',
  templateUrl: './user-check.component.html',
  styleUrls: ['./user-check.component.css']
})
export class UserCheckComponent implements OnInit {
  selectedRadio=1
  constructor(
    private data:DataService,
    private router:Router,
    public ref:MatDialogRef<UserCheckComponent>) { }

  ngOnInit(): void {
  }
  onClickNewUser(){
    this.router.navigateByUrl('/new-user')
    this.ref.close()

  }
  onClickReturningUser(){
    this.router.navigateByUrl('/returning-user')
    // this.data.setDeliveryType(this.selectedRadio)
    this.ref.close()
  }


}

