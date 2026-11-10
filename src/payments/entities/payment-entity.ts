import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn } from "typeorm";

@Entity('payments')
export class Payment {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @OneToOne('Order', 'payment')
    @JoinColumn({ name: 'order_id' })
    order: any;

    @Column({type: 'varchar', length: 50})
    payment_method: string;

    @Column({type: 'decimal', precision: 12, scale: 2})
    amount: number;

    @Column({type: 'varchar', length: 30, default: 'pending'})
    status: string;

    @Column({type: 'timestamp', nullable: true, name: 'paid_at'})
    paidAt: Date;

    @CreateDateColumn({name:'created_at'})
    createdAt: Date;
}