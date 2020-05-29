import { Controller, Post, Body, Get, Param, Put, Delete } from '@nestjs/common';
import { CategoryStamp } from 'src/modules/models/category-stamp.interface';
import { CategoryStampService } from '../../services/category-stamp/category-stamp.service';

@Controller('category-stamp')
export class CategoryStampController {

    constructor(private service:CategoryStampService){}

    @Post()
    add(@Body() data:CategoryStamp):any{
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
    update(@Body() data:CategoryStamp, @Param() params):any{
        return this.service.update(params.id,data);
    }

    @Delete(':id')
    delete(@Param() params):any{
        return this.service.delete(params.id);
    }

}
