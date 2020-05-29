import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('texto')

export class TextEntity {
    @PrimaryGeneratedColumn() idTexto: number
    @Column() nombre: string
    @Column() descripcion: string
    @Column() imagen: string
}
