import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn } from 'typeorm';

@Entity('tienda_tematica_item')

export class ShopTematicsItemEntity {

    @PrimaryColumn()
    idTematica: number

    @PrimaryColumn()
    idItem: number
    
    @Column()
    orden: number
}
