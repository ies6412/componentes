import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.page.html',
  styleUrls: ['./avatar.page.scss'],
})
export class AvatarPage implements OnInit {


   
   avatarmatriz: avatarcomponente[] = [
   {
     direccion : '/assets/original.jpg',
     name: 'italo',
     slot: 'start'
   },
   {
    direccion : '/assets/original.jpg',
    name: 'italo',
    slot: 'start'
  },
  {
    direccion : '/assets/original.jpg',
    name: 'italo',
    slot: 'end'
  },
  {
    direccion : '/assets/original.jpg',
    name: 'italo',
    slot: 'end'
  },

   ];


  constructor() { }

  ngOnInit() {
  }

}
interface avatarcomponente {
  direccion: string;
  name: string;
  slot: string;
 }