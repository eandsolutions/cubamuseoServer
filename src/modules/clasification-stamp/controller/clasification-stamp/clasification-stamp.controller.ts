import { Controller, Post, Body, Get, Param, Put, Delete } from '@nestjs/common';
import { ClasificationStamp } from 'src/modules/models/clasification-stamp.interface';
import { ClasificationStampService } from '../../services/clasification-stamp/clasification-stamp.service';

@Controller('clasification-stamp')
export class ClasificationStampController {

    constructor(private service: ClasificationStampService) { }

    @Post()
    add(@Body() data: ClasificationStamp): any {
        return this.service.save(data)
    }

    @Get()
    get(): any {
        return this.service.finAll();
    }

    @Get('byCategory/:id/:lang')
    getByCategory(@Param() params): any {
        return this.service.finAllByCategory(params.id, params.lang);
    }

    @Get(':id')
    getOne(@Param() params): any {
        return this.service.findOne(params.id);
    }

    @Put(':id')
    update(@Body() data: ClasificationStamp, @Param() params): any {
        return this.service.update(params.id, data);
    }

    @Delete(':id')
    delete(@Param() params): any {
        return this.service.delete(params.id);
    }
}
