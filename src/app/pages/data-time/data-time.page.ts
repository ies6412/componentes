import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-time',
  templateUrl: './data-time.page.html',
  styleUrls: ['./data-time.page.scss'],
})
export class DataTimePage implements OnInit {
   fechanacimiento: Date = new Date();
customDate;
customPickerOptions;

  constructor() { }

  ngOnInit() {

    this.customPickerOptions = {
      buttons: [{
        text: 'Save',
        handler: (evento) => {
        console.log('Clicked Save!');
        console.log(evento);
        }

      }, {
        text: 'Log',
        handler: () => {
          console.log('Clicked Log. Do not Dismiss.');
          return false;
        }
      }]
      }
    } 
 cambiodeFecha(event){
   console.log('ionChange', event);
   console.log('Date', new Date(event.detail.value));
 }
}
