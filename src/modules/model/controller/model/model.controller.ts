import { Controller, Post, Body, Get, Param, Put, Delete } from '@nestjs/common';
import { Model } from 'src/modules/models/model.interface';
import { ModelService } from '../../services/model/model.service';

@Controller('model')
export class ModelController {

    constructor(private service:ModelService){}

    @Post()
    add(@Body() data:Model):any{
        return this.service.save(data)
    }

    @Get(':lang')
    get(@Param() params):any{
        return this.service.finAll(params.lang);
    }

    @Get(':id/:lang')
    getOne(@Param() params):any{
        return this.service.findOne(params.id, params.lang);
    }

    @Put(':id')
    update(@Body() data:Model, @Param() params):any{
        return this.service.update(params.id,data);
    }

    @Delete(':id')
    delete(@Param() params):any{
        return this.service.delete(params.id);
    }

}
