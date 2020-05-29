import { Controller, Post, Get, Put, Delete, Param, Body } from '@nestjs/common';

import { CategoryPostal } from 'src/modules/models/category-postal.interface';
import { CategoryPostalService } from '../../services/category-postal/category-postal.service';

@Controller('category-postal')
export class CategoryPostalController {

    constructor(private service:CategoryPostalService){}

    @Post()
    add(@Body() data:CategoryPostal):any{
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
    update(@Body() data:CategoryPostal, @Param() params):any{
        return this.service.update(params.id,data);
    }

    @Delete(':id')
    delete(@Param() params):any{
        return this.service.delete(params.id);
    }
    
}
