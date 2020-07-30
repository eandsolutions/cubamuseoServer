import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { ModelEntity } from '../../entity/model-entity';

@Injectable()
export class ModelService {

    constructor(@InjectRepository(ModelEntity) private readonly element:Repository<ModelEntity>){

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
            where: { publicada: 1 },
            order: { orden: 1 }
        });
    }

    async findOne(id:number){
        return await this.element.findOne(id);
    }

    async delete(id:number){
        return await this.element.delete(id);
    }
}

