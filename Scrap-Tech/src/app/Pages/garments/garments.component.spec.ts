import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GarmentsComponent } from './garments.component';

describe('GarmentsComponent', () => {
  let component: GarmentsComponent;
  let fixture: ComponentFixture<GarmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GarmentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GarmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
