import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-updateform',
  templateUrl: './updateform.component.html',
  styleUrls: ['./updateform.component.css']
})
export class UpdateformComponent implements OnInit {

  constructor(private ref: MatDialogRef<UpdateformComponent>) { }

  order = [];

  model: any = {};

  select = [
    { id: 120, value: '1/kg' },
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

  onClose() {
    this.form.reset();
    this.ref.close();
  }

  ngOnInit() {
  }

}
