import { Component, input } from '@angular/core';
import { Category } from '../../models/category';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'nam-category-card',
  imports: [CurrencyPipe],
  templateUrl: './category-card.html',
  styleUrl: './category-card.scss',
})
export class CategoryCard {
  category = input.required<Category>();
}
