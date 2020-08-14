import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendStepComponent } from './send-step.component';

describe('SendStepComponent', () => {
  let component: SendStepComponent;
  let fixture: ComponentFixture<SendStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendStepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
