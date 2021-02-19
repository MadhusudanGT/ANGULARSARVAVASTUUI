import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { Book } from './search';
import { HttpClient } from '@angular/common/http';

const ALL_BOOKS: Book[] = [
  { id: 101, name: 'Gitanjali', writer: 'RabindraNath Tagore' },
  { id: 102, name: 'Ananda Math', writer: 'Bamkim Chandra Chatterjee' },
  { id: 103, name: 'Abol Tabol', writer: 'Sukumar Ray' }, 
  { id: 104, name: 'Gora', writer: 'RabindraNath Tagore' },   
  { id: 105, name: 'Kapalkundala', writer: 'Bamkim Chandra Chatterjee' },
  { id: 106, name: 'Devdas', writer: 'Sarat Chandra Chattopadhyay' }           
];


@Injectable({
  providedIn: 'root'
})
export class BookService { 
    baseUrl="./assets/mydata.json";
  getAllBooks() {
    return of(ALL_BOOKS);
  }
  saveBook(books) {
    console.log(JSON.stringify(books));
  }
//   constructor(private http: HttpClient) {
//     this.getAllBooks().subscribe(data => {
//         console.log(data);
//     });
// }
//   public getAllBooks(): Observable<any> {
//     return this.http.get(this.url);
// }
 
// constructor(private http : HttpClient) {
//     console.log('Book http service created');
//   }
// public getBookServices(): Observable<any> {
//     console.log('calling')
//     return this.http.get(this.baseUrl);
//   }
} 