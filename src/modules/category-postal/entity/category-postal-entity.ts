import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn } from 'typeorm';

@Entity('categoriapostal')
export class CategoryPostalEntity {
    
    @PrimaryGeneratedColumn()
    idCategoriaPostal: number;
    @Column()
    nombre: string;
    @Column()
    titulo: string;
    @Column()
    orden: number;
    @Column()
    publicada: number;
    @Column()
    cantImagenes: number;
    @Column()
    imagenMenu: string;
}

