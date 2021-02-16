import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptCardComponent } from './crypt-card.component';

describe('CryptCardComponent', () => {
  let component: CryptCardComponent;
  let fixture: ComponentFixture<CryptCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CryptCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CryptCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
