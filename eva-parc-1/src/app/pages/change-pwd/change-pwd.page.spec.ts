import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChangePwdPage } from './change-pwd.page';

describe('ChangePwdPage', () => {
  let component: ChangePwdPage;
  let fixture: ComponentFixture<ChangePwdPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangePwdPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
