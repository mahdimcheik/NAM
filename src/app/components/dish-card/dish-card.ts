import { Component, input } from '@angular/core';
import { Dish } from '../../models/dish';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'nam-dish-card',
  imports: [CurrencyPipe],
  templateUrl: './dish-card.html',
  styleUrl: './dish-card.scss',
})
export class DisheCard {
  dish = input.required<Dish>();
}
