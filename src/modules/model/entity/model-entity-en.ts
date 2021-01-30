import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('muestra_en')

export class ModelEnEntity {

    @PrimaryGeneratedColumn()
    idMuestra: number
    @Column()
    nombre: string
    @Column()
    titulo: string
    @Column()
    descripcion: string

}