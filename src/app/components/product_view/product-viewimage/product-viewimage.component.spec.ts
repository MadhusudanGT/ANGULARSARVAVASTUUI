import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductViewimageComponent } from './product-viewimage.component';

describe('ProductViewimageComponent', () => {
  let component: ProductViewimageComponent;
  let fixture: ComponentFixture<ProductViewimageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductViewimageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductViewimageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
