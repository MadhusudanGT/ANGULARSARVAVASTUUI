import { Component, OnInit } from "@angular/core";
import { ProductMessengerService } from "src/app/services/product-messenger.service";
import { Product } from "src/app/models/product.model";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: "cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"],
})
export class CartComponent implements OnInit {
  itemList: any[] = [];
  constructor(private productMessengerService: ProductMessengerService,private router:ActivatedRoute) {}

  ngOnInit(): void {
    console.log("clicked");
    console.log(this.itemList)
    this.productMessengerService.getMessage().subscribe((data: Product) => {
     this.itemList.push(data);
    });

    console.log(this.itemList);

    console.log(this.itemList.length);
  let data=   this.router.snapshot.paramMap.get('data')
  console.log("data is "+data)
  if(data){
  this.itemList.push(data)
  }
  }
}