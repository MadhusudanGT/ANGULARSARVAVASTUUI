import { Component, OnInit } from '@angular/core';
import { StarRatingColor } from '../star-rating/star-rating.component';

@Component({
  selector: 'app-rating-reviews',
  templateUrl: './rating-reviews.component.html',
  styleUrls: ['./rating-reviews.component.css']
})
export class RatingReviewsComponent implements OnInit {

  rating:number = 3;
  starCount:number = 5;
  starColor:StarRatingColor = StarRatingColor.accent;
  starColorP:StarRatingColor = StarRatingColor.primary;
  starColorW:StarRatingColor = StarRatingColor.warn;

  constructor() { }

  ngOnInit() {
  }
    onRatingChanged(rating){
    console.log(rating);
    this.rating = rating;
  }

}