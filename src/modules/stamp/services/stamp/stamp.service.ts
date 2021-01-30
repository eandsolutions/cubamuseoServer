import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { StampEntity } from '../../entity/stamp-entity';


@Injectable()
export class StampService {

    constructor(@InjectRepository(StampEntity) private readonly element: Repository<StampEntity>) {

    }

    async save(data: any) {
        await this.element.insert(data);
        return data;
    }

    async update(id: number, data: any) {
        await this.element.update(id, data);
    }

    async finAll() {
        return await this.element.find(
            {
                where: { publicada: 1 },
                order: { orden: 1 }
            });
    }

    async findOne(id: number, lang:string) {
        if(lang == 'en'){
            return await this.element.query('SELECT estampa_en.idEstampa, estampa_en.nombre, estampa.nombre AS nombre_es, estampa_en.titulo, estampa_en.texto, estampa.imagenGaleria, estampa.publicada, estampa.orden, estampa.carpeta'+
            ' FROM estampa_en' +
            ' INNER JOIN estampa ON estampa_en.idEstampa = estampa.idEstampa' + 
            ' WHERE estampa.publicada = 1 AND estampa_en.idEstampa = ' + id + 
            ' ORDER BY estampa.orden');
        }else{
            return await this.element.findOne(id);
        }
        
    }

    async delete(id: number) {
        return await this.element.delete(id);
    }
}