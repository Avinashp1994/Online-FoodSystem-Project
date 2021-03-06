import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { UserformComponent } from 'src/app/userform/userform.component';

@Component({
  selector: 'app-greenpeas',
  templateUrl: './greenpeas.component.html',
  styleUrls: ['./greenpeas.component.css']
})
export class GreenpeasComponent implements OnInit {

  constructor(private rr: Router, private dialog: MatDialog) { }

  back() {
    this.rr.navigate(['/app-vegetable']);
  }
  debugger;
  onCreate() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "50%";
    this.dialog.open(UserformComponent, dialogConfig);
  }

  ngOnInit() {
  }

}
