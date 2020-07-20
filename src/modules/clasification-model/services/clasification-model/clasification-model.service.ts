import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { ClasificationModelEntity } from '../../entity/clasification-model-entity';


@Injectable()
export class ClasificationModelService {

    constructor(@InjectRepository(ClasificationModelEntity) private readonly element:Repository<ClasificationModelEntity>){

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

    async finAllByCategory (id){
        return await this.element.query('SELECT muestra.idMuestra, muestra.nombre, muestra.imagenGaleria, muestra.orden, muestra.carpeta'+
        ' FROM clasificacion_muestra INNER JOIN muestra on clasificacion_muestra.idMuestra = muestra.idMuestra WHERE clasificacion_muestra.idCategoriaEstampa = '+id+
        ' AND muestra.publicada = 1 ORDER BY muestra.orden')
    }

    async findOne(id:number){
        return await this.element.findOne(id);
    }

    async delete(id:number){
        return await this.element.delete(id);
    }

}
