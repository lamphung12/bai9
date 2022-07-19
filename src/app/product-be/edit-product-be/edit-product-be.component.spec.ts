import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProductBeComponent } from './edit-product-be.component';

describe('EditProductBeComponent', () => {
  let component: EditProductBeComponent;
  let fixture: ComponentFixture<EditProductBeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditProductBeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditProductBeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
