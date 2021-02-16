import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalChooseALotComponent } from './modal-choose-a-lot.component';

describe('ModalChooseALotComponent', () => {
  let component: ModalChooseALotComponent;
  let fixture: ComponentFixture<ModalChooseALotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalChooseALotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalChooseALotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
