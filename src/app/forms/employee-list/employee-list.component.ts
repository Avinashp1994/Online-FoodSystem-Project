import { Component, OnInit, ViewChild } from '@angular/core';
import { ServiceService} from '../../service.service';
import {MatTableDataSource, MatSort, MatPaginator} from '@angular/material';
import { DepartmentService} from '../../department.service';
import { MatDialog, MatDialogConfig} from '@angular/material';
import { EmployeeComponent} from '../employee/employee.component';
import { NotificationService} from '../../notification.service';
import { DialogService} from '../../dialog.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(private sservice: ServiceService,
    private depservice: DepartmentService,
    private dialog: MatDialog,
    private nservice: NotificationService,
    private dialogservice: DialogService) { }

  listData: MatTableDataSource<any>;
  displayedColumns: string[] = ['fullname', 'email', 'mobile', 'city','departmentName','actions'];
  @ViewChild(MatSort) sort:MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  searchKey: string;

  ngOnInit() {
    this.sservice.getEmployees().subscribe(
      list => {
        let array = list.map(item => {
          let departmentName=this.depservice.getDepartmentName(item.payload.val()['department']);
          return {
            $key: item.key,
            departmentName,
            ...item.payload.val()
          };
        });
        this.listData = new MatTableDataSource(array);
        this.listData.sort=this.sort;
        this.listData.paginator=this.paginator;
      });
  }

  onSearchClear(){
    this.searchKey="";
    this.applyfilter();
  }

  applyfilter(){
    this.listData.filter=this.searchKey.trim().toLowerCase();
  }

  onCreate(){
    this.sservice.initializeFormGroup();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose=true;
    dialogConfig.autoFocus=true;
    dialogConfig.width="50%";
    this.dialog.open(EmployeeComponent, dialogConfig);
  }

  onEdit(row){
    this.sservice.getPop(row);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "50%";
    this.dialog.open(EmployeeComponent, dialogConfig);
  }

  onDelete($key){
    this.dialogservice.openConfirmDialog("Are You Sure To Delete This Record?")
    .afterClosed().subscribe(res =>{
      if(res)
      {
        this.sservice.deleteEmployee($key);
        this.nservice.warn("! Deleted Successfully");
      }
    });
    }
  

}
