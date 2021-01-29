import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { ModelEntity } from '../../entity/model-entity';
import { ModelEnEntity } from '../../entity/model-entity-en';

@Injectable()
export class ModelService {

    constructor(@InjectRepository(ModelEntity) private readonly element:Repository<ModelEntity>,
    @InjectRepository(ModelEnEntity) private readonly element_en:Repository<ModelEnEntity>){

    }

    async save(data:any){
        await this.element.insert(data);
        return data;
    }

    async update(id:number, data:any){
        await this.element.update(id,data);
    }

    async finAll (lang:string){
        if(lang=='en'){
            return await this.element_en.query('SELECT muestra_en.idMuestra, muestra.nombre AS nombre_es, muestra_en.nombre, muestra_en.descripcion, muestra_en.titulo, muestra.imagenGaleria,' + 
            ' muestra.cantImagenesFila, muestra.imagen, muestra.publicada,muestra.carpeta' + 
            ' FROM muestra_en' +
            ' INNER JOIN muestra ON muestra.idMuestra = muestra_en.idMuestra' +
            ' WHERE 1 AND muestra.publicada = 1' +
            ' ORDER BY muestra.orden');
        }else{
            return await this.element.find({
                where: { publicada: 1 },
                order: { orden: 1 }
            });
        }
       
    }

    async findOne(id:number, lang:string){
        if(lang=='en'){
            return await this.element.query('SELECT muestra_en.idMuestra, muestra.nombre AS nombre_es, muestra_en.nombre, muestra_en.descripcion, muestra_en.titulo, muestra.imagenGaleria,' + 
            ' muestra.cantImagenesFila, muestra.imagen, muestra.publicada,muestra.carpeta' + 
            ' FROM muestra_en' +
            ' INNER JOIN muestra ON muestra.idMuestra = muestra_en.idMuestra' +
            ' WHERE muestra.publicada = 1 AND muestra_en.idMuestra = ' +id);
        }else{
            return await this.element.findOne(id);
        }        
    }

    async delete(id:number){
        return await this.element.delete(id);
    }
}

