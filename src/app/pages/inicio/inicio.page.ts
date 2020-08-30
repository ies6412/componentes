import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Componente } from '../../interface/interfaces';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
 
 
 
 
   componente: Componente[] = [
    {icon: 'american-football',
      name: 'Action-sheet',
      redirectTo: '/action-sheet'
     },
     {icon: 'fast-food-sharp',
      name: 'Alert',
      redirectTo: '/alert'
     },
     {icon: 'fast-food-sharp',
     name: 'Badge',
     redirectTo: '/badge'
    },
     {icon: 'fast-food-sharp',
     name: 'Avatar',
     redirectTo: '/avatar'
    },
    {icon: 'calendar',
     name: 'Data time',
     redirectTo: '/data-time'
    },
    {icon: 'calendar',
     name: 'Card view',
     redirectTo: '/card'
    },
    {icon: 'calendar',
     name: 'fab',
     redirectTo: '/fab'
    },
     {icon: 'infinite',
     name: 'scrollinfinito',
     redirectTo: '/scrollinfinito'
    },
     {icon: 'list',
     name: 'listaLaravel',
     redirectTo: '/lista'
    },
    {icon: 'search',
    name: 'search',
    redirectTo: '/search'
   }
   ,
    {icon: 'list',
    name: 'busquedasuperior(segment)',
    redirectTo: '/segment'
   }
     

  ];

  toggleMenu(){
 this.MenuControl.toggle();

   }
  constructor( private MenuControl: MenuController) { }

  ngOnInit() {
    
  }

}
