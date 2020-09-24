import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('categoria-en')
export class CategoryEnEntity {

    @PrimaryGeneratedColumn()
    idCategoria: number;
    @Column()
    nombre: string;
    @Column()
    titulo: string;
    @Column()
    descripcion: string;
    
}
