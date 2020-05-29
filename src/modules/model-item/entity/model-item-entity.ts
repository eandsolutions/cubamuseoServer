import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn } from 'typeorm';

@Entity('muestra_item')
export class ModelItemEntity {
    @PrimaryColumn()
    idMuestra: number;
    @PrimaryColumn()
    idItem: number;
    @Column()
    orden: number;
}