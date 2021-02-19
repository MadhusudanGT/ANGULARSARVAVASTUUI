import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductMessengerService } from "src/app/services/product-messenger.service";
import { Product } from 'src/app/models/product.model';
import { Subscription } from 'rxjs';
import { ItemCardComponent } from '../../shopping-cart/item-card/item-card.component';
import { WishlistmessengerService } from 'src/app/services/wishlistmessenger.service';
@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  wishlist:Product;
  constructor(private route:ActivatedRoute,
    private pms:ProductMessengerService,
    private ws:WishlistmessengerService,
    private router:Router

    ) { }

id;
ids:any[]=[];

item=[];
 temp:any={
  id: "",
name: "",
category:"",
sellingPrice: "",
MRPPrice: "",
image: "",
imageAlt:""
}

  ngOnInit(): void {

    this.getdata();
    // this.wishlist=(this.itemcard.getwishlist());



    // this.data.push(this.wishlist)




//     this.data.push(this.temp)
//  this.id=parseInt(this.route.snapshot.paramMap.get('id'));
//  this.ids.push(this.id)
//     console.log("wishlist data")
//     console.log("id is "+this.data.id);


  //  let fun=this.card.getwishlist()
  //  console.log("fun"+fun.name)
  }

getdata(){

  // this.card.itemData.asObservable().subscribe((data:Product)=>{
  //   this.item.push({  id: data.id,
  //     name: data.name,
  //     category: data.category,
  //     sellingPrice: data.sellingPrice,
  //     MRPPrice: data.MRPPrice,
  //     image: data.image,
  //     imageAlt: data.imageAlt
  //   })
  // })

  this.ws.getMessage().subscribe((data: Product) => {
    this.item.push({  id: data.id,
      name: data.name,
      category: data.category,
      sellingPrice: data.sellingPrice,
      MRPPrice: data.MRPPrice,
      image: data.image,
      imageAlt: data.imageAlt


    })
    console.log("from cart"+data.name)
   });

}


  deleteFromWishList(i :Product){
    console.log("delete clicked")
// delete this.item[i.id]

let index=this.item.indexOf(i);
console.log("index is"+this.item.indexOf(i))
this.item.splice(index,1);

}
addTocart(data:any){
this.router.navigate(['/cart',data])
}

}