import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('categoria')
export class CategoryEntity {

    @PrimaryGeneratedColumn()
    idCategoria: number;
    @Column()
    nombre: string;
    @Column()
    titulo: string;
    @Column()
    imagenGaleria: string;
    @Column()
    imagen: string;
    @Column()
    descripcion: string;
    @Column()
    publicada: number;
    @Column()
    cantImagenes: number;
    @Column()
    login: number;
    @Column()
    carpeta: string;
    
}
