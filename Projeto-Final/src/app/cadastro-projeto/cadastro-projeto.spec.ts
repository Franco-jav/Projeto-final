import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CadastroProjeto } from './cadastro-projeto';

describe('CadastroProjeto', () => {
  let component: CadastroProjeto;
  let fixture: ComponentFixture<CadastroProjeto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CadastroProjeto],
    }).compileComponents();

    fixture = TestBed.createComponent(CadastroProjeto);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
