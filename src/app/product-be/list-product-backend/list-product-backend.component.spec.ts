import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProductBackendComponent } from './list-product-backend.component';

describe('ListProductBackendComponent', () => {
  let component: ListProductBackendComponent;
  let fixture: ComponentFixture<ListProductBackendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListProductBackendComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListProductBackendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
