import { Controller, Post, Body, Get, Param, Put, Delete } from '@nestjs/common';
import { SendPostals } from 'src/modules/models/send-postals.interface';
import { SendPostalService } from '../../services/send-postal/send-postal.service';

@Controller('send-postals')
export class SendPostalController {

    constructor(private service: SendPostalService) { }

    @Post()
    add(@Body() data: SendPostals): any {
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
    update(@Body() data: SendPostals, @Param() params): any {
        return this.service.update(params.id, data);
    }

    @Delete(':id')
    delete(@Param() params): any {
        return this.service.delete(params.id);
    }
    
}
