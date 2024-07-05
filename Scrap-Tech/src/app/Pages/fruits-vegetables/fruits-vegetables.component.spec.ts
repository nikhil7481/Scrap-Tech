import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FruitsVegetablesComponent } from './fruits-vegetables.component';

describe('FruitsVegetablesComponent', () => {
  let component: FruitsVegetablesComponent;
  let fixture: ComponentFixture<FruitsVegetablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FruitsVegetablesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FruitsVegetablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
