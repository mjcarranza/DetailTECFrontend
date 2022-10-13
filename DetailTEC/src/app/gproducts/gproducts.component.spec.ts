import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GproductsComponent } from './gproducts.component';

describe('GproductsComponent', () => {
  let component: GproductsComponent;
  let fixture: ComponentFixture<GproductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GproductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
