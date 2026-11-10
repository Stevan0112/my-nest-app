import { Controller, Get, Param, Post, Body, Put, Delete, ParseUUIDPipe } from '@nestjs/common';
import { BooksService } from "./books.service.js";
import { CreateBookDto } from "./dto/create-book-dto.js";
import { UpdateBookDto } from './dto/update-book-dto.js';

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
    getBookById(@Param('id', ParseUUIDPipe) id: string){
        // logic untuk mengambil buku berdasarkan id
        return this.bookService.findOne(String(id));
    }

    // Menyimpan data buku
    @Post()
    createBook(@Body() book: CreateBookDto){
        // logic untuk menyimpan buku baru
        return this.bookService.create(book);
    }

    // Mengupdate data buku berdasarkan id
    @Put(":id")
    updateBook(@Param('id', ParseUUIDPipe) id: string, @Body() Book: UpdateBookDto){
        // logic untuk mengupdate buku berdasarkan id
        return this.bookService.update(String(id), Book as CreateBookDto);
    }

    // Menghapus data buku berdasarkan id
    @Delete(":id")
    deleteBook(@Param('id') id: string){
        // logic untuk menghapus buku berdasarkan id
        return this.bookService.delete(String(id));
    }
}