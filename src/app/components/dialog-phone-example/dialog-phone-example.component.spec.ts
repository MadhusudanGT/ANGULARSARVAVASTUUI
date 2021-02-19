import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogPhoneExampleComponent } from './dialog-phone-example.component';

describe('DialogPhoneExampleComponent', () => {
  let component: DialogPhoneExampleComponent;
  let fixture: ComponentFixture<DialogPhoneExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogPhoneExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogPhoneExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
