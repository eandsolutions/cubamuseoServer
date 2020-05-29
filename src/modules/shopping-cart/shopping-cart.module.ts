import { Module } from '@nestjs/common';
import { ShoppingCartController } from './controller/shopping-cart/shopping-cart.controller';
import { ShoppingCartService } from './services/shopping-cart/shopping-cart.service';
import { ShoppingCartEntity } from './entity/shopping-cart-entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ShoppingCartEntity])],
  controllers: [ShoppingCartController],
  providers: [ShoppingCartService]
})
export class ShoppingCartModule {}
