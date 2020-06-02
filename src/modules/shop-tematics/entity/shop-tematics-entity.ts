import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tienda_tematica')

export class ShopTematicsEntity {
    @PrimaryGeneratedColumn() idTematica: number
    @Column() nombre: string
    @Column() titulo: string
    @Column() publicada: number
    @Column() orden: number
    @Column() imagenMenu: string
}
