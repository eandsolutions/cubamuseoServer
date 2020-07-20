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

    async finAll (){
        return await this.element.find({
            where: {publicada: 1},
            order:{orden:1}
        });
    }

    async findOne(id:number){
        return await this.element.findOne(id);
    }

    async delete(id:number){
        return await this.element.delete(id);
    }
}
