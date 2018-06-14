import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRegisterTypeComponent } from './user-register-type.component';

describe('UserRegisterTypeComponent', () => {
  let component: UserRegisterTypeComponent;
  let fixture: ComponentFixture<UserRegisterTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserRegisterTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRegisterTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
