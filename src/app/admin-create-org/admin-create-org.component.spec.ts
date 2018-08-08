import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCreateOrgComponent } from './admin-create-org.component';

describe('AdminCreateOrgComponent', () => {
  let component: AdminCreateOrgComponent;
  let fixture: ComponentFixture<AdminCreateOrgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCreateOrgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCreateOrgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
