import { Controller, Post, Body, Get, Param, Put, Delete } from '@nestjs/common';
import { ShopTematics } from 'src/modules/models/shop-tematics.interface';
import { ShopTematicsService } from '../../services/shop-tematics/shop-tematics.service';

@Controller('shop-tematics')
export class ShopTematicsController {

    constructor(private service: ShopTematicsService) { }

    @Post()
    add(@Body() data: ShopTematics): any {
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
    update(@Body() data: ShopTematics, @Param() params): any {
        return this.service.update(params.id, data);
    }

    @Delete(':id')
    delete(@Param() params): any {
        return this.service.delete(params.id);
    }

}