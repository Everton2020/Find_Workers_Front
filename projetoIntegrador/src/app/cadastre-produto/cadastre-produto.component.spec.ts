import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastreProdutoComponent } from './cadastre-produto.component';

describe('CadastreProdutoComponent', () => {
  let component: CadastreProdutoComponent;
  let fixture: ComponentFixture<CadastreProdutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastreProdutoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastreProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
