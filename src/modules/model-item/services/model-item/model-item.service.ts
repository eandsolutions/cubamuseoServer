import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { ModelItemEntity } from '../../entity/model-item-entity';

@Injectable()
export class ModelItemService {

    constructor(@InjectRepository(ModelItemEntity) private readonly element: Repository<ModelItemEntity>) {

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

    async finAllByModel(id, lang) {
        if(lang == 'en'){
            return await this.element.query('SELECT item_en.idItem, item.nombre,item_en.titulo, item.imagen,' +
            ' item_en.descripcion, item_en.dimension, item.imageSize, item_en.emision, item_en.material, item_en.color, item_en.impresion,' +
            ' item.precio, item.publicado, item.login, item.procedencia' + 
            ' FROM muestra_item INNER JOIN item on muestra_item.idItem = item.idItem' +
            ' INNER JOIN item_en on item_en.idItem = item.idItem' +
            ' WHERE muestra_item.idMuestra = ' + id + ' AND item.publicado = 1 ORDER BY item.idItem')
        }else{
            return await this.element.query('SELECT item.idItem, item.nombre,item.titulo, item.titulo, item.imagen,' +
            ' item.descripcion, item.dimension, item.imageSize, item.emision, item.material, item.color, item.impresion,' +
            ' item.precio, item.publicado, item.login, item.procedencia FROM muestra_item INNER JOIN item on muestra_item.idItem = item.idItem ' +
            'WHERE muestra_item.idMuestra = ' + id + ' AND item.publicado = 1 ORDER BY item.idItem')
        }
        
    }

    async findOne(id: number) {
        return await this.element.findOne(id);
    }

    async delete(id: number) {
        return await this.element.delete(id);
    }
}