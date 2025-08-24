import { Component, OnInit, signal } from '@angular/core';
import { Category } from '../../models/category';
import { CategoryCard } from '../../components/category-card/category-card';
import { Dish } from '../../models/dish';
import { DisheCard } from '../../components/dish-card/dish-card';

@Component({
  selector: 'nam-menu',
  imports: [CategoryCard, DisheCard],
  templateUrl: './menu.html',
  styleUrl: './menu.scss',
})
export class Menu implements OnInit {
  categories = signal<Category[]>([]);
  dishes = signal<Dish[]>([]);
  ngOnInit(): void {
    this.categories.set([
      {
        id: 1,
        name: 'Pizza',
        description: 'Delicious cheese pizza',
        imageUrl: 'https://picsum.photos/200/200',
      },
      {
        id: 2,
        name: 'Burger',
        description: 'Juicy beef burger',
        imageUrl: 'https://picsum.photos/200/200',
      },
    ]);

    this.dishes.set([
      {
        id: 1,
        name: 'Margherita Pizza',
        description: 'Classic pizza with tomato sauce and mozzarella cheese',
        imageUrl: 'https://picsum.photos/200/200',
        price: 8.99,
      },
      {
        id: 2,
        name: 'Cheeseburger',
        description: 'Juicy beef patty with cheese, lettuce, and tomato',
        imageUrl: 'https://picsum.photos/200/200',
        price: 10.99,
      },
    ]);
  }
}
