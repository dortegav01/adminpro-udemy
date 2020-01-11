import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styles: []
})
export class PromisesComponent implements OnInit {

  constructor() {

    const varPromise = new Promise( (resolve, reject) => {

      let count = 0;

      const stopInterval = setInterval( () => {

        count++;
        console.log ( count );
        if ( count === 3 ) {
          resolve('OK!');
          // reject('simply an error');
          clearInterval(stopInterval);
        }

      }, 1000);
    });

    varPromise.then(
        (message) => console.log('Finish!', message)
      )
        .catch( error => console.error('Error in the promise', error));

  }

  ngOnInit() {
  }

}
