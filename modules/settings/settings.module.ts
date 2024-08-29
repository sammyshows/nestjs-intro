// src/modules/settings/settings.module.ts
import { Module } from '@nestjs/common';
import { UserSettingsController } from './controllers/user-settings.controller';
import { SystemSettingsController } from './controllers/system-settings.controller';
import { SettingsService } from './settings.service';

@Module({
  controllers: [UserSettingsController, SystemSettingsController],
  providers: [SettingsService],
})
export class SettingsModule {}
