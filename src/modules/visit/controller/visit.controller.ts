import { Controller, Post, Body, Get, Param, Put, Delete, Patch, Req } from '@nestjs/common';
import { Visit } from 'src/modules/models/visit.interface';
import { VisitService } from '../service/visit.service';


@Controller('visit')
export class VisitController {
    constructor(private service: VisitService) { }

    @Post()
    add(@Body() data): any {
        return this.service.save(data)
    }

    @Put(':id')
    update(@Body() data, @Param() params): Promise<any> {
        return this.service.update(params.id, data);
    }

    @Get('')
    getOne(): any {
        return this.service.findLast();
    }

}