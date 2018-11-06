import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { RestaurantsService } from 'app/restaurants/restaurants.service';
import { ActivatedRoute } from '@angular/router';
import { MenuItem } from '../menu-item/menu-item.model';

@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  menu: Observable<MenuItem>;

  constructor(private restaurantService: RestaurantsService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    const { id } = this.route.parent.snapshot.params;
    this.menu = this.restaurantService.menuOfRestaurant(id);
  }

  addMenuItem(item: MenuItem) {
    console.log(item);
  }
}
