import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { CategoryStampEntity } from '../../entity/category-stamp-entity';

@Injectable()
export class CategoryStampService {

    constructor(@InjectRepository(CategoryStampEntity) private readonly element:Repository<CategoryStampEntity>){

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
            return await this.element.query('SELECT categoriaestampa_en.idCategoriaEstampa, categoriaestampa.nombre AS nombre_es, categoriaestampa_en.nombre, categoriaestampa.imagenMenu,' + 
            ' categoriaestampa.publicada' + 
            ' FROM categoriaestampa_en' +
            ' INNER JOIN categoriaestampa ON categoriaestampa.idCategoriaEstampa = categoriaestampa_en.idCategoriaEstampa' +
            ' WHERE 1 AND categoriaestampa.publicada = 1' +
            ' ORDER BY categoriaestampa.orden');
        }else{
            return await this.element.find({
                where: {publicada: 1},
                order:{orden:1}
            });
        }
    }

    async findOne(id:number){
        return await this.element.findOne(id);
    }

    async delete(id:number){
        return await this.element.delete(id);
    }
}
