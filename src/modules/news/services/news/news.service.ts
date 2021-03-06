import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { NewsEntity } from '../../entity/news-entity';


@Injectable()
export class NewsService {

    constructor(@InjectRepository(NewsEntity) private readonly element:Repository<NewsEntity>){

    }

    async save(data:any){
        await this.element.insert(data);
        return data;
    }

    async update(id:number, data:any){
        await this.element.update(id,data);
    }

    async finAll (){
        return await this.element.find(
            {where: {publicada: 1},
             order: {orden: 1}
        });
    }

    async findOne(id:number){
        return await this.element.findOne(id);
    }

    async findLast(){
        return await this.element.query('SELECT news.id, news.titulo, news.descripcion, news.imagen, news.publicada ' +  
        'FROM news WHERE news.publicada = 1 ' +
        'ORDER BY id DESC LIMIT 1')
    }


    async delete(id:number){
        return await this.element.delete(id);
    }

}
