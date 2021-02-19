import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as M from 'src/assets/materialize/js/materialize.min.js'

@Component({
  selector: 'app-product-viewimage',
  templateUrl: './product-viewimage.component.html',
  styleUrls: ['./product-viewimage.component.css']
})
export class ProductViewimageComponent implements OnInit {

  selectedimg:any;
  options={};
    products: any =[
      {
          "id": 1,
          "name": "Licensed Frozen Hat",
          "description": "The Indian rupee (sign: ₹; currency code: INR) is the official currency of India. The rupee is subdivided into 100 paise (singular: paisa), though as of 2019, coins of denomination of 1 rupee is the lowest value in use. The issuance of the currency",
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
addtocart(){
  
}
  slideConfig = {  
    "slidesToShow": 3,  
    "slidesToScroll": 3,  
    "dots": true,  
    "infinite": false  
  };
  show = false;

        imageclick(img){
  this.selectedimg=img;
  console.log(img)
        }
  

}
