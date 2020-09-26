import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { CategoryEntity } from '../../entity/category-entity';
import { CategoryEnEntity } from './../../entity/category-en-entity';


@Injectable()
export class CategoryService {

    constructor(@InjectRepository(CategoryEntity) private readonly element: Repository<CategoryEntity>, @InjectRepository(CategoryEnEntity) private readonly element_en: Repository<CategoryEnEntity>) {

    }

    async save(data: any) {
        await this.element.insert(data);
        return data;
    }

    async update(id: number, data: any) {
        await this.element.update(id, data);
    }

    async finAll(lang: string) {
   
            return await this.element.find({ where: { publicada: 1 } });
    }

    async findOne(lang:string,id: number) {
        if(lang=='en'){
            return await this.element.query('SELECT categoria_en.idCategoria, categoria.nombre AS nombre_es, categoria_en.nombre, categoria_en.descripcion, categoria_en.titulo, categoria.imagenGaleria,' + 
            ' categoria.cantImagenesFila, categoria.imagen, categoria.publicada,categoria.carpeta' + 
            ' FROM categoria_en' +
            ' INNER JOIN categoria ON categoria.idCategoria = categoria_en.idCategoria' +
            ' WHERE categoria_en.idCategoria = ' + id + '   AND categoria.publicada = 1');
        }else{
            return await this.element.findOne(id);
        }


    }

    async delete(id: number) {
        return await this.element.delete(id);
    }

}