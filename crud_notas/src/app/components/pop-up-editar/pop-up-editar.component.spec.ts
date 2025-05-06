import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpEditarComponent } from './pop-up-editar.component';

describe('PopUpEditarComponent', () => {
  let component: PopUpEditarComponent;
  let fixture: ComponentFixture<PopUpEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopUpEditarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopUpEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
