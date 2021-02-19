import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
@Injectable({
  providedIn: "root",
})
export class ProductMessengerService {
  itemData = new Subject<any>();

  constructor() {}
  sendMessage(data: any) {
    this.itemData.next(data);
  }
  // clearMsg(data:any){
  //   this.itemData.next();
  // }
  getMessage() {
    return this.itemData.asObservable();
  }
}