import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesBannerComponent } from './categories-banner.component';

describe('CategoriesBannerComponent', () => {
  let component: CategoriesBannerComponent;
  let fixture: ComponentFixture<CategoriesBannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategoriesBannerComponent]
    });
    fixture = TestBed.createComponent(CategoriesBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
