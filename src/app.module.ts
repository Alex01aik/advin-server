import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { SchemaModule } from './schema/schema.module';

@Module({
  imports: [UserModule, SchemaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
