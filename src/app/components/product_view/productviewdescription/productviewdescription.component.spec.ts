import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductviewdescriptionComponent } from './productviewdescription.component';

describe('ProductviewdescriptionComponent', () => {
  let component: ProductviewdescriptionComponent;
  let fixture: ComponentFixture<ProductviewdescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductviewdescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductviewdescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
