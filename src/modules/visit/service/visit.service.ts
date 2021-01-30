import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { VisitEntity } from '../entity/visit-entity';


@Injectable()
export class VisitService {

    constructor(
        @InjectRepository(VisitEntity) private readonly element: Repository<VisitEntity>) {

    }

    async save(data: any) {
        return await this.element.insert(data);
         
    }

    async update(id: number, data: any) {
        return await this.element.update(id, data);
    }

    async findLast() {
        
            return await this.element.query('SELECT visitas.id, visitas.cantidad, visitas.fecha'+
            ' FROM visitas' + 
            ' ORDER BY visitas.id DESC' +
            ' LIMIT 1' ); 
  
        
    }



}