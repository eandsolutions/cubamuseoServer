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
        if (lang=='en') {
            return await this.element_en.query('SELECT categoria_en.idCategoria, categoria_en.nombre, categoria_en.titulo, categoria_en.descripcion, categoria.cantImagenes, categoria.cantImagenesFila, '+
            'categoria.carpeta, categoria.imagen, categoria.imagenGaleria, categoria.login, categoria.publicada'+ 
             'FROM categoria_en'+ 
               'INNER JOIN categoria on categoria_en.idCategoria = categoria.idCategoria'+ 
                ' WHERE categoria.publicada = 1');
        }
        else {
            return await this.element.find({ where: { publicada: 1 } });
        }

    }

    async findOne(id: number) {
        return await this.element.findOne(id);
    }

    async delete(id: number) {
        return await this.element.delete(id);
    }

}