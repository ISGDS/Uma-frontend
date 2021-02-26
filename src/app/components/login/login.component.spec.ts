import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('AppComponent should be initialized', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    const component = fixture.componentInstance;
    const spyOnMethod = spyOn(component, 'ngOnInit').and.callThrough();
    component.ngOnInit();
    expect(spyOnMethod).toHaveBeenCalled();
  });

  it('Register function test', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    const component = fixture.componentInstance;
    const spyOnMethod = spyOn(component, 'register').and.callThrough();
    component.register();
    expect(spyOnMethod).toHaveBeenCalled();
  });

  it('Login function test', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    const component = fixture.componentInstance;
    const spyOnMethod = spyOn(component, 'login').and.callThrough();
    component.login();
    expect(spyOnMethod).toHaveBeenCalled();
  });


});
