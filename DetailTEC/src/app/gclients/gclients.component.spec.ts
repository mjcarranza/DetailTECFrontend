import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GclientsComponent } from './gclients.component';

describe('GclientsComponent', () => {
  let component: GclientsComponent;
  let fixture: ComponentFixture<GclientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GclientsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GclientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
