import {Inject, Injectable} from '@angular/core';
import {DOCUMENT} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  settings: IfzSettings = {
    themeURL: 'assets/css/colors/default.css',
    theme: 'default'
  };

  constructor( @Inject(DOCUMENT) private myDocument ) {
    this.loadSettings();
  }

  saveSettings() {
    localStorage.setItem('settings', JSON.stringify(this.settings));
  }

  loadSettings() {
    if ( localStorage.getItem('settings')) {
      this.settings = JSON.parse(localStorage.getItem('settings'));

      this.applyTheme( this.settings.theme );
    } else {
      this.applyTheme( this.settings.theme );
    }
  }

  applyTheme( theme: string ) {
    const url = `assets/css/colors/${ theme }.css`;
    this.myDocument.getElementById('theme').setAttribute('href', url);

    this.settings.theme = theme;
    this.settings.themeURL = url;

    this.saveSettings();
  }
}

interface IfzSettings {
  themeURL: string;
  theme: string;
}
