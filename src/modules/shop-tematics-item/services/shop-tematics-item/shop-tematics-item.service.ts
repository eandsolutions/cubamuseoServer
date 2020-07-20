import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { ShopTematicsItemEntity } from '../../entity/shop-tematics-item-entity';


@Injectable()
export class ShopTematicsItemService {

    constructor(@InjectRepository(ShopTematicsItemEntity) private readonly element:Repository<ShopTematicsItemEntity>){

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

    async finAllByTematic (id){
        return await this.element.query('SELECT tienda_item.idItem, tienda_item.titulo, tienda_item.nombre,'+
        ' tienda_item.imagen FROM tienda_item INNER JOIN tienda_tematica_item on tienda_item.idItem ='+
        ' tienda_tematica_item.idItem WHERE tienda_tematica_item.idTematica ='+id+
        ' ORDER BY tienda_tematica_item.orden')
    }

    async findOne(id:number){
        return await this.element.findOne(id);
    }

    async delete(id:number){
        return await this.element.delete(id);
    }

}