import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { CategoryEntity } from './../../../category/entity/category-entity';
import { TextEntity } from './../../../text/entity/text-entity';
import { ShopItemEntity } from './../../../shop-item/entity/shop-item-entity';
import { ModelEntity } from './../../../model/entity/model-entity';
import { StampEntity } from '../../../stamp/entity/stamp-entity'
import { Repository } from 'typeorm';
@Injectable()

export class SearchService {

    constructor(
        @InjectRepository(CategoryEntity) private readonly Category: Repository<CategoryEntity>,
        @InjectRepository(TextEntity) private readonly Text: Repository<TextEntity>,
        @InjectRepository(ShopItemEntity) private readonly Shop: Repository<ShopItemEntity>,
        @InjectRepository(ModelEntity) private readonly Model: Repository<ModelEntity>,
        @InjectRepository(StampEntity) private readonly StampEntity: Repository<StampEntity>,
    ) { }

    async findInText(query) {
        return await this.Text.query('Select * from texto where nombre like "' + query +
            '" or descripcion like "' + query + '"')
    }

    async findInShop(query) {
        return await this.Shop.query('Select * from tienda_item where titulo like "' + query +
            '" or nombre like "' + query + '"')
    }

    async findInModel(query) {
        return await this.Shop.query('Select * from muestra where nombre like "' + query +
            '" or titulo like "' + query + '" or descripcion like "' + query + '"')
    }

    async findInStamp(query) {
        return await this.Shop.query('Select * from estampa where nombre like "' + query +
            '" or titulo like "' + query + '" or texto like "' + query + '"')

    }

    async findInCollectionsCategory(query) {
        return await this.Shop.query('Select * from categoria where nombre like "' + query +
            '" or titulo like "' + query + '" or descripcion like "' + query + '"')

    }

    async findInCollectionsSection(query) {
        return await this.Shop.query('Select * from seccion where nombre like "' + query +
            '" or titulo like "' + query + '" or descripcion like "' + query + '"')

    }

    async findInItems(query) {
        return await this.Shop.query('Select * from item where nombre like "' + query +
            '" or titulo like "' + query + '" or descripcion like "' + query + '"')

    }

    async findCollectionByItem(id) {
        return await this.Shop.query('Select * from categoria_item where idItem ='+id)

    }
}
