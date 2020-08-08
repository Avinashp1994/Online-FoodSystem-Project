import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustchildComponent } from './custchild.component';

describe('CustchildComponent', () => {
  let component: CustchildComponent;
  let fixture: ComponentFixture<CustchildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustchildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
