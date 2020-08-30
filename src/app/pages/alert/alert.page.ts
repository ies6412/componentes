import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { identifierModuleUrl } from '@angular/compiler';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {


  titulo: string;
  constructor(private alertcontroller: AlertController) { }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertcontroller.create({
      cssClass: 'my-custom-class',
      header: 'Input',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: [{
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',
        handler: (blah) => {
          console.log('Confirm Cancel: blah');
        }
      }, {
        text: 'Okay',
        handler: () => {
          console.log('Confirm Okay');
                  }
      }]
    });

    await alert.present();
  }
  async presentAlertPrompt() {
    const alert = await this.alertcontroller.create({
      cssClass: 'my-custom-class',
      header: 'Prueba!',
      subHeader: 'ingrese su nombre',
      inputs: [
        {
          id: 'nameid',
          name: 'name1',
          type: 'text',
          placeholder: 'Escriba su nombre'
        },
       /* {
          name: 'name2',
          type: 'text',
          id: 'name2-id',
          value: 'hello',
          placeholder: 'Placeholder 2'
        },
        // multiline input.
        {
          name: 'paragraph',
          id: 'paragraph',
          type: 'textarea',
          placeholder: 'Placeholder 3'
        },
        {
          name: 'name3',
          value: 'http://ionicframework.com',
          type: 'url',
          placeholder: 'Favorite site ever'
        },
        // input date with min & max
        {
          name: 'name4',
          type: 'date',
          min: '2017-03-01',
          max: '2018-01-12'
        },
        // input date without min nor max
        {
          name: 'name5',
          type: 'date'
        },
        {
          name: 'name6',
          type: 'number',
          min: -5,
          max: 10
        },
        {
          name: 'name7',
          type: 'number'
        },
        {
          name: 'name8',
          type: 'password',
          placeholder: 'Advanced Attributes',
          cssClass: 'specialClass',
          attributes: {
            maxlength: 4,
            inputmode: 'decimal'
          }
        }*/
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
           handler: (data) => {
            console.log('Confirm Ok', data);
            this.titulo = data.name1;

          }
        }
      ]
    });

    await alert.present();
  }
}
