import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstallStepComponent } from './install-step.component';

describe('InstallStepComponent', () => {
  let component: InstallStepComponent;
  let fixture: ComponentFixture<InstallStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstallStepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstallStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
