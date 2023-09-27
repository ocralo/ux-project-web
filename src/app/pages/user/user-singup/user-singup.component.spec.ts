/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UserSingupComponent } from './user-singup.component';

describe('UserSingupComponent', () => {
  let component: UserSingupComponent;
  let fixture: ComponentFixture<UserSingupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserSingupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSingupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
