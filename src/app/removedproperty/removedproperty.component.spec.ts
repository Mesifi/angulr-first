import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemovedpropertyComponent } from './removedproperty.component';

describe('RemovedpropertyComponent', () => {
  let component: RemovedpropertyComponent;
  let fixture: ComponentFixture<RemovedpropertyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RemovedpropertyComponent]
    });
    fixture = TestBed.createComponent(RemovedpropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
