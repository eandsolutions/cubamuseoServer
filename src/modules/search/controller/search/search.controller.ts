import { SearchService } from './../../service/search/search.service';
import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { Text } from 'src/modules/models/text.interface';

@Controller('search')
export class SearchController {

    constructor(private service:SearchService) { }

    @Get('inText/:query')
    inText(@Param() data){
        return this.service.findInText(data.query);
    }

    @Get('inShop/:query')
    inShop(@Param() data){
        return this.service.findInShop(data.query);
    }

    @Get('inStamp/:query')
    inStamp(@Param() data){
        return this.service.findInStamp(data.query);
    }

    @Get('inModel/:query')
    inModel(@Param() data){
        return this.service.findInModel(data.query);
    }

    @Get('inCollectionCategory/:query')
    inCollectionsCategory(@Param() data){
        return this.service.findInCollectionsCategory(data.query);
    }

    @Get('inCollectionSection/:query')
    inCollectionSection(@Param() data){
        return this.service.findInCollectionsSection(data.query);
    }

    @Get('inItems/:query')
    inItems(@Param() data){
        return this.service.findInItems(data.query);
    }
    
}
