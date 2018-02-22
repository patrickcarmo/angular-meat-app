import { Component, OnInit } from '@angular/core';
import { Restaurant } from './restaurant/restaurant.model';

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html'
})
export class RestaurantsComponent implements OnInit {

restaurants: Restaurant[] = [
  {
    id: 'bread-bakery',
    name: 'Bread & Bakery',
    category: 'Bakery',
    deliveryEstimate: '25m',
    rating: 4.9,
    imagePath: 'assets/img/restaurants/breadbakery.png'
  }, {
    id: 'ice-cream',
    name: 'Ice Cream',
    category: 'Ice Creams',
    deliveryEstimate: '40-65m',
    rating: 4.5,
    imagePath: 'assets/img/restaurants/icy.png'
  }
];

  constructor() { }

  ngOnInit() {
  }

}
