import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {

  percent: number = 50;

  constructor() {
  }

  ngOnInit() {
  }

  changeValue(value: number) {
    // tslint:disable-next-line:triple-equals
    if ( (this.percent == 0 && value < 0 )  || ( this.percent == 100 && value > 0 ) ) {
      console.log('same percent= [' + this.percent + ']');
      return;
    } else {
      this.percent += value;
      console.log('percent= [' + this.percent + ']');
    }
  }
}
