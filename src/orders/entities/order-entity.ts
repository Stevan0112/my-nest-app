import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn, ManyToOne, OneToMany, OneToOne, JoinColumn } from "typeorm";

@Entity('orders')
export class Order {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne('Customer', 'orders')
    @JoinColumn({ name: 'customer_id' })
    customer: any;

    @Column({type: 'varchar', length: 50, unique: true})
    order_number: string;

    @Column({type: 'varchar', length: 30, default: 'pending'})
    status: string;

    @Column({type: 'decimal', precision: 12, scale: 2, default: 0})
    total_amount: number;

    @OneToMany('OrderItem', 'order')
    items: any[];

    @OneToOne('Payment', 'order')
    payment: any;

    @OneToOne('Shipment', 'order')
    shipment: any;

    @CreateDateColumn({name:'created_at'})
    createdAt: Date;

    @UpdateDateColumn({name:'updated_at'})
    updatedAt: Date;
}