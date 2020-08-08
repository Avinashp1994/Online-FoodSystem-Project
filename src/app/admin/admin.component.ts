import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  
  
  
  
  admin:'admin'


  loginForm: FormGroup;

  constructor(private rout: Router, private fb: FormBuilder) { }

  isLogin:Boolean=false;

  onLoginButtonClicked(){
    if(this.admin==this.admin)
    {
      this.isLogin=true;
      this.rout.navigate(['/app-registeruser']);
    }
    else{
      this.isLogin = false;
      this.rout.navigate(['/app-login']);
    }
  }
  

  ngOnInit() {
    this.loginForm = this.fb.group({

      email: ['', [Validators.required]],

      password: ['']
      

    });
  }

}
