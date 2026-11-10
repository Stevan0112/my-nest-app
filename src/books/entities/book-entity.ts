import { Entity } from "typeorm";
import { PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, ManyToOne, OneToMany, JoinColumn } from "typeorm";

@Entity('books')
export class Book{
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({type: 'varchar', length: 30})
    title: string;

    // @Column({type: 'varchar', length: 25})
    // author: string;

    @Column({type: 'varchar', length: 45, unique: true})
    isbn: string;

    @Column({type: 'int', default: 0})
    publishedYear: number;

    @Column({type: 'boolean', default: true})
    isAvailable: boolean;

    @Column({type: 'decimal', precision: 12, scale: 2, default: 0}) //new column
    price: number;

    @Column({type: 'int', default: 0}) //new column
    stock: number;

    @ManyToOne('Category', 'books', { nullable: true })
    @JoinColumn({ name: 'category_id' })
    category: any;

    @ManyToOne('Publisher', 'books', { nullable: true })
    @JoinColumn({ name: 'publisher_id' })
    publisher: any;

    @OneToMany('BookAuthor', 'book')
    bookAuthors: any[];

    @OneToMany('OrderItem', 'book')
    orderItems: any[];

    @CreateDateColumn({name:'created_at'})
    createdAt: Date;

    @UpdateDateColumn({name:'updated_at'})
    updatedAt: Date;

    @DeleteDateColumn({name:'deleted_at'})
    deletedAt: Date | null;
}