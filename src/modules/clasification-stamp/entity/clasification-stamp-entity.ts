import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn } from 'typeorm';

@Entity('clasificacion_estampa')

export class ClasificationStampEntity {
    
    @PrimaryColumn()
    idCategoriaEstampa: number;
    @PrimaryColumn()
    idEstampa: number;
    @Column()
    orden: number;
}

