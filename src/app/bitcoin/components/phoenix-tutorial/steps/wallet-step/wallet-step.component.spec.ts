import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WalletStepComponent } from './wallet-step.component';

describe('WalletStepComponent', () => {
  let component: WalletStepComponent;
  let fixture: ComponentFixture<WalletStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalletStepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WalletStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
