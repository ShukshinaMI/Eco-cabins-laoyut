import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcoCabinsComponent } from './eco-cabins.component';

describe('EcoCabinsComponent', () => {
  let component: EcoCabinsComponent;
  let fixture: ComponentFixture<EcoCabinsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcoCabinsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EcoCabinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
