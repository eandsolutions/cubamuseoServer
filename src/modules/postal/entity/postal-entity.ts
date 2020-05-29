import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('postal')

export class PostalEntity {

    @PrimaryGeneratedColumn()
    idPostal: number
    @Column()
    nombre: string
    @Column()
    precio: number
    @Column()
    imagen: string
    @Column()
    publicada: number
    @Column()
    orden: number
    @Column()
    idCategoria: number
}

