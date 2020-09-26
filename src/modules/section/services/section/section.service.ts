import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { SectionEntity } from '../../entity/section-entity';
import { SectionEnEntity } from './../../entity/section-en-entity';

@Injectable()
export class SectionService {

    constructor(@InjectRepository(SectionEntity) private readonly element: Repository<SectionEntity>, @InjectRepository(SectionEnEntity) private readonly element_en: Repository<SectionEnEntity>) {

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
            return await this.element_en.query('SELECT seccion_en.idSeccion, seccion.nombre AS nombre_es,seccion_en.nombre, seccion_en.titulo, seccion_en.descripcion, seccion.cantPaginasFila,' +
                ' seccion.imagen,seccion.imagenMenu, seccion.login, seccion.orden, seccion.publicada ' +
                'FROM seccion_en' +
                ' INNER JOIN seccion on seccion_en.idSeccion = seccion.idSeccion' +
                ' WHERE seccion.publicada = 1' +
                ' ORDER BY seccion.orden');
        }
        else {
            return await this.element.find({ where: { publicada: 1 } });
        }
    }

    async findOne(lang: string,id: number) {
        if (lang == 'en') {
            return await this.element_en.query('SELECT seccion_en.idSeccion,seccion.nombre AS nombre_es, seccion_en.nombre, seccion_en.titulo, seccion_en.descripcion, seccion.cantPaginasFila,' +
                ' seccion.imagen,seccion.imagenMenu, seccion.login, seccion.orden, seccion.publicada ' +
                'FROM seccion_en' +
                ' INNER JOIN seccion on seccion_en.idSeccion = seccion.idSeccion' +
                ' WHERE seccion.publicada = 1 AND seccion_en.idSeccion= '+ id +
                ' ORDER BY seccion.orden');
        }
        else {
            return await this.element.findOne(id);
        }
    }

    async delete(id: number) {
        return await this.element.delete(id);
    }

}
