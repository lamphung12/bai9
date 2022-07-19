import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteProductBeComponent } from './delete-product-be.component';

describe('DeleteProductBeComponent', () => {
  let component: DeleteProductBeComponent;
  let fixture: ComponentFixture<DeleteProductBeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteProductBeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteProductBeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
