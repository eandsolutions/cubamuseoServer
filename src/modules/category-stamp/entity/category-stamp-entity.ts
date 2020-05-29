import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn } from 'typeorm';

@Entity('categoriaestampa')
export class CategoryStampEntity {

    @PrimaryGeneratedColumn()
    idCategoriaEstampa: number;
    @Column()
    nombre: string;
    @Column()
    orden: number;
    @Column()
    imagenMenu: string;
    @Column()
    publicada: number;
}

