import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRegisterInterestsComponent } from './user-register-interests.component';

describe('UserRegisterInterestsComponent', () => {
  let component: UserRegisterInterestsComponent;
  let fixture: ComponentFixture<UserRegisterInterestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserRegisterInterestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRegisterInterestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
