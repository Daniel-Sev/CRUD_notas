import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpEscolhasComponent } from './pop-up-escolhas.component';

describe('PopUpEscolhasComponent', () => {
  let component: PopUpEscolhasComponent;
  let fixture: ComponentFixture<PopUpEscolhasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopUpEscolhasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopUpEscolhasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
