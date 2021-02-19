import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as M from 'src/assets/materialize/js/materialize.min.js'

@Component({
  selector: 'app-productviewdescription',
  templateUrl: './productviewdescription.component.html',
  styleUrls: ['./productviewdescription.component.css']
})
export class ProductviewdescriptionComponent implements OnInit {

  count:number=0.5;
  selectedimg:any;
  options={};
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
   
  
  constructor(private httpClient: HttpClient) { 
   
  }
  
    ngOnInit(): void {
      // this.httpClient.get("assets/data.json").subscribe((data) =>{
      //   console.log(data);
      //   this.products = data;
      //   this.selectedimg=data
      // })
      console.log(this.products)
      this.selectedimg=this.products[0].imageUrl;
      var elems=document.querySelectorAll('.carousel');
      var instances=M.Carousel.init(elems,this.options);
    }
  
    inc(){
      if(this.count<=5)
      {
      this.count=this.count+0.5;
      }
    }
    dec(){
      if(this.count>=1)
      {
      this.count=this.count-0.5;
      }
    }
    location(){
  
    }
  wishlist(){
    console.log("wishlist cliked")
  }
  addtocart(){
    console.log("add to cart is clicked")
  }

   
  
  slideConfig = {  
    "slidesToShow": 3,  
    "slidesToScroll": 3,  
    "dots": true,  
    "infinite": false  
  };
  show = false;
  instock(){
    console.log("instock is clicked")
  }  
  share(){
  console.log("share buttotn woking")
  }
  print(){
    console.log("print it")
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

        imageclick(img){
  this.selectedimg=img;
  console.log(img)
        }
  
}
