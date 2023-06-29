import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NsvbarComponent } from './nsvbar.component';

describe('NsvbarComponent', () => {
  let component: NsvbarComponent;
  let fixture: ComponentFixture<NsvbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NsvbarComponent]
    });
    fixture = TestBed.createComponent(NsvbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
