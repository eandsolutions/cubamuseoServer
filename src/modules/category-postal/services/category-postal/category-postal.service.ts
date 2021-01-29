
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { CategoryPostalEntity } from '../../entity/category-postal-entity';

@Injectable()
export class CategoryPostalService {
    constructor(@InjectRepository(CategoryPostalEntity) private readonly element: Repository<CategoryPostalEntity>) {

    }

    async save(data: any) {
        await this.element.insert(data);
        return data;
    }

    async update(id: number, data: any) {
        await this.element.update(id, data);
    }

    async finAll(lang:string) {
        if(lang == 'en'){
            return await this.element.query('SELECT categoriapostal_en.idCategoriaPostal, categoriapostal_en.nombre, categoriapostal.nombre AS nombre_es,' +
            ' categoriapostal_en.titulo,  categoriapostal.orden, categoriapostal.publicada, categoriapostal.cantImagenes, categoriapostal.imagenMenu' + 
            ' FROM categoriapostal_en INNER JOIN categoriapostal ON categoriapostal_en.idCategoriaPostal = categoriapostal.idCategoriaPostal' +
            ' WHERE categoriapostal.publicada = 1' +
            ' ORDER BY categoriapostal.orden');
        }else{
            return await this.element.find({
                where: {publicada: 1}, 
                order: { orden: 1 } 
            });
        }
     
    }

    async findOne(id: number) {
        return await this.element.findOne(id);
    }

    async delete(id: number) {
        return await this.element.delete(id);
    }
}
