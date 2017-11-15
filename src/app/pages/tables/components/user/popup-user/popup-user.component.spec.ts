import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupUserComponent } from './popup-user.component';

describe('PopupUserComponent', () => {
  let component: PopupUserComponent;
  let fixture: ComponentFixture<PopupUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
