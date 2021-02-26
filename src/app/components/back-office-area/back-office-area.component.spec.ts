import { ComponentFixture, TestBed } from '@angular/core/testing';
import { userInfo } from 'os';
import { User } from 'src/app/model/user/user';

import { BackOfficeAreaComponent } from './back-office-area.component';

describe('BackOfficeAreaComponent', () => {
  let component: BackOfficeAreaComponent;
  let fixture: ComponentFixture<BackOfficeAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackOfficeAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BackOfficeAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Show all users function test', () => {
    const fixture = TestBed.createComponent(BackOfficeAreaComponent);
    const component = fixture.componentInstance;
    const spyOnMethod = spyOn(component, 'showAllUsers');
    component.showAllUsers();
    expect(spyOnMethod).toHaveBeenCalled();
  });

  it('Show user function test', () => {
    const fixture = TestBed.createComponent(BackOfficeAreaComponent);
    const component = fixture.componentInstance;
    const spyOnMethod = spyOn(component, 'showUser');
    component.showUser();
    expect(spyOnMethod).toHaveBeenCalled();
  });
  
  it('Delete user function test', () => {
    const fixture = TestBed.createComponent(BackOfficeAreaComponent);
    const component = fixture.componentInstance;
    const spyOnMethod = spyOn(component, 'deleteRowData');
    let user = new User();
    user.id = 1;
    component.deleteRowData(user);
    expect(spyOnMethod).toHaveBeenCalled();
  });

  it('Update user function test', () => {
    const fixture = TestBed.createComponent(BackOfficeAreaComponent);
    const component = fixture.componentInstance;
    const spyOnMethod = spyOn(component, 'updateRowData');
    let user = new User();
    user.id = 1;
    user.name = "test";
    user.password = "test";
    component.updateRowData(user);
    expect(spyOnMethod).toHaveBeenCalled();
  });

});
