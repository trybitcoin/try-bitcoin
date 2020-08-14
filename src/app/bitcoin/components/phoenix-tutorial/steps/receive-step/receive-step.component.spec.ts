import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiveStepComponent } from './receive-step.component';

describe('ReceiveStepComponent', () => {
  let component: ReceiveStepComponent;
  let fixture: ComponentFixture<ReceiveStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceiveStepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceiveStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
