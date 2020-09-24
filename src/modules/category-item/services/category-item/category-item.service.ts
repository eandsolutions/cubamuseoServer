import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { CategoryItemEntity } from '../../entity/category-item-entity';



@Injectable()
export class CategoryItemService {

    constructor(
        @InjectRepository(CategoryItemEntity)
        private readonly element: Repository<CategoryItemEntity>
    ) {

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

    async finAllByCategory(id: number) {
        return await this.element.query('SELECT item.idItem, item.nombre,item.titulo, item.titulo, item.imagen, item.descripcion, ' +
            'item.dimension, item.imageSize, item.emision, item.material, item.color, item.impresion, item.precio, item.publicado, item.login,' +
            ' item.procedencia FROM categoria_item INNER JOIN item on categoria_item.idItem = item.idItem WHERE categoria_item.idCategoria = ' + id + ' AND' +
            '  item.publicado = 1 ORDER BY item.nombre')
    }

    async findOne(id: number) {
        return await this.element.findOne(id);
    }

    async delete(id: number) {
        return await this.element.delete(id);
    }
}

