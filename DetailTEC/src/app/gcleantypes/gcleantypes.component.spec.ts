import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GcleantypesComponent } from './gcleantypes.component';

describe('GcleantypesComponent', () => {
  let component: GcleantypesComponent;
  let fixture: ComponentFixture<GcleantypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GcleantypesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GcleantypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
