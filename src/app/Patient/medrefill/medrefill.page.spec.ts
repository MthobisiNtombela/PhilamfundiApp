import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MedrefillPage } from './medrefill.page';

describe('MedrefillPage', () => {
  let component: MedrefillPage;
  let fixture: ComponentFixture<MedrefillPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MedrefillPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
