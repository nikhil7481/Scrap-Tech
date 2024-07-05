import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgricultureProductsComponent } from './agriculture-products.component';

describe('AgricultureProductsComponent', () => {
  let component: AgricultureProductsComponent;
  let fixture: ComponentFixture<AgricultureProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgricultureProductsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgricultureProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
