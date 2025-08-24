import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisheCard } from './dish-card';

describe('DisheCard', () => {
  let component: DisheCard;
  let fixture: ComponentFixture<DisheCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisheCard],
    }).compileComponents();

    fixture = TestBed.createComponent(DisheCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
