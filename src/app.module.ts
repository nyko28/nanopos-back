import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { CategoriesModule } from './categories/categories.module';
import { TransactionsModule } from './transactions/transactions.module';
import { WebauthnModule } from './webauthn/webauthn.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nanopos', {useCreateIndex: true}),
    ProductsModule,
    CategoriesModule,
    TransactionsModule,
    WebauthnModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
