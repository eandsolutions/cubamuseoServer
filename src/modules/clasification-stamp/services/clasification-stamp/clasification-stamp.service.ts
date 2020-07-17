import { ClasificationStampEntity } from './../../entity/clasification-stamp-entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'


@Injectable()
export class ClasificationStampService {

    constructor(@InjectRepository(ClasificationStampEntity) private readonly element:Repository<ClasificationStampEntity>){

    }

    async save(data:any){
        await this.element.insert(data);
        return data;
    }

    async update(id:number, data:any){
        await this.element.update(id,data);
    }

    async finAll (){
        return await this.element.find({order:{orden:1}});
    }

    async finAllByCategory(id:number){
        return await this.element.query('SELECT estampa.idEstampa, estampa.nombre, estampa.imagenGaleria,'+
        ' estampa.orden, estampa.carpeta FROM clasificacion_estampa INNER JOIN estampa on clasificacion_estampa.idEstampa'+
        ' = estampa.idEstampa WHERE clasificacion_estampa.idCategoriaEstampa = '+id+' AND estampa.publicada = 1 ORDER BY estampa.orden')
    }

    async findOne(id:number){
        return await this.element.findOne(id);
    }

    async delete(id:number){
        return await this.element.delete(id);
    }

}
