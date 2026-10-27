import { Injectable, NotFoundException } from '@nestjs/common';
import { Book } from './entities/book-entity.js';
import { CreateBookDto } from './dto/create-book-dto.js';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class BooksService {
    // Data buku sementara
    // private books: Book[] = [
    //     {id: 1, name: 'Buku', author: 'John Doe', isbn: '1234567890', publishedYear: 2020, isAvailable: true},
    //     {id: 2, name: 'Buku 2', author: 'Jane Smith', isbn: '0987654321', publishedYear: 2021, isAvailable: false},
    //     {id: 3, name: 'Buku 3', author: 'Alice Johnson', isbn: '5678901234', publishedYear: 2022, isAvailable: true},
    // ]
    constructor(
        @InjectRepository(Book)
        private readonly bookRepository: Repository<Book>
    ){}

    // Menampilkan data buku
    async findAll(): Promise<Book[]> {
        return await this.bookRepository.find({
            order:{createdAt:'DESC'}
        })
    }

    // Mengambil data buku berdasarkan id
    async findOne(id: string): Promise<Book> {
        const book = await this.bookRepository.findOneBy({id});

        // jika buku tidak ditemukan
        if(!book) {
            throw new NotFoundException(`Buku tidak ditemukan`)
        }

        return book
    }

    // Menyimpan data buku baru
    async create(book: CreateBookDto): Promise<Book> {
        const newBook = this.bookRepository.create(book)

        return await this.bookRepository.save(newBook);
    }

    // Mengupdate data buku berdasarkan id
    async update(id: string, book: CreateBookDto): Promise<Book> {
        const indexBook = await this.findOne(id)

        // Update book
        const updateBook = this.bookRepository.merge(indexBook, book)

        return await this.bookRepository.save(updateBook)
    }

    // Menghapus data buku berdasarkan id
    async delete(id: string): Promise<{message:string, deletedId:string}> {
        await this.findOne(id)

        await this.bookRepository.softDelete(id)

        return {
            message: 'Data berhasil dihapus',
            deletedId: id
        }
    }
}