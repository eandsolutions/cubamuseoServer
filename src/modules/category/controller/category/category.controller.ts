import { Controller, Post, Body, Get, Param, Put, Delete } from '@nestjs/common';
import { Category } from 'src/modules/models/category.interface';
import { CategoryService } from '../../services/category/category.service';


@Controller('category')
export class CategoryController {
    constructor(private service:CategoryService){}

    @Post()
    add(@Body() data:Category):any{
        return this.service.save(data)
    }

    @Get(':lang')
    get(@Param() params):any{
        return this.service.finAll(params.lang);
    }

    @Get(':lang/:id')
    getOne(@Param() params):any{
        return this.service.findOne(params.lang,params.id);
    }

    @Put(':id')
    update(@Body() data:Category, @Param() params):any{
        return this.service.update(params.id,data);
    }

    @Delete(':id')
    delete(@Param() params):any{
        return this.service.delete(params.id);
    }
}

