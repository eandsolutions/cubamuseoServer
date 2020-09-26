import { Controller, Post, Body, Get, Param, Put, Delete } from '@nestjs/common';

import { CategoryItem } from 'src/modules/models/category-item.interface';
import { CategoryItemService } from '../../services/category-item/category-item.service';



@Controller('category-item')
export class CategoryItemController {

    constructor(private service:CategoryItemService){}

    @Post()
    add(@Body() data:CategoryItem):any{
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

    @Get('byCategory/:lang/:id')
    getOneByName(@Param() params):any{
        return this.service.finAllByCategory(params.lang,params.id);
    }

    @Put(':id')
    update(@Body() data:CategoryItem, @Param() params):any{
        return this.service.update(params.id,data);
    }

    @Delete(':id')
    delete(@Param() params):any{
        return this.service.delete(params.id);
    }

}
