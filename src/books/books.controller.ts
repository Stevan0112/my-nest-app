import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { BooksService } from "./books.service.js";
import { CreateBookDto } from "./dto/create-book-dto.js";

@Controller('books')
export class BooksController {
    constructor(private bookService: BooksService){}
    // Menampilkan data buku
    @Get()
    getAllBooks(){
        return this.bookService.findAll();
    }

    // Mengambil data buku berdasarkan id
    @Get(":id")
    getBookById(@Param('id') id: string){
        // logic untuk mengambil buku berdasarkan id
        return this.bookService.findOne(Number(id));
    }

    // Menyimpan data buku
    @Post()
    createBook(@Body() book: CreateBookDto){
        // logic untuk menyimpan buku baru
        return this.bookService.create(book);
    }

    // Mengupdate data buku berdasarkan id
    @Put(":id")
    updateBook(@Param('id') id: string, @Body() book: CreateBookDto){
        // logic untuk mengupdate buku berdasarkan id
        return this.bookService.update(Number(id), book);
    }

    // Menghapus data buku berdasarkan id
    @Delete(":id")
    deleteBook(@Param('id') id: string){
        // logic untuk menghapus buku berdasarkan id
        return this.bookService.delete(Number(id));
    }
}