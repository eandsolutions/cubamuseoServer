import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn } from 'typeorm';

@Entity('clasificacion_muestra')
export class ClasificationModelEntity {
    @Column()
    idCategoriaEstampa: number;
    @Column()
    idMuestra: number;
    @Column()
    orden: number;
    @PrimaryGeneratedColumn()
    idClasfMuestra: number;
}

