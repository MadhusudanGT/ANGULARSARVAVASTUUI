import { ProductviewdescriptionComponent } from './../product_view/productviewdescription/productviewdescription.component';
import { ProductViewimageComponent } from './../product_view/product-viewimage/product-viewimage.component';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-prod-view',
  templateUrl: './prod-view.component.html',
  styleUrls: ['./prod-view.component.css'],

})

export class ProdViewComponent implements OnInit {
  products: any =[
    {
        "id": 1,
        "name": "Licensed Frozen Hat",
        "description": "this information about the product details.",
        "price": "170.00",
        "imageUrl": "/assets/IMG/k5.jfif",
        "quantity": 56840,
        "manficater":"Best before 08 Nov 2020 Manufactured date 13 May 2020",
        "images" : [
           "/assets/IMG/bmw.jfif" ,  
           "/assets/IMG/bmw1.jfif" ,  
            "/assets/IMG/bmw2.jfif" ,  
          "/assets/IMG/bmw3.jfif" ,  
             "/assets/IMG/k3.jfif" ,  
        "/assets/IMG/k4.jfif" ,  
             "/assets/IMG/k5.jfif" ,  
             "/assets/IMG/k6.jfif" ,  
            "/assets/IMG/sarvavastu_Logo.png" 
          ]
    }
  
];
constructor() { 
}
  ngOnInit(): void {
  }
  slideConfig1 = {
    "slidesToShow": 4,
    "slidesToScroll": 1,
    "nextArrow": "<div class='nav-btn next-slide'></div>",
    "prevArrow": "<div class='nav-btn prev-slide'></div>",
    "dots": true,
    "infinite": false
  };


  slickInit(e) {
    console.log('slick initialized');
  }

  breakpoint(e) {
    console.log('breakpoint');
  }

  afterChange(e) {
    console.log('afterChange');
  }

  beforeChange(e) {
    console.log('beforeChange');
  }

  getImage(ev) {
    console.log(ev);
 }
}


