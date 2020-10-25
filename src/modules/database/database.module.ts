import { RelatedSitesEntity } from './../related-sites/entity/related-sites-entity';
import { TextEnEntity } from './../text/entity/text-en-entity';
import { SectionEnEntity } from './../section/entity/section-en-entity';
import { CategoryEnEntity } from './../category/entity/category-en-entity';
import { CategoryPostalEntity } from './../category-postal/entity/category-postal-entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { CategoryEntity } from '../category/entity/category-entity';
import { CategoryItemEntity } from '../category-item/entity/category-item-entity';
import { CategoryStampEntity } from '../category-stamp/entity/category-stamp-entity';
import { ClasificationModelEntity } from '../clasification-model/entity/clasification-model-entity';
import { ClasificationStampEntity } from '../clasification-stamp/entity/clasification-stamp-entity';
import { ItemEntity } from '../item/entity/item-entity';
import { ModelEntity } from '../model/entity/model-entity';
import { ModelItemEntity } from '../model-item/entity/model-item-entity';
import { NewsEntity } from '../news/entity/news-entity';
import { PostalEntity } from '../postal/entity/postal-entity';
import { SectionEntity } from '../section/entity/section-entity';
import { SectionCategoryEntity } from '../section-category/entity/section-category-entity';
import { SendPostalEntity } from '../send-postal/entity/send-postal-entity';
import { ShopItemEntity } from '../shop-item/entity/shop-item-entity';
import { ShopTematicsEntity } from '../shop-tematics/entity/shop-tematics-entity';
import { ShopTematicsItemEntity } from '../shop-tematics-item/entity/shop-tematics-item-entity';
import { ShoppingCartEntity } from '../shopping-cart/entity/shopping-cart-entity';
import { StampEntity } from '../stamp/entity/stamp-entity';
import { TextEntity } from '../text/entity/text-entity';

import * as fs from 'fs'


@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: '127.0.0.1',
            port: 3306,
            username: 'root',
            password: '',
            database: 'cubamuseo_upload',
            entities: [
                CategoryEntity,
                CategoryItemEntity,
                CategoryStampEntity,
                CategoryPostalEntity,
                ClasificationModelEntity,
                ClasificationStampEntity,
                ItemEntity,
                ModelEntity,
                ModelItemEntity,
                NewsEntity,
                RelatedSitesEntity,
                PostalEntity,
                SectionEntity,
                SectionCategoryEntity,
                SendPostalEntity,
                ShopItemEntity,
                ShopTematicsEntity,
                ShopTematicsItemEntity,
                ShoppingCartEntity,
                StampEntity,
                TextEntity,
                CategoryEnEntity,
                SectionEnEntity,
                TextEnEntity
            ],
            synchronize: false
        })
    ]
})
export class DatabaseModule {
    type:string;
    host:string;
    port:number;
    username:string;
    password:string;
    database:string;

    constructor(private readonly connection: Connection) {
        
    }
}
