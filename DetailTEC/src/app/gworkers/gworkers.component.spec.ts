import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GworkersComponent } from './gworkers.component';

describe('GworkersComponent', () => {
  let component: GworkersComponent;
  let fixture: ComponentFixture<GworkersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GworkersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GworkersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
