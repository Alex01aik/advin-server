import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SchemaModule } from './schema/schema.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { CompanyModule } from './company/company.module';
import { S3Module } from './s3/s3.module';

@Module({
  imports: [AuthModule, UserModule, CompanyModule, S3Module, SchemaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
