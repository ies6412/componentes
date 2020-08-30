import { Component, OnInit, ViewChild } from '@angular/core';
import { ServicelaravelService } from '../../services/servicelaravel.service';
import { Observable } from 'rxjs';
import { RouterLink } from '@angular/router';
import { IonList, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage implements OnInit {

@ViewChild('lista') lista: IonList;
// para que funcione el search hay que pasarle a los usuariosn tipo any y sin async en html
usuarios: any[] = [];
textoabuscar = '';


  constructor(private data: ServicelaravelService,
              public toastController: ToastController) { }

  ngOnInit() {
   this.data.GetUsuarios().subscribe(usuarios=>{
   this.usuarios = usuarios;
   });
   this.presentToast('se cargo la lista');
  }
buscar(event){
  this.textoabuscar = event.detail.value;
}

editar(usuario){
  console.log(usuario.id);
  this.lista.closeSlidingItems();
  this.presentToast('Ingreso a editar al usuario' + usuario.name);
}
compartir(usuario){
  console.log(usuario.id);
  this.lista.closeSlidingItems();
  this.presentToast('Ingreso a cmpartir al usuario' + usuario.name);
}
borrar(usuario){
  console.log(usuario.id);
  this.lista.closeSlidingItems();
  this.presentToast('Ingreso a borrar al usuario' + usuario.name);
}

// toasr
async presentToast(message: string) {
  const toast = await this.toastController.create({
    message,
    duration:1000
  });
  toast.present();
}

}
