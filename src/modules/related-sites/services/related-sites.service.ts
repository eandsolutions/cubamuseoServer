import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { RelatedSitesEntity } from '../entity/related-sites-entity';


@Injectable()
export class RelatedSitesService {

    constructor(@InjectRepository(RelatedSitesEntity) private readonly element: Repository<RelatedSitesEntity>) {

    }

    async save(data: any) {
        await this.element.insert(data);
        return data;
    }

    async update(id: number, data: any) {
        await this.element.update(id, data);
    }

    async finAll(lang: string) {
        if (lang == 'en') {
            return await this.element.query('SELECT related_sites_en.id, related_sites_en.nombre, related_sites_en.descripcion,' +
                ' related_sites.imagen, related_sites.orden, related_sites.publicada ' +
                'FROM related_sites_en' +
                ' INNER JOIN related_sites on related_sites_en.id = related_sites.id' +
                ' WHERE related_sites.publicada = 1' +
                ' ORDER BY related_sites.orden');
        }
        else {
            return await this.element.find({
                where: { publicada: 1 },
                order: { orden: 1 }
            });
        }
    }

    async findOne(id: number) {
        return await this.element.findOne(id);
    }

    async delete(id: number) {
        return await this.element.delete(id);
    }

}
