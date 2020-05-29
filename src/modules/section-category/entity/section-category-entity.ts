import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn } from 'typeorm';

@Entity('seccion_categoria')

export class SectionCategoryEntity {
    @PrimaryColumn()
    idSeccion: number
    @PrimaryColumn()
    idCategoria: number
    @Column()
    orden: number
    @Column()
    sigloXIX: number
}
