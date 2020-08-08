import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-custchild',
  templateUrl: './custchild.component.html',
  styleUrls: ['./custchild.component.css']
})
export class CustchildComponent implements OnInit {

  constructor() { }

  @Input()
  all: number;
  @Input()
  male: number;
  @Input()
  female: number;

  selectedRadioButtonValue: String = 'All';

  @Output()

  countRadioButtonSelectionChanged: EventEmitter<String> = new EventEmitter<String>();

  onRadioButtonSelectionChange() {
    this.countRadioButtonSelectionChanged.emit(this.selectedRadioButtonValue);
  }


  ngOnInit() {
  }


}
