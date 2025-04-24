import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaminhoComponent } from './caminho.component';

describe('CaminhoComponent', () => {
  let component: CaminhoComponent;
  let fixture: ComponentFixture<CaminhoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaminhoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaminhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
