import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { TextEntity } from '../../entity/text-entity';


@Injectable()
export class TextService {

    constructor(@InjectRepository(TextEntity) private readonly element: Repository<TextEntity>) {

    }

    async save(data: any) {
        await this.element.insert(data);
        return data;
    }

    async update(id: number, data: any) {
        await this.element.update(id, data);
    }

    async finAll() {
        return await this.element.find();
    }

    async findOne(id: number) {
        return await this.element.findOne(id);
    }

    async findByName(name: string) {
        return await this.element.findOne({ nombre: name });
    }

    async delete(id: number) {
        return await this.element.delete(id);
    }

}