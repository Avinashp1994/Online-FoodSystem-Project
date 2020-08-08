import { Component, OnInit } from '@angular/core';
import { CustService } from 'src/app/cust.service';


@Component({
  selector: 'app-registeruser',
  templateUrl: './registeruser.component.html',
  styleUrls: ['./registeruser.component.css'],
  providers: [CustService]
 
})
export class RegisteruserComponent implements OnInit {




  constructor(private _custservice: CustService) { }

  customers: any[];

  getTotalCustomerCount(): number {
    return this.customers.length;
  }

  getMaleCustomerCount(): number {
    return this.customers.filter(c => c.gender === 'male').length;
  }

  getFemaleCustomerCount(): number {
    return this.customers.filter(c => c.gender === 'female').length;
  }

  selecetedEmployeeCountRadioButton: String = 'All';

  onEmployeeCountRadioButtonChange(selectedRadioButtonValue: String): void {
    this.selecetedEmployeeCountRadioButton = selectedRadioButtonValue;
  }

  ngOnInit() {
    this.customers = this._custservice.getCust();
  }

}
