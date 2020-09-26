import { Controller, Post, Body, Get, Param, Put, Delete } from '@nestjs/common';
import { Section } from 'src/modules/models/section.interface';
import { SectionService } from '../../services/section/section.service';

@Controller('section')
export class SectionController {

    constructor(private service:SectionService){}

    @Post()
    add(@Body() data:Section):any{
        return this.service.save(data)
    }

    @Get(':lang')
    get(@Param() params):any{
        return this.service.finAll(params.lang);
    }

    @Get(':lang/:id')
    getOne(@Param() params):any{
        
        return this.service.findOne(params.lang, params.id);
    }

    @Put(':id')
    update(@Body() data:Section, @Param() params):any{
        return this.service.update(params.id,data);
    }

    @Delete(':id')
    delete(@Param() params):any{
        return this.service.delete(params.id);
    }

}