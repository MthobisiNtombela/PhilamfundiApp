import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MedCollectionPage } from './med-collection.page';

describe('MedCollectionPage', () => {
  let component: MedCollectionPage;
  let fixture: ComponentFixture<MedCollectionPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MedCollectionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
