import { ClasificationStampEntity } from './../../entity/clasification-stamp-entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'


@Injectable()
export class ClasificationStampService {

    constructor(@InjectRepository(ClasificationStampEntity) private readonly element:Repository<ClasificationStampEntity>){

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

    async finAllByCategory(id:number){
        return await this.element.find(
            {
                where:{ idCategoriaEstampa:id},
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
