import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('noticia')

export class NewsEntity {

    @PrimaryGeneratedColumn()
    idNoticia: number
    @Column()
    titulo: string
    @Column()
    texto: string
    @Column()
    imagen: string
    @Column()
    orden: number
    @Column()
    publicada: number
    @Column()
    fecha: Date
}