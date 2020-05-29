import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('carrito')

export class ShoppingCartEntity {
    @PrimaryGeneratedColumn() idCarrito: number
    @Column() usuario: string
    @Column() paginas: number
    @Column() imagenes: number
    @Column() tienda: number
}
