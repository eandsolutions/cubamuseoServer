import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('seccion-en')

export class SectionEnEntity {

    @PrimaryGeneratedColumn()
    idSeccion: number
    @Column() nombre: string
    @Column() titulo: string
    @Column() descripcion: string
}
