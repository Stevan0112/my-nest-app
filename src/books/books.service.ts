import { Injectable } from '@nestjs/common';
import { Book } from './entities/book-entity.js';
import { CreateBookDto } from './dto/create-book-dto.js';

@Injectable()
export class BooksService {
    // Data buku sementara
    private books: Book[] = [
        {id: 1, name: 'Buku', author: 'John Doe', isbn: '1234567890', publishedYear: 2020, isAvailable: true},
        {id: 2, name: 'Buku 2', author: 'Jane Smith', isbn: '0987654321', publishedYear: 2021, isAvailable: false},
        {id: 3, name: 'Buku 3', author: 'Alice Johnson', isbn: '5678901234', publishedYear: 2022, isAvailable: true},
    ]

    // Menampilkan data buku
    findAll(): Book[] {
        return this.books;
    }

    // Mengambil data buku berdasarkan id
    findOne(id: number): Book | undefined {
        return this.books.find(book => book.id === id);
    }

    // Menyimpan data buku baru
    create(book: CreateBookDto): Book {
        const newBook: Book = {
            id: this.books.length + 1,
            name: book.name,
            author: book.author,
            isbn: book.isbn,
            publishedYear: book.publishedYear,
            isAvailable: true
        }

        // Simpan buku
        this.books.push(newBook);
        return newBook;
    }

    // Mengupdate data buku berdasarkan id
    update(id: number, book: CreateBookDto): Book | undefined {
        const index = this.books.findIndex(b => b.id === id);
        if (index !== -1) {
            this.books[index] = { ...this.books[index], ...book };
            return this.books[index];
        }
        return undefined;
    }

    // Menghapus data buku berdasarkan id
    delete(id: number): boolean {
        const index = this.books.findIndex(b => b.id === id);
        if (index !== -1) {
            this.books.splice(index, 1);
            return true;
        }
        return false;
    }
}