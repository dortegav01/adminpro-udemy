import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-increaser',
  templateUrl: './increaser.component.html',
  styles: []
})
export class IncreaserComponent implements OnInit {

  // @ts-ignore
  @ViewChild('txtPercent') txtPercent: ElementRef;
  @Input('name') legend: string = 'Leyenda';
  @Input() percent: number = 50;

  @Output('updateValue') valueChanged: EventEmitter<number> = new EventEmitter<number>();

  constructor() {
    console.log('Leyenda', this.legend);
    console.log('Porcentaje', this.percent);
  }

  ngOnInit() {
    console.log('Leyenda en ngOnInit', this.legend);
    console.log('Porcentaje en ngOnInit', this.percent);
  }

  onChanges(newValue: number) {
    console.log( newValue );

    // const elementHTML: any = document.getElementsByName('percent')[0];
    // console.log('Element HTML: ', elementHTML.value);
    console.log('txtPercent: ', this.txtPercent);

    if (newValue >= 100 ) {
      this.percent = 100;
    } else if ( newValue <= 0 ) {
      this.percent = 0;
    } else {
      this.percent = newValue;
    }

    this.txtPercent.nativeElement.value = this.percent;

    this.valueChanged.emit( this.percent );

  }
  changeValue(value: number) {
    if ( (this.percent === 0 && value < 0 )  || ( this.percent === 100 && value > 0 ) ) {
      console.log('same percent= [' + this.percent + ']');
      return;
    } else {

      this.percent += value;

      this.valueChanged.emit( this.percent );

      this.txtPercent.nativeElement.focus();

      console.log('percent= [' + this.percent + ']');

    }
  }

}
