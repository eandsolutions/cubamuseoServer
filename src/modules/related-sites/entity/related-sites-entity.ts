import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('related_sites')

export class RelatedSitesEntity {

    @PrimaryGeneratedColumn()
    id: number
    @Column()
    url: string
    @Column()
    imagen: string
    @Column()
    descripcion: string
    @Column()
    nombre: string
    @Column()
    publicada: number
    @Column()
    orden: number

}