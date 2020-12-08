import { Injectable } from '@angular/core';
import { Books } from './books';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  private books: Books[]

  constructor() {
    this.books = [
      {
        id: 1,
        titulo: 'Cemitério Maldito',
        autor: 'Stephen King',
        logo:'https://lojasaraiva.vteximg.com.br/arquivos/ids/12103707/1008972017.jpg?v=637142227487530000',
        isbn: 9788581050393
      },
      {
        id: 2,
        titulo: 'It- A Coisa',
        autor: 'Stephen King',
        logo:'https://lojasaraiva.vteximg.com.br/arquivos/ids/12104715/1008975660.jpg?v=637142231219470000',
        isbn: 9788560280940
      },
      {
        id: 3,
        titulo: 'Tripulação de Esqueletos',
        autor: 'Stephen King',
        logo:'https://lojasaraiva.vteximg.com.br/arquivos/ids/7068123/793165.jpg?v=637076758961070000',
        isbn:  9788560280926
       
      },
      {
        id: 4,
        titulo: 'Ed & Lorraine Warren - Demonologistas – Arquivos Sobrenaturais',
        autor: 'Gerald Brittle',
        logo:'data:image/jpeg;base64,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',
        isbn: 9788594540164
      },
      {
        id: 5,
        titulo: 'Supernatural - O Guia da Caça de Bobby Singer',
        autor: 'David Reed',
        logo:'https://lojasaraiva.vteximg.com.br/arquivos/ids/6992040/786783.jpg?v=637075483994530000',
        isbn:  9788583110590
      },  
      {
        id: 6,
        titulo: 'Supernatural: O diário de Jonh Winchester',
        autor: 'Alex Irvine',
        logo:'https://lojasaraiva.vteximg.com.br/arquivos/ids/6933024/643119.jpg?v=637074611846700000',
        isbn: 9788560610495
       
      },
      {
        id: 7,
        titulo: 'Batismo de Fogo',
        autor: 'Andrzej Sapkowski',
        logo:'https://lojasaraiva.vteximg.com.br/arquivos/ids/12106425-287-426/1008161532.jpg?v=637142238017000000',
        isbn:  9788578279820
      },
      {
        id: 8,
        titulo: 'A Senhora do Lago',
        autor: 'Andrzej Sapkowski',
        logo:'https://lojasaraiva.vteximg.com.br/arquivos/ids/7007229/678171.jpg?v=637075594022230000',
        isbn:  9788546901562
      },
      {
        id: 9,
        titulo: 'O Último Desejo',
        autor: 'Andrzej Sapkowski',
        logo:'https://lojasaraiva.vteximg.com.br/arquivos/ids/12604724-287-426/1010073892.jpg?v=637152687285670000',
        isbn:  9788578273743
      },
      {
        id: 10,
        titulo: 'Amityville',
        autor: 'Jay Anson',
        logo:'https://lojasaraiva.vteximg.com.br/arquivos/ids/7172722/804983.jpg?v=637080401236900000',
        isbn:  9788594540126
      }

      
    ]

   }
    public getBooks(){
      return this.books;
    } 
}
