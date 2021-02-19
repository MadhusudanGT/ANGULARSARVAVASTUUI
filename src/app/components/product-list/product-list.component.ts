import { Component, OnInit } from "@angular/core";
import { ProductListService } from "src/app/services/product-list.service";
import { Product } from "src/app/models/product.model";
import { ProductMessengerService } from "src/app/services/product-messenger.service";
import { ItemCardComponent } from '../../shopping-cart/item-card/item-card.component';

@Component({
  selector: "product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  constructor(
    private cardService: ProductMessengerService,
    private productListService: ProductListService,
    private itemcard:ItemCardComponent
  ) {}

  ngOnInit(): void {
    this.cardService.sendMessage(this.products);
    this.products = this.productListService.getAllProducts();
  }

  config = {
    itemsPerPage: 8,
    currentPage: 1,
    totalItems: this.products.length,
  };

  pageChanged(event) {
    this.config.currentPage = event;
  }
}