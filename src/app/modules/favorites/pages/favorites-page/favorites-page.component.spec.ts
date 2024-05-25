import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritesPageComponent } from './favorites-page.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('FavoritesPageComponent', () => {
  let component: FavoritesPageComponent;
  let fixture: ComponentFixture<FavoritesPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FavoritesPageComponent],
      schemas:[CUSTOM_ELEMENTS_SCHEMA]
    });
    fixture = TestBed.createComponent(FavoritesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
