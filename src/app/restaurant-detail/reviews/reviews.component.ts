import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { RestaurantsService } from 'app/restaurants/restaurants.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html'
})
export class ReviewsComponent implements OnInit {

  reviews: Observable<any>;

  constructor(private restaurantService: RestaurantsService,
  private route: ActivatedRoute) { }

  ngOnInit() {
    const { id } = this.route.parent.snapshot.params;
    this.reviews = this.restaurantService.reviewsOfRestaurant(id);
  }

}
