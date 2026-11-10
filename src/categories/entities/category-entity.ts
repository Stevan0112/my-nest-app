import { Entity } from "typeorm";
import { PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, OneToMany } from "typeorm";

@Entity('categories')
export class Category{
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({type: 'varchar', length: 100})
    name: string;

    @OneToMany('Book', 'category')
    books: any[];
    
    @CreateDateColumn({name:'created_at'})
    createdAt: Date;

    @UpdateDateColumn({name:'updated_at'})
    updatedAt: Date;

    @DeleteDateColumn({name:'deleted_at'})
    deletedAt: Date | null;
}