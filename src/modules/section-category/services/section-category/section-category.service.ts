import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { SectionCategoryEntity } from '../../entity/section-category-entity';


@Injectable()
export class SectionCategoryService {


    constructor(@InjectRepository(SectionCategoryEntity) private readonly element: Repository<SectionCategoryEntity>) {

    }

    async save(data: any) {
        await this.element.insert(data);
        return data;
    }

    async update(id: number, data: any) {
        await this.element.update(id, data);
    }

    async finAll() {
        return await this.element.find({ order: { orden: 1 } });
    }

    async finAllBySectionId(lang:string, id: number) {
        if (lang=='en') {
            return await this.element.query('SELECT categoria_en.idCategoria, categoria_en.nombre, categoria_en.titulo, categoria.imagenGaleria, categoria.carpeta,' + 
            ' seccion_categoria.sigloXIX' + 
            ' FROM seccion_categoria' + 
            ' INNER JOIN categoria on seccion_categoria.idCategoria = categoria.idCategoria INNER JOIN categoria_en ON categoria.idCategoria = categoria_en.idCategoria' +
            ' WHERE seccion_categoria.idSeccion = '+ id + ' AND categoria.publicada = 1 ORDER BY seccion_categoria.orden');
        }else{
            return await this.element.query('SELECT categoria.idCategoria, categoria.nombre, categoria.imagenGaleria, categoria.carpeta, '+
            'seccion_categoria.sigloXIX FROM seccion_categoria INNER JOIN categoria on seccion_categoria.idCategoria = categoria.idCategoria'+
            ' WHERE seccion_categoria.idSeccion = ' + id + ' AND categoria.publicada = 1 ORDER BY seccion_categoria.orden')
        }
                
    }

    async finOneByCategoryId(lang:string, id: number) {
        if (lang=='en') {
            return await this.element.query('SELECT seccion_en.idSeccion, seccion_en.nombre, seccion_en.titulo, seccion.imagenMenu, seccion.imagen, seccion.nombre as nombre_es' + 
            ' FROM seccion_categoria' + 
            ' INNER JOIN seccion on seccion_categoria.idSeccion = seccion.idSeccion INNER JOIN seccion_en ON seccion.idSeccion = seccion_en.idSeccion' +
            ' WHERE seccion_categoria.idCategoria = '+ id + ' AND seccion.publicada = 1 ORDER BY seccion_categoria.orden');
        }else{
            return await this.element.query('SELECT seccion.idSeccion, seccion.nombre, seccion.titulo, seccion.imagenMenu, seccion.imagen' + 
            ' FROM seccion_categoria' + 
            ' INNER JOIN seccion on seccion_categoria.idSeccion = seccion.idSeccion' +
            ' WHERE seccion_categoria.idCategoria = '+ id + ' AND seccion.publicada = 1 ORDER BY seccion_categoria.orden')
        }
    }

    async findOne(id: number) {
        return await this.element.findOne(id);
    }

    async delete(id: number) {
        return await this.element.delete(id);
    }

}