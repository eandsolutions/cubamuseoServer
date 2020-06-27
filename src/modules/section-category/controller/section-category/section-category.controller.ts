import { Controller, Post, Body, Get, Param, Put, Delete } from '@nestjs/common';
import { SectionCategory } from 'src/modules/models/section-category.interface';
import { SectionCategoryService } from '../../services/section-category/section-category.service';

@Controller('section-category')
export class SectionCategoryController {
    constructor(private service: SectionCategoryService) { }

    @Post()
    add(@Body() data: SectionCategory): any {
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

    @Get('bySection/:id')
    getAllBySection(@Param() params): any {
        return this.service.finAllBySectionId(params.id);
    }

    @Get('byCategory/:id')
    getOneByCategory(@Param() params): any {
        return this.service.finOneByCategoryId(params.id);
    }

    @Put(':id')
    update(@Body() data: SectionCategory, @Param() params): any {
        return this.service.update(params.id, data);
    }

    @Delete(':id')
    delete(@Param() params): any {
        return this.service.delete(params.id);
    }

}
