import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('texto')

export class TextEnEntity {
    @PrimaryGeneratedColumn() idTexto: number
    @Column() nombre: string
    @Column() descripcion: string
}
