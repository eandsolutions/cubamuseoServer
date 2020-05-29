import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('enviarpostales')
export class SendPostalEntity {
    @PrimaryGeneratedColumn()
    idEnvio: number
    @Column() postal: number
    @Column() categodia: number
    @Column() fecha: Date
    @Column() remitente: string
    @Column() destinatario: string
    @Column() asunto: string
    @Column() mensajes: string
}
