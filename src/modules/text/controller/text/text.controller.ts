import { Controller, Post, Body, Get, Param, Put, Delete } from '@nestjs/common';
import { Text } from 'src/modules/models/text.interface';
import { TextService } from '../../services/text/text.service';

@Controller('text')
export class TextController {
    constructor(private service: TextService) { }

    @Post()
    add(@Body() data: Text): any {
        return this.service.save(data)
    }

    @Get()
    get(): any {
        return this.service.finAll();
    }

    @Get(':id')
    getOne(@Param() params): any {
        return this.service.findOne(params.id);
    }

    @Get('getByName/:name')
    getByName(@Param() params): any {
        return this.service.findByName(params.name);
    }

    @Put(':id')
    update(@Body() data: Text, @Param() params): any {
        return this.service.update(params.id, data);
    }

    @Delete(':id')
    delete(@Param() params): any {
        return this.service.delete(params.id);
    }
}