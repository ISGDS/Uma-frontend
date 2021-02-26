import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAccountComponent } from './create-account.component';

describe('CreateAccountComponent', () => {
  let component: CreateAccountComponent;
  let fixture: ComponentFixture<CreateAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateAccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Register function test', () => {
    const fixture = TestBed.createComponent(CreateAccountComponent);
    const component = fixture.componentInstance;
    const spyOnMethod = spyOn(component, 'register');
    component.register();
    expect(spyOnMethod).toHaveBeenCalled();
  });

  it('Login function test', () => {
    const fixture = TestBed.createComponent(CreateAccountComponent);
    const component = fixture.componentInstance;
    const spyOnMethod = spyOn(component, 'login');
    component.login();
    expect(spyOnMethod).toHaveBeenCalled();
  });

  
});
