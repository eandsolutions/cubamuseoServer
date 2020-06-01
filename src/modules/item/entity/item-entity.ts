import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('item')

export class ItemEntity {

    @PrimaryGeneratedColumn()
    idItem: number;
    @Column()
    nombre: string;
    @Column()
    titulo: string;
    @Column()
    imagen: string;
    @Column()
    descripcion: string;
    @Column()
    dimension: string;
    @Column()
    imageSize: string;
    @Column()
    emision: string;
    @Column()
    material: string;
    @Column()
    color: string;
    @Column()
    impresion: string;
    @Column()
    precio: number;
    @Column()
    publicado: number;
    @Column()
    login: number;
    @Column()
    procedencia: string;

}
