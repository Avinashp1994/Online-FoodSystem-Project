import { Component, OnInit } from '@angular/core';
import { DemoService } from '../demo.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart:any[]=[];
  private val;
  private sum=0;

  constructor(private de:DemoService, private r:Router) { 
    this.add(this.cart);
  }

  back(){
    this.r.navigate(['/app-fruit']);
  }
  
  add(cart){
    this.val=cart;
    for(let i=0; i<cart.length ; i++){
      this.sum=this.sum+this.cart[i].price;
    }
  }

  ngOnInit() {
    this.de.viewCartData(this.cart).subscribe((data:any)=>this.cart=data);
  }

}
