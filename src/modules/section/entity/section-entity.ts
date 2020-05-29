import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('seccion')

export class SectionEntity {

    @PrimaryGeneratedColumn()
    idSeccion: number
    @Column() nombre: string
    @Column() titulo: string
    @Column() descripcion: string
    @Column() imagen: string
    @Column() imagenMenu: string
    @Column() publicada: number
    @Column() orden: number
    @Column() login: number
}
