import { Column, Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn } from "typeorm";

@Entity('shipments')
export class Shipment {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @OneToOne('Order', 'shipment')
    @JoinColumn({ name: 'order_id' })
    order: any;

    @Column({type: 'varchar', length: 100})
    courier: string;

    @Column({type: 'varchar', length: 100, nullable: true})
    tracking_number: string | null;

    @Column({type: 'varchar', length: 30, default: 'pending'})
    status: string;

    @Column({type: 'timestamp', nullable: true})
    shipped_at: Date | null;

    @Column({type: 'timestamp', nullable: true})
    delivered_at: Date | null;
}