import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRegisterAuthInfoComponent } from './user-register-auth-info.component';

describe('UserRegisterAuthInfoComponent', () => {
  let component: UserRegisterAuthInfoComponent;
  let fixture: ComponentFixture<UserRegisterAuthInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserRegisterAuthInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRegisterAuthInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
