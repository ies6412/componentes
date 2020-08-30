import { Component, OnInit } from '@angular/core';
import { ServicelaravelService } from '../../services/servicelaravel.service';
import { Observable } from 'rxjs';
import { Componente } from '../../interface/interfaces';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  constructor(private menuservicio: ServicelaravelService ) { }

  menu: Observable<Componente[]>;

  ngOnInit() {
  this.menu = this.menuservicio.getMenuOpcion();
}
}

