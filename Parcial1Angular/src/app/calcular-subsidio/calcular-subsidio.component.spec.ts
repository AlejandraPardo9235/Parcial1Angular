import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcularSubsidioComponent } from './calcular-subsidio.component';

describe('CalcularSubsidioComponent', () => {
  let component: CalcularSubsidioComponent;
  let fixture: ComponentFixture<CalcularSubsidioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalcularSubsidioComponent]
    });
    fixture = TestBed.createComponent(CalcularSubsidioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
