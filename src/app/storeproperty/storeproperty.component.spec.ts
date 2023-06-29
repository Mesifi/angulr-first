import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorepropertyComponent } from './storeproperty.component';

describe('StorepropertyComponent', () => {
  let component: StorepropertyComponent;
  let fixture: ComponentFixture<StorepropertyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StorepropertyComponent]
    });
    fixture = TestBed.createComponent(StorepropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
