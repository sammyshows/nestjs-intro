// src/modules/settings/controllers/system-settings.controller.ts
import { Controller, Get, Patch, Body } from '@nestjs/common';
import { SettingsService } from '../settings.service';

@Controller('settings/system')
export class SystemSettingsController {
  constructor(private readonly settingsService: SettingsService) {}

  @Get()
  getSystemSettings() {
    return this.settingsService.getSystemSettings();
  }

  @Patch()
  updateSystemSettings(@Body() settings: any) {
    return this.settingsService.updateSystemSettings(settings);
  }
}
