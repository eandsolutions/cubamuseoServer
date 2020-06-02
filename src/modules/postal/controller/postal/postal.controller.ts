import { Controller, Post, Body, Get, Param, Put, Delete } from '@nestjs/common';

import { Postal } from 'src/modules/models/postal.interface';
import { PostalService } from '../../services/postal/postal.service';

@Controller('postal')
export class PostalController {

    constructor(private service:PostalService){}

    @Post()
    add(@Body() data:Postal):any{
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

    @Get('byCategory/:id')
    getByCategory(@Param() params):any{
        return this.service.finAllByCategory(params.id);
    }

    @Put(':id')
    update(@Body() data:Postal, @Param() params):any{
        return this.service.update(params.id,data);
    }

    @Delete(':id')
    delete(@Param() params):any{
        return this.service.delete(params.id);
    }

}