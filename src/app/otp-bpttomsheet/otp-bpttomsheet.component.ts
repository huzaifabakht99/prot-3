import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UserCheckComponent } from '../user-check/user-check.component';

@Component({
  selector: 'app-otp-bpttomsheet',
  templateUrl: './otp-bpttomsheet.component.html',
  styleUrls: ['./otp-bpttomsheet.component.css']
})
export class OtpBpttomsheetComponent implements OnInit {

  constructor(
    private router:Router,
    private dialog:MatDialog,
    private sheetRef:MatBottomSheetRef<OtpBpttomsheetComponent>) { }

  ngOnInit(): void {
  }
  onClose(){
    this.router.navigateByUrl('/new-user')
    // this.dialog.open(UserCheckComponent)
    this.sheetRef.dismiss()

  }

}
