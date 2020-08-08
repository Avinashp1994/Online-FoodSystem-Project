import { Component, OnInit, ViewChild } from '@angular/core';

import { MatDialog, MatDialogConfig } from '@angular/material';
import { UpdateformComponent } from 'src/app/updateform/updateform.component';

import { DemoService } from 'src/app/demo.service';



@Component({
  selector: 'app-userorder',
  templateUrl: './userorder.component.html',
  styleUrls: ['./userorder.component.css'],
  
})
export class UserorderComponent implements OnInit {

   userdata:any[]=[];
  
 
  constructor( private dialog: MatDialog,private d:DemoService) { }

  onUpdate() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "52%";
    this.dialog.open(UpdateformComponent, dialogConfig);
  }

  tempobj:any={};

  onDelete(i){
   this.tempobj=this.userdata[i];
   this.d.deleteData(this.tempobj).subscribe(); 
  }





  ngOnInit() {
    // this.userdata = this._getor.getOrder();
    this.d.viewData(this.userdata).subscribe((r:any)=>this.userdata=r);
  }

}
