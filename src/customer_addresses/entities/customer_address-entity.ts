import { Column, CreateDateColumn, Entity, ForeignKey, PrimaryGeneratedColumn, UpdateDateColumn, ManyToOne, JoinColumn } from "typeorm";
// import { Customer } from "../../customers/entities/customer-entity.js";

@Entity('customer_addresses')
export class CustomerAddress {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    // @ForeignKey(() => Customer)
    // @Column({type: 'uuid'})
    // customer_id: string;
    @ManyToOne('Customer', 'addresses')
    @JoinColumn({ name: 'customer_id' })
    customer: any;

    @Column({type: 'varchar', length: 150})
    recipient_name: string;

    @Column({type: 'varchar', length: 20})
    phone: string;

    @Column({type: 'text'})
    address: string;

    @Column({type: 'varchar', length: 100})
    city: string;

    @Column({type: 'varchar', length: 10})
    postal_code: string;

    @CreateDateColumn({name:'created_at'})
    createdAt: Date;

    @UpdateDateColumn({name:'updated_at'})
    updatedAt: Date;
}