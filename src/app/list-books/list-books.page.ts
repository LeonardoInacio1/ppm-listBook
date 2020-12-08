import { Component, OnInit } from '@angular/core';
import { Books } from '../shared/books';
import { BooksService } from '../shared/books.service';

@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.page.html',
  styleUrls: ['./list-books.page.scss'],
})
export class ListBooksPage implements OnInit {

  listBooks: Books[];

  constructor(
    private booksService: BooksService
  ) { }

  ngOnInit() {
    this.listBooks =  this.booksService.getBooks();
  }

}
