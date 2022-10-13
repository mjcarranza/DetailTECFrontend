import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GprovidersComponent } from './gproviders.component';

describe('GprovidersComponent', () => {
  let component: GprovidersComponent;
  let fixture: ComponentFixture<GprovidersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GprovidersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GprovidersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
