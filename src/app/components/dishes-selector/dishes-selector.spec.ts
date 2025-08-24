import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DishesSelector } from './dishes-selector';

describe('DishesSelector', () => {
  let component: DishesSelector;
  let fixture: ComponentFixture<DishesSelector>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DishesSelector]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DishesSelector);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
