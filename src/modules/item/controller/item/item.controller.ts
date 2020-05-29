import { Controller, Post, Body, Get, Param, Put, Delete } from '@nestjs/common';
import { Item } from 'src/modules/models/item.interface';
import { ItemService } from '../../services/item/item.service';

@Controller('item')
export class ItemController {

    constructor(private service:ItemService){}

    @Post()
    add(@Body() data:Item):any{
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
    update(@Body() data:Item, @Param() params):any{
        return this.service.update(params.id,data);
    }

    @Delete(':id')
    delete(@Param() params):any{
        return this.service.delete(params.id);
    }
}
