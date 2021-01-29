import { Controller, Post, Body, Get, Param, Put, Delete } from '@nestjs/common';

import { Stamp } from 'src/modules/models/stamp.interface';
import { StampService } from '../../services/stamp/stamp.service';

@Controller('stamp')
export class StampController {

    constructor(private service: StampService) { }

    @Post()
    add(@Body() data: Stamp): any {
        return this.service.save(data)
    }

    @Get()
    get(): any {
        return this.service.finAll();
    }

    @Get(':id/:lang')
    getOne(@Param() params): any {
        return this.service.findOne(params.id,params.lang);
    }

    @Put(':id')
    update(@Body() data: Stamp, @Param() params): any {
        return this.service.update(params.id, data);
    }

    @Delete(':id')
    delete(@Param() params): any {
        return this.service.delete(params.id);
    }

}