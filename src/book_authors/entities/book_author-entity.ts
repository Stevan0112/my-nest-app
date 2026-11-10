import { Entity, PrimaryColumn, ManyToOne, JoinColumn } from "typeorm";
// import { Book } from "../../books/entities/book-entity.js";
// import { Author } from "../../authors/entities/author-entity.js";

@Entity('book_authors')
export class BookAuthor {
    @PrimaryColumn({ type: 'uuid', name: 'book_id' })
    bookId: string;

    @PrimaryColumn({ type: 'uuid', name: 'author_id' })
    authorId: string;

    @ManyToOne('Book', 'bookAuthors')
    @JoinColumn({ name: 'book_id' })
    book: any;

    @ManyToOne('Author', 'bookAuthors')
    @JoinColumn({ name: 'author_id' })
    author: any;
}