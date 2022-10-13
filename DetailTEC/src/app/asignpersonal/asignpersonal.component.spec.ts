import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignpersonalComponent } from './asignpersonal.component';

describe('AsignpersonalComponent', () => {
  let component: AsignpersonalComponent;
  let fixture: ComponentFixture<AsignpersonalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsignpersonalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsignpersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
