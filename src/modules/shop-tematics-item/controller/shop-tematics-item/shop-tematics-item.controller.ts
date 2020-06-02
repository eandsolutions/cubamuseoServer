import { Controller, Post, Body, Get, Param, Put, Delete } from '@nestjs/common';
import { ShopTematicsItem } from 'src/modules/models/shop-tematics-item.interface';
import { ShopTematicsItemService } from '../../services/shop-tematics-item/shop-tematics-item.service';

@Controller('shop-tematics-item')
export class ShopTematicsItemController {
    constructor(private service: ShopTematicsItemService) { }

    @Post()
    add(@Body() data: ShopTematicsItem): any {
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

    @Get('byTematic/:id')
    getByTematic(@Param() params): any {
        return this.service.finAllByTematic(params.id);
    }


    @Put(':id')
    update(@Body() data: ShopTematicsItem, @Param() params): any {
        return this.service.update(params.id, data);
    }

    @Delete(':id')
    delete(@Param() params): any {
        return this.service.delete(params.id);
    }
}