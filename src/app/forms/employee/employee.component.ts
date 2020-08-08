import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material';
import { ServiceService} from '../../service.service';
import { DepartmentService} from '../../department.service';
import { NotificationService} from '../../notification.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private service: ServiceService, 
    private dservice: DepartmentService, 
    private nservice: NotificationService, 
    private ref: MatDialogRef<EmployeeComponent>) { }

  
  onclear(){
    this.service.form.reset();
    this.service.initializeFormGroup();
    
  }

  onSubmit(){
    if(this.service.form.valid)
    {
       if(!this.service.form.get('$key').value)
        this.service.insertEmployee(this.service.form.value);
       else
        this.service.updateEmployee(this.service.form.value);
      this.service.form.reset();
      this.service.initializeFormGroup();
      this.nservice.success('::SUCCESSFULLY SUBMITTED');
      this.onClose();
    }
  }

  onClose(){
    this.service.form.reset();
    this.service.initializeFormGroup();
    this.ref.close();
  }

  ngOnInit() {
    this.service.getEmployees();
  }

}
