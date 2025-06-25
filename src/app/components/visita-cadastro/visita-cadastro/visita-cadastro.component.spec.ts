import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitaCadastro } from './visita-cadastro.component';

describe('VisitaCadastro', () => {
  let component: VisitaCadastro;
  let fixture: ComponentFixture<VisitaCadastro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisitaCadastro]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisitaCadastro);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
