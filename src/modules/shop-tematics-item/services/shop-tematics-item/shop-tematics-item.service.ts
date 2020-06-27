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
        return await this.element.find(
            {
                where:{ idTematica:id},
                order: {orden:1} 
               
            });
    }

    async findOne(id:number){
        return await this.element.findOne(id);
    }

    async delete(id:number){
        return await this.element.delete(id);
    }

}