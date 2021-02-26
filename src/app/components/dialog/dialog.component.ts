import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from 'src/app/model/user/user';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  action:string;
  localData:any;
  user!:User;

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    //@Optional() is used to prevent error if no data is passed
    @Inject(MAT_DIALOG_DATA) public data:any) {
    
    console.log(data);
    this.localData = {...data};
    this.user = this.localData.user;
    this.action = this.localData.action;
  }
  ngOnInit(): void {
    
  }

  doAction(){
    this.dialogRef.close({event:this.action,data:this.user});
  }

  closeDialog(){
    this.dialogRef.close({event:'Cancel'});
  }

}
