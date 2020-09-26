import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { TextEntity } from '../../entity/text-entity';
import { TextEnEntity } from './../../entity/text-en-entity';

@Injectable()
export class TextService {

    constructor(@InjectRepository(TextEntity) private readonly element: Repository<TextEntity>, @InjectRepository(TextEnEntity) private readonly element_en: Repository<TextEnEntity>) {

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

    async findOne(lang:string, id: number) {
        if(lang == 'en'){
            return await this.element.query('SELECT texto_en.idTexto, texto_en.nombre, texto_en.descripcion, texto.imagen'+
            ' FROM texto_en INNER JOIN texto ON texto_en.idTexto = texto.idTexto' + 
            ' WHERE texto_en.idTexto = ' + id); 
        }
        else{
            return await this.element.findOne(id);
        }
        
    }

    async findByName(name: string) {
        return await this.element.findOne({ nombre: name });
    }

    async delete(id: number) {
        return await this.element.delete(id);
    }

}