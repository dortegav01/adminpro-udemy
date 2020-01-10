import {Component, Inject, OnInit} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {SettingsService} from '../../services/settings.service';

@Component({
  selector: 'app-account-setting',
  templateUrl: './account-setting.component.html',
  styles: []
})
export class AccountSettingComponent implements OnInit {

  constructor( public mySettings: SettingsService ) { }

  ngOnInit() {
    this.putCheck();
  }

  changeColour(theme: string, link: any) {
    console.log( link );

    this.applyCheck( link );

    this.mySettings.applyTheme( theme );

  }

  applyCheck( link: any) {
    const selectors = document.getElementsByClassName('selector');
    // @ts-ignore
    for ( const ref of selectors ) {
      ref.classList.remove('working');
    }

    link.classList.add('working');

  }

  putCheck() {
    const selectors = document.getElementsByClassName('selector');

    const theme = this.mySettings.settings.theme;

    for (let i = 0; i < selectors.length; i++ ) {
      const ref = selectors[i];
      if ( ref.getAttribute('data-theme') === theme ) {
       ref.classList.add('working');
       i = selectors.length;
      }
    }
  }
}
