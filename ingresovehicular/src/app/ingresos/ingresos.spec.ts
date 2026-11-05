import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ingresos } from './ingresos';

describe('Ingresos', () => {
  let component: Ingresos;
  let fixture: ComponentFixture<Ingresos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ingresos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ingresos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render one row per entry', () => {
    const filas = (fixture.nativeElement as HTMLElement).querySelectorAll('tbody tr');
    expect(filas.length).toBe(component.ingresos.length);
  });
});
