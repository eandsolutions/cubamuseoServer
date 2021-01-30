import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('visitas')

export class VisitEntity {
    @PrimaryGeneratedColumn() id: number
    @Column() cantidad: number
    @Column() fecha: Date
   
}
