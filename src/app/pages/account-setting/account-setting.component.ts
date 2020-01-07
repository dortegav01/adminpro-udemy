import {Component, Inject, OnInit} from '@angular/core';
import {DOCUMENT} from '@angular/common';

@Component({
  selector: 'app-account-setting',
  templateUrl: './account-setting.component.html',
  styles: []
})
export class AccountSettingComponent implements OnInit {

  constructor( @Inject(DOCUMENT) private myDocument ) { }

  ngOnInit() {
  }

  changeColour(theme: string, link: any) {
    console.log( link );

    this.applyCheck( link );
    const url = `assets/css/colors/${ theme }.css`;
    this.myDocument.getElementById('theme').setAttribute('href', url);
  }

  applyCheck( link: any) {
    const selectors = document.getElementsByClassName('selector');
    // @ts-ignore
    for ( const ref of selectors ) {
      ref.classList.remove('working');
    }

    link.classList.add('working');

  }
}
