
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './modules/database/database.module';
import { CategoryModule } from './modules/category/category.module';
import { ModelsModule } from './modules/models/models.module';
import { CategoryItemModule } from './modules/category-item/category-item.module';
import { CategoryPostalModule } from './modules/category-postal/category-postal.module';
import { CategoryStampModule } from './modules/category-stamp/category-stamp.module';
import { ClasificationModelModule } from './modules/clasification-model/clasification-model.module';
import { ClasificationStampModule } from './modules/clasification-stamp/clasification-stamp.module';
import { ItemModule } from './modules/item/item.module';
import { ModelModule } from './modules/model/model.module';
import { ModelItemModule } from './modules/model-item/model-item.module';
import { NewsModule } from './modules/news/news.module';
import { PostalModule } from './modules/postal/postal.module';
import { SectionModule } from './modules/section/section.module';
import { SectionCategoryModule } from './modules/section-category/section-category.module';
import { SendPostalModule } from './modules/send-postal/send-postal.module';
import { ShopItemModule } from './modules/shop-item/shop-item.module';
import { ShopTematicsModule } from './modules/shop-tematics/shop-tematics.module';
import { ShopTematicsItemModule } from './modules/shop-tematics-item/shop-tematics-item.module';
import { ShoppingCartModule } from './modules/shopping-cart/shopping-cart.module';
import { StampModule } from './modules/stamp/stamp.module';
import { TextModule } from './modules/text/text.module';
import { ImagesModule } from './modules/images/images.module';
import { SearchModule } from './modules/search/search.module';


@Module({
  imports: [DatabaseModule, CategoryModule,ModelsModule, CategoryItemModule, CategoryPostalModule, CategoryStampModule, ClasificationModelModule, ClasificationStampModule, ItemModule, ModelModule, ModelItemModule, NewsModule, PostalModule, SectionModule, SectionCategoryModule, SendPostalModule, ShopItemModule, ShopTematicsModule, ShopTematicsItemModule, ShoppingCartModule, StampModule, TextModule, ImagesModule, SearchModule],
  controllers: [
    AppController
  ],
  providers: [AppService],
})
export class AppModule { }
