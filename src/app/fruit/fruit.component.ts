import { Component, OnInit } from '@angular/core';
import { DemoService } from '../demo.service';

@Component({
  selector: 'app-fruit',
  templateUrl: './fruit.component.html',
  styleUrls: ['./fruit.component.css']
})
export class FruitComponent implements OnInit {

  constructor(private d:DemoService) { }

  array = { name: "orange", price: "120" };
  array1 = { name: "strawberry", price: "50" };
  
  

  add(){
   
    this.d.addCartData(this.array).subscribe();
  }

  add1(){
    this.d.addCartData(this.array1).subscribe();
  }

 

  ngOnInit() {
  }

}
