import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapsicumComponent } from './capsicum.component';

describe('CapsicumComponent', () => {
  let component: CapsicumComponent;
  let fixture: ComponentFixture<CapsicumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapsicumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapsicumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
