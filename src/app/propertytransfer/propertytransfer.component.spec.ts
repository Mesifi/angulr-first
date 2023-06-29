import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertytransferComponent } from './propertytransfer.component';

describe('PropertytransferComponent', () => {
  let component: PropertytransferComponent;
  let fixture: ComponentFixture<PropertytransferComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PropertytransferComponent]
    });
    fixture = TestBed.createComponent(PropertytransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
