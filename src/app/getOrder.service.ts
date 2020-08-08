import { Injectable } from "@angular/core";

@Injectable()
export class getOrderService{

    
    getOrder():any[]{
        
        
          return this.getOrder=JSON.parse(localStorage.getItem('key'));
    }
}