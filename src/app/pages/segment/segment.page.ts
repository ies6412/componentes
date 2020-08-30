import { Component, OnInit, ViewChild } from '@angular/core';
import { ServicelaravelService } from '../../services/servicelaravel.service';
import { Observable } from 'rxjs';
import { IonSegment, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {


  @ViewChild('segmento') segmento: IonSegment;
 usuarios: any[]=[];
 rolesp = '';
  valorsegmento = '';

  constructor(private dataservice: ServicelaravelService,
              public toastController: ToastController ) { }

  ngOnInit() {
    this.dataservice.GetUsuarios().subscribe(usuarios=>{
      // console.log(usuarios);
        this.usuarios = usuarios;
      });



  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000
    });
    toast.present();
  }

  segmentChanged(event){
  this.valorsegmento =  event.detail.value;
  if(this.valorsegmento === 'Todos'){
    this.presentToast('este es un ejemplo de toast en ' + this.valorsegmento);
    this.rolesp = ' ';
    return;
  }

  this.rolesp=this.valorsegmento;
  this.presentToast('este es un ejemplo de toast en ' + this.valorsegmento);
  }
}
