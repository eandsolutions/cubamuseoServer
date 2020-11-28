import { Controller, Post, Body, Get, Param, Put, Delete } from '@nestjs/common';

import { News } from 'src/modules/models/news.interface';
import { NewsService } from '../../services/news/news.service';

@Controller('news')
export class NewsController {

    constructor(private service:NewsService){}

    @Post()
    add(@Body() data:News):any{
        return this.service.save(data)
    }

    @Get()
    get():any{
        return this.service.finAll();
    }

    @Get('last')
    getLast():any{
        return this.service.findLast();
    }

    // @Get(':id')
    // getOne(@Param() params):any{
    //     return this.service.findOne(params.id);
    // }

    @Put(':id')
    update(@Body() data:News, @Param() params):any{
        return this.service.update(params.id,data);
    }

    @Delete(':id')
    delete(@Param() params):any{
        return this.service.delete(params.id);
    }

}