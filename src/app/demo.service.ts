
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  constructor(private ht:HttpClient) { }



  viewData(y) {
    return this.ht.get("http://localhost/AAServlet/ViewServlet",y);
  }

  saveData(x)
  { 
    return this.ht.post("http://localhost/AAServlet/SaveServlet",x);
  }

  deleteData(z){
    return this.ht.delete("http://localhost/AAServlet/DeleteServlet",z);
  }

  addCartData(a){
    return this.ht.post("http://localhost/AAServlet/CartServlet",a);
  }

  viewCartData(b){
    return this.ht.get("http://localhost/AAServlet/ViewCartServlet",b);
  }

}
