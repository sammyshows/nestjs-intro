// src/modules/settings/controllers/user-settings.controller.ts
import { Controller, Get, Patch, Body } from '@nestjs/common';
import { SettingsService } from '../settings.service';

@Controller('settings/user')
export class UserSettingsController {
  constructor(private readonly settingsService: SettingsService) {}

  @Get()
  getUserSettings() {
    return this.settingsService.getUserSettings();
  }

  @Patch()
  updateUserSettings(@Body() settings: any) {
    return this.settingsService.updateUserSettings(settings);
  }
}
