import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DehydrateFoodComponent } from './dehydrate-food.component';

describe('DehydrateFoodComponent', () => {
  let component: DehydrateFoodComponent;
  let fixture: ComponentFixture<DehydrateFoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DehydrateFoodComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DehydrateFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
