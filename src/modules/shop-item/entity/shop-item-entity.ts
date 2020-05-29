import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tienda_item')
export class ShopItemEntity {
    @PrimaryGeneratedColumn() idItem: number
    @Column() nombre: string
    @Column() titulo: string
    @Column() imagen: string
    @Column() descripcion: string
    @Column() precio: number
    @Column() estado: number
    @Column() precio_envio: number
    @Column() precio_envio_fuera: number
    @Column() imagen_ampliada: string
}