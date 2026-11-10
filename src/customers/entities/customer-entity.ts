import { Column, CreateDateColumn, DeleteDateColumn, Entity, UpdateDateColumn, OneToMany } from "typeorm";
import { PrimaryGeneratedColumn } from "typeorm";

@Entity('customers')
export class Customer {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({type: 'varchar', length: 150})
    name: string;

    @Column({type: 'varchar', length: 150, unique: true})
    email: string;

    @Column({type: 'varchar', length: 20})
    phone: string;

    @OneToMany('CustomerAddress', 'customer')
    addresses: any[];

    @OneToMany('Order', 'customer')
    orders: any[];

    @CreateDateColumn({name:'created_at'})
    createdAt: Date;

    @UpdateDateColumn({name:'updated_at'})
    updatedAt: Date;

    @DeleteDateColumn({name:'deleted_at'})
    deletedAt: Date | null;
}