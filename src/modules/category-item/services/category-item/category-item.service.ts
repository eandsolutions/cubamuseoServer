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

<<<<<<< HEAD
    async finAll() {
        return await this.element.find({ order: { orden: 1 } });
    }

    async finAllByCategory(id: number) {
        return await this.element.find(
            {
                where: { idCategoria: id },
                order: { orden: 1}
=======
    async finAll (){
        return await this.element.find({order:{orden:1}});
    }

    async finAllByCategory (id:number){
        return await this.element.find(
            {
                where:{ idCategoria:id},
                order: {orden:1} 
               
>>>>>>> e18056a8f8fb9c224746cb2d0874c59b80e248f6
            });
    }

    async findOne(id: number) {
        return await this.element.findOne(id);
    }

    async delete(id: number) {
        return await this.element.delete(id);
    }
}

