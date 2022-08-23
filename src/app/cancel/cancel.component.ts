import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-cancel',
  templateUrl: './cancel.component.html',
  styleUrls: ['./cancel.component.css']
})
export class CancelComponent implements OnInit {

  
  constructor(public dialog:MatDialog,
    public ref:MatDialogRef<CancelComponent>) { }

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

}
