// src/modules/settings/settings.service.ts
import { Injectable } from '@nestjs/common';

@Injectable()
export class SettingsService {
  private userSettings = { theme: 'dark', notifications: true };
  private systemSettings = { version: '1.0.0', maintenance: false };

  getUserSettings() {
    return this.userSettings;
  }

  getSystemSettings() {
    return this.systemSettings;
  }

  updateUserSettings(settings: any) {
    this.userSettings = { ...this.userSettings, ...settings };
    return this.userSettings;
  }

  updateSystemSettings(settings: any) {
    this.systemSettings = { ...this.systemSettings, ...settings };
    return this.systemSettings;
  }
}
