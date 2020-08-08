import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import {Router, Route} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  firstname = new FormControl('', [Validators.required]);
  lastname = new FormControl('', [Validators.required]);
  address = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required]);
  dob = new FormControl('', [Validators.required]);
  gender = new FormControl('', [Validators.required]);
  username = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);

  constructor(private builder:FormBuilder,private r:Router){

  }
employee=[];

model:any={};

customerd(){
  this.employee.push(this.model);
   console.log(this.model);
  localStorage.setItem("s",JSON.stringify(this.employee));
  this.model={};
  alert("Register Successsfully");
}

  regForm: FormGroup = this.builder.group({
    firstname:this.firstname,
    lastname: this.lastname,
    address:this.address,
    email:this.email,
    dob:this.dob,
    gender:this.gender,
    username: this.username,
    password: this.password
  });

  change(){
    this.r.navigate(['/app-login-form']);
    }



  ngOnInit() {
  }

}
