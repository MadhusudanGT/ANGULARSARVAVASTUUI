import { Component, OnInit, Input } from "@angular/core";
import { Product } from "src/app/models/product.model";

import { ProductMessengerService } from "src/app/services/product-messenger.service";
import { Router } from '@angular/router';
import { WishlistComponent } from 'src/app/components/wishlist/wishlist.component';

import { WishlistmessengerService } from 'src/app/services/wishlistmessenger.service';


@Component({
  selector: "item-card",
  templateUrl: "./item-card.component.html",
  styleUrls: ["./item-card.component.css"],
})
export class ItemCardComponent implements OnInit {

  showWishlistMessage: boolean;
  showDescriptionMessage: boolean;
  constructor(private productMessengerService: ProductMessengerService,
    private router:Router,
    private ws:WishlistmessengerService
    ) {}
    wishlistproduct:Product;
    wishlist:WishlistComponent;
  @Input("productItem") productItem: Product;
  ngOnInit(): void {

    console.log("product itom id"+this.productItem.id)
    console.log("itom i s"+this.productItem.image)

    this.showWishlistMessage = false;
    this.showDescriptionMessage = false;
  }
  addToCart(item: Product) {
    this.productMessengerService.sendMessage(item);
    console.log('the item is'+item.id);
  }
  addToWishList(product:Product){
    // this.router.navigate(['/wishlist',product])

    this.ws.sendMessage(product)

    console.log("product is "+product.image)




    }


}