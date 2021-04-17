import { CacheModule, Global, HttpModule, Logger, Module, Provider } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose'

const mongodbUri = 'mongodb://localhost/shoppinglist';

const loggerProvider: Provider = {provide: Logger, useFactory: () => new Logger('ShoppingListServer')};

@Global()
@Module({
  imports: [
    HttpModule,
    MongooseModule.forRoot(
      mongodbUri,
      {useNewUrlParser: true}
    )
  ],
  providers: [loggerProvider],
  exports: [HttpModule, loggerProvider]
})
export class CoreModule {}
