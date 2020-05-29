import { Controller, Post, Body, Get, Param, Put, Delete } from '@nestjs/common';
import { ClasificationModel } from 'src/modules/models/clasification-model.interface';
import { ClasificationModelService } from '../../services/clasification-model/clasification-model.service';

@Controller('clasification-model')
export class ClasificationModelController {

    constructor(private service:ClasificationModelService){}

    @Post()
    add(@Body() data:ClasificationModel):any{
        return this.service.save(data)
    }

    @Get()
    get():any{
        return this.service.finAll();
    }

    @Get(':id')
    getOne(@Param() params):any{
        return this.service.findOne(params.id);
    }

    @Put(':id')
    update(@Body() data:ClasificationModel, @Param() params):any{
        return this.service.update(params.id,data);
    }

    @Delete(':id')
    delete(@Param() params):any{
        return this.service.delete(params.id);
    }

}
