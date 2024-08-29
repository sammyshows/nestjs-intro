import { Module } from '@nestjs/common';
import { UsersModule } from '../modules/users/users.module';
import { SettingsModule } from '../modules/settings/settings.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [UsersModule, SettingsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
