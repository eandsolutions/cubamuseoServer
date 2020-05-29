import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('estampa')

export class StampEntity {

    @PrimaryGeneratedColumn() idEstampa: number
    @Column() imagenGaleria: string
    @Column() texto: string
    @Column() titulo: string
    @Column() nombre: string
    @Column() publicada: number
    @Column() orden: number
    @Column() carpeta: string

}