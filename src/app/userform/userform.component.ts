import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import {Router} from '@angular/router';
import { DemoService } from '../demo.service';


@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent implements OnInit {

  constructor(private ref: MatDialogRef<UserformComponent>, private rrr: Router,private s:DemoService) { }
  
  order=[];

  model:any={};



  select=[
    {id:120, value:'1/kg'},
    { id: 240, value: '2/kg' },
    { id: 360, value: '3/kg' },
  ]

  form: FormGroup = new FormGroup({
    // $key: new FormControl(null),
    firstname: new FormControl('', Validators.required),
    lastname: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email),
    mobile: new FormControl('', [Validators.required, Validators.minLength(8)]),
    city: new FormControl('', Validators.required),
    select: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    pincode: new FormControl('', Validators.required),
    // gender: new FormControl('1'),
    
    

  });

  onclear() {
    this.form.reset();

  }

  onClose(){
    this.form.reset();
    this.ref.close();
  }

  onSubmit()
  {
    this.s.saveData(this.model).subscribe();
    // if(this.form.valid){
    //   this.order.push(this.model);
    //  console.log(this.model);
    // localStorage.setItem("key",JSON.stringify(this.order));
      this.rrr.navigate(['/app-thank']);
      this.ref.close();
    // this.model={};
    // }
    // else{
    //   this.rrr.navigate(['/app-orange']);
    // }
  }



  ngOnInit() {
  }

}
