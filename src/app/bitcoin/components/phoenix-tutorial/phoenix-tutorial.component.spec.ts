import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoenixTutorialComponent } from './phoenix-tutorial.component';

describe('PhoenixTutorialComponent', () => {
  let component: PhoenixTutorialComponent;
  let fixture: ComponentFixture<PhoenixTutorialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhoenixTutorialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoenixTutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
