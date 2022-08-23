import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { OtpBpttomsheetComponent } from '../otp-bpttomsheet/otp-bpttomsheet.component';

@Component({
  selector: 'app-otp-returning',
  templateUrl: './otp-returning.component.html',
  styleUrls: ['./otp-returning.component.css']
})
export class OtpReturningComponent implements OnInit {


  constructor(
    private router: Router,
    private dialog:MatDialog,
    private sheetRef:MatBottomSheetRef<OtpBpttomsheetComponent>) { }

  ngOnInit(): void {
  }
  onClose(){
    // this.dialog.open(UserCheckComponent)
    this.router.navigateByUrl('/returning-user')
    this.sheetRef.dismiss()

  }

}
