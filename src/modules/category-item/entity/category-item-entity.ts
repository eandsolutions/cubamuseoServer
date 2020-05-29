import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn } from 'typeorm';

@Entity ('categoria_item')
export class CategoryItemEntity {

    @PrimaryColumn()
    idCategoria: number;

    @PrimaryColumn()
    idItem: number;

    @Column()
    orden: number;
}