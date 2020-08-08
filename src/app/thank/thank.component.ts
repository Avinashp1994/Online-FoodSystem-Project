import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-thank',
  templateUrl: './thank.component.html',
  styleUrls: ['./thank.component.css']
})
export class ThankComponent implements OnInit {

  constructor(private rout:Router) { }

  back(){
    this.rout.navigate(['/app-fruit']);
  }

  ngOnInit() {
  }

}
