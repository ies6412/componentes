import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-scrollinfinito',
  templateUrl: './scrollinfinito.page.html',
  styleUrls: ['./scrollinfinito.page.scss'],
})
export class ScrollinfinitoPage implements OnInit {

  @ViewChild(IonInfiniteScroll) infinitScroll:IonInfiniteScroll;
  data: any[] = Array(100);


  constructor() { }

  ngOnInit() {
  }
   
  //evento loadData para scroll infinty

  loadData(event) {
    setTimeout(() => {
      console.log('Cargando datos...');
      event.target.complete();

      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      if (this.data.length >= 20) {
        event.target.disabled = true;
      }
      event.target.complete();
    }, 1000);
  }



}
