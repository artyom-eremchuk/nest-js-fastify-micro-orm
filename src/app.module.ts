import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import mikroOrmConfig from './configs/mikro-orm.config';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [MikroOrmModule.forRoot(mikroOrmConfig), UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
