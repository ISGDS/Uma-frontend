import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogComponent } from './dialog.component';

describe('DialogComponent', () => {
  let component: DialogComponent;
  let fixture: ComponentFixture<DialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Do action function test', () => {
    const fixture = TestBed.createComponent(DialogComponent);
    const component = fixture.componentInstance;
    const spyOnMethod = spyOn(component, 'doAction').and.callThrough();
    component.doAction();
    expect(spyOnMethod).toHaveBeenCalled();
  });

  it('Close dialog function test', () => {
    const fixture = TestBed.createComponent(DialogComponent);
    const component = fixture.componentInstance;
    const spyOnMethod = spyOn(component, 'login').and.callThrough();
    component.closeDialog();
    expect(spyOnMethod).toHaveBeenCalled();
  });

});
