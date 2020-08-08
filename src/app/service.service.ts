import { Injectable } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import { AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private firebase: AngularFireDatabase) { }

  employeelist: AngularFireList<any>;

  form :FormGroup = new FormGroup({
    $key:new FormControl(null),
    fullname: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email),
    mobile: new FormControl('', [Validators.required, Validators.minLength(8)]),
    city: new FormControl('', Validators.required),
    gender:new FormControl('1'),
    department:new FormControl(0),
    hireDate:new FormControl(''),
    isPermanent:new FormControl(false)

  });


  initializeFormGroup(){
    this.form.setValue({
      $key:null,
      fullname:'',
      email: '',
      mobile:'',
      city:'',
      gender:1,
      department:0,
      hireDate: '',
      isPermanent: false,
    });
  }

  getEmployees(){
    this.employeelist=this.firebase.list('employees');
    return this.employeelist.snapshotChanges();
  }

  insertEmployee(employee){
    this.employeelist.push({

      fullname: employee.fullname,
      email: employee.email,
      mobile: employee.mobile,
      city: employee.city,
      gender: employee.gender,
      department: employee.department,
      hireDate: employee.hireDate,
      isPermanent: employee.isPermanent

    });
  }

    updateEmployee(employee){
      this.employeelist.update(employee.$key,
        {

        fullname: employee.fullname,
        email: employee.email,
        mobile: employee.mobile,
        city: employee.city,
        gender: employee.gender,
        department: employee.department,
        hireDate: employee.hireDate,
        isPermanent: employee.isPermanent

      });
  }

    deleteEmployee($key: string){
      this.employeelist.remove($key);
    }

  getPop(employee){
      this.form.setValue(_.omit(employee,'departmentName'));
  }

}
