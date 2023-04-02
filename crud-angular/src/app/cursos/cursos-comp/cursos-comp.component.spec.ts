import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosCompComponent } from './cursos-comp.component';

describe('CursosCompComponent', () => {
  let component: CursosCompComponent;
  let fixture: ComponentFixture<CursosCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursosCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CursosCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
