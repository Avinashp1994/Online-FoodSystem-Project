import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GreenpeasComponent } from './greenpeas.component';

describe('GreenpeasComponent', () => {
  let component: GreenpeasComponent;
  let fixture: ComponentFixture<GreenpeasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GreenpeasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GreenpeasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
