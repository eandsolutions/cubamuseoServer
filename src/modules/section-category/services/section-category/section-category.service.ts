<<<<<<< HEAD
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { SectionCategoryEntity } from '../../entity/section-category-entity';


@Injectable()
export class SectionCategoryService {

    
    constructor(@InjectRepository(SectionCategoryEntity) private readonly element:Repository<SectionCategoryEntity>){

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

    async finAllBySectionId (id:number){
        return await this.element.find({idSeccion:id});
    }

    async finOneByCategoryId (id:number){
        return await this.element.findOne({idCategoria:id});
    }

    async findOne(id:number){
        return await this.element.findOne(id);
    }

    async delete(id:number){
        return await this.element.delete(id);
    }

=======
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { SectionCategoryEntity } from '../../entity/section-category-entity';


@Injectable()
export class SectionCategoryService {

    
    constructor(@InjectRepository(SectionCategoryEntity) private readonly element:Repository<SectionCategoryEntity>){

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

    async finAllBySectionId (id:number){
        return await this.element.find({
            where:{ idSeccion:id},
            order: {orden:1} 
           
        });
    }

    async finOneByCategoryId (id:number){
        return await this.element.findOne({idCategoria:id});
    }

    async findOne(id:number){
        return await this.element.findOne(id);
    }

    async delete(id:number){
        return await this.element.delete(id);
    }

>>>>>>> e18056a8f8fb9c224746cb2d0874c59b80e248f6
}