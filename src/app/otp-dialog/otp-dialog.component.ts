import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-otp-dialog',
  templateUrl: './otp-dialog.component.html',
  styleUrls: ['./otp-dialog.component.css']
})
export class OtpDialogComponent implements OnInit {

  constructor( 
    private router:Router,
    private dialogRef:MatDialogRef<OtpDialogComponent>) { }

  ngOnInit(): void {
  }
  onClose(){
    this.dialogRef.close()
  }
  onConfirmPayment(){
    this.router.navigateByUrl('/order-detail')
    this.dialogRef.close()
    console.log('clicked')
  }

}
