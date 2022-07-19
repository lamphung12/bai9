import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProductBeComponent } from './create-product-be.component';

describe('CreateProductBeComponent', () => {
  let component: CreateProductBeComponent;
  let fixture: ComponentFixture<CreateProductBeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateProductBeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateProductBeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
