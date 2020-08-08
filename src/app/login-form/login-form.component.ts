import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router, Route } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  user: any = [];

  lo: any = {};

  constructor(private r: Router, private a: ActivatedRoute, private fb: FormBuilder) { 
    this.user = JSON.parse(localStorage.getItem("s"));
  }
  loginForm: FormGroup;

  changes():void{
    this.r.navigate(['/app-register']);
  }

  admin(): void {
    this.r.navigate(['/app-admin']);
  }


  isRegister: Boolean = false;
  onLoginButtonClicked(): void {

    console.log(this.loginForm.value);
    this.lo = this.loginForm.value;
    console.log(this.lo);
    console.log(this.lo.email);
    console.log(this.lo.password);
    console.log(this.user[1]);

    console.log(this.user);

    for (let i = 0; i < this.user.length; i++) {

      if (this.lo.email != this.user[i].email && this.lo.password != this.user[i].password) {
        console.log(this.lo);
        this.isRegister = false;
        this.r.navigate(['/app-login']);
      } else {
        this.r.navigate(['/app-home']);
        this.isRegister = true;
      }
      break;
    }

    if (this.isRegister) {
      alert("User Login Successfully");
    } else {
      alert('Incorrect Username or password ');
    }
  }


  ngOnInit() {
    this.loginForm = this.fb.group({

      email: ['', [Validators.required]],

      password: ['']

    });

  }

}
