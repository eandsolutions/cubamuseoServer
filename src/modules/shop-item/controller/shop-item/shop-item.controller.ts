import { Controller, Post, Body, Get, Param, Put, Delete } from '@nestjs/common';
import { ShopItem } from 'src/modules/models/shop-item.interface';
import { ShopItemService } from '../../services/shop-item/shop-item.service';

@Controller('shop-item')
export class ShopItemController {
    constructor(private service: ShopItemService) { }

    @Post()
    add(@Body() data: ShopItem): any {
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

    @Put(':id')
    update(@Body() data: ShopItem, @Param() params): any {
        return this.service.update(params.id, data);
    }

    @Delete(':id')
    delete(@Param() params): any {
        return this.service.delete(params.id);
    }
}