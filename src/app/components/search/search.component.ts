import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { filter, startWith, map, switchMap } from 'rxjs/operators';
import { BookService } from './search.service';
import { Book } from './search';
import {MatTableDataSource} from '@angular/material/table';

const ALL_BOOKS: Book[] = [
  { id: 101, name: 'Gitanjali', writer: 'RabindraNath Tagore' },
  { id: 102, name: 'Ananda Math', writer: 'Bamkim Chandra Chatterjee' },
  { id: 103, name: 'Abol Tabol', writer: 'Sukumar Ray' }, 
  { id: 104, name: 'Gora', writer: 'RabindraNath Tagore' },   
  { id: 105, name: 'Kapalkundala', writer: 'Bamkim Chandra Chatterjee' },
  { id: 106, name: 'Devdas', writer: 'Sarat Chandra Chattopadhyay' }           
];


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'writer'];
  dataSource = new MatTableDataSource(ALL_BOOKS);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  $allBooks: Observable<Book[]>;
  $filteredBooks: Observable<Book[]>;
  $filteredwriterBooks: Observable<Book[]>;
  constructor(private formBuilder: FormBuilder, private bookService: BookService) { 
    // this.bookService.getBookServices().subscribe((book) => {
    //   this.dataSource = new MatTableDataSource(book);
    //  });
  }

  ngOnInit() {
    // this.bookService.getAllBooks().subscribe(data => {
    //   console.log(data);
    // });
    this.$allBooks = this.bookService.getAllBooks();
    this.$filteredBooks = this.book.valueChanges
      .pipe(
        startWith(''),
        switchMap(value => this.filterBooks(value))
      );
      this.$filteredwriterBooks = this.book.valueChanges
      .pipe(
        startWith(''),
        switchMap(value => this.filterBooks1(value))
      );
  }
  private filterBooks(value: string | Book) {
    let filterValue = '';
    if (value) {
      filterValue = typeof value === 'string' ? value.toLowerCase() : value.name.toLowerCase();
      return this.$allBooks.pipe(
        map(books => books.filter(book => book.name.toLowerCase().includes(filterValue)))
      );
    } 
    
      else {
      return this.$allBooks;
    }
  }
  private filterBooks1(value: string | Book) {
    let filterValue = '';
    if (value) {
      filterValue = typeof value === 'string' ? value.toLowerCase() : value.name.toLowerCase();
      return this.$allBooks.pipe(
        map(books => books.filter(book => book.name.toLowerCase().includes(filterValue)))
      );
    } 
    
      else {
      return this.$allBooks;
    }
  }
  public displayFn(book?: Book): string | undefined {
    return book ? book.name : undefined;
  }
  public displayFn1(book?: Book): string | undefined {
    return book ? book.writer : undefined;
  }
  bookForm = this.formBuilder.group({
    book: [null, Validators.required]
  });
  get book() {
    return this.bookForm.get('book');
  }
  onFormSubmit() {
    this.bookService.saveBook(this.bookForm.value);
    this.resetForm();
  }
  resetForm() {
    this.bookForm.reset();
  }
 

}