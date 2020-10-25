import { Controller, Post, Body, Get, Param, Put, Delete } from '@nestjs/common';

import { RelatedSites } from 'src/modules/models/related-sites.interface';
import { RelatedSitesService } from '../services/related-sites.service';

@Controller('related-sites')
export class RelatedSitesController {

    constructor(private service:RelatedSitesService){}

    @Post()
    add(@Body() data:RelatedSites):any{
        return this.service.save(data)
    }

    @Get(':lang')
    get(@Param() params):any{
        return this.service.finAll(params.lang);
    }

    @Get(':id')
    getOne(@Param() params):any{
        return this.service.findOne(params.id);
    }

    @Put(':id')
    update(@Body() data:RelatedSites, @Param() params):any{
        return this.service.update(params.id,data);
    }

    @Delete(':id')
    delete(@Param() params):any{
        return this.service.delete(params.id);
    }

}