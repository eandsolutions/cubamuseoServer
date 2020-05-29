import { Controller, Post, Body, Get, Param, Put, Delete } from '@nestjs/common';
import { ShoppingCart } from 'src/modules/models/shopping-cart.interface';
import { ShoppingCartService } from '../../services/shopping-cart/shopping-cart.service';

@Controller('shopping-cart')
export class ShoppingCartController {

    constructor(private service: ShoppingCartService) { }

    @Post()
    add(@Body() data: ShoppingCart): any {
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
    update(@Body() data: ShoppingCart, @Param() params): any {
        return this.service.update(params.id, data);
    }

    @Delete(':id')
    delete(@Param() params): any {
        return this.service.delete(params.id);
    }

}