import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyremoveComponent } from './propertyremove.component';

describe('PropertyremoveComponent', () => {
  let component: PropertyremoveComponent;
  let fixture: ComponentFixture<PropertyremoveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PropertyremoveComponent]
    });
    fixture = TestBed.createComponent(PropertyremoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
