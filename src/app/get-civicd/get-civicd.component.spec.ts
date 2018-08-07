import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetCivicdComponent } from './get-civicd.component';

describe('GetCivicdComponent', () => {
  let component: GetCivicdComponent;
  let fixture: ComponentFixture<GetCivicdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetCivicdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetCivicdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
