import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('muestra')

export class ModelEntity {

    @PrimaryGeneratedColumn()
    idMuestra: number
    @Column()
    nombre: string
    @Column()
    titulo: string
    @Column()
    imagen: string
    @Column()
    imagenGaleria: string
    @Column()
    descripcion: string
    @Column()
    cantImagenes: number
    @Column()
    orden: number
    @Column()
    publicada: number
    @Column()
    carpeta: string

}