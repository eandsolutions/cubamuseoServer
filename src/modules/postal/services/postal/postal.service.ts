import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { PostalEntity } from '../../entity/postal-entity';

@Injectable()
export class PostalService {
    constructor(@InjectRepository(PostalEntity) private readonly element: Repository<PostalEntity>) {

    }

    async save(data: any) {
        await this.element.insert(data);
        return data;
    }

    async update(id: number, data: any) {
        await this.element.update(id, data);
    }

    async finAll() {
        return await this.element.find({ where: { publicada: 1 } });
    }

    async finAllByCategory(id: number) {
        return await this.element.find({
            where: [
                { idCategoria: id },
                { publicada: 1 }
            ]
        });
    }

    async findOne(id: number) {
        return await this.element.findOne(id);
    }

    async delete(id: number) {
        return await this.element.delete(id);
    }

}