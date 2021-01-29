import { Controller, Post, Body, Get, Param, Put, Delete } from '@nestjs/common';

import { ModelItem } from 'src/modules/models/model-item.interface';
import { ModelItemService } from '../../services/model-item/model-item.service';

@Controller('model-item')
export class ModelItemController {

    constructor(private service: ModelItemService) { }

    @Post()
    add(@Body() data: ModelItem): any {
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

    @Get('byModelId/:id/:lang')
    getByModel(@Param() params): any {
        return this.service.finAllByModel(params.id, params.lang);
    }

    @Put(':id')
    update(@Body() data: ModelItem, @Param() params): any {
        return this.service.update(params.id, data);
    }

    @Delete(':id')
    delete(@Param() params): any {
        return this.service.delete(params.id);
    }

}

