import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegcitasComponent } from './regcitas.component';

describe('RegcitasComponent', () => {
  let component: RegcitasComponent;
  let fixture: ComponentFixture<RegcitasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegcitasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegcitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
