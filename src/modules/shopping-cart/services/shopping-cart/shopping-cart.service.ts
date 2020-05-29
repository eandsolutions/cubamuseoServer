import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { ShoppingCartEntity } from '../../entity/shopping-cart-entity';


@Injectable()
export class ShoppingCartService {
    
    constructor(@InjectRepository(ShoppingCartEntity) private readonly element:Repository<ShoppingCartEntity>){

    }

    async save(data:any){
        await this.element.insert(data);
        return data;
    }

    async update(id:number, data:any){
        await this.element.update(id,data);
    }

    async finAll (){
        return await this.element.find();
    }

    async findOne(id:number){
        return await this.element.findOne(id);
    }

    async delete(id:number){
        return await this.element.delete(id);
    }

}