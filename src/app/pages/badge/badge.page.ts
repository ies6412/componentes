import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.page.html',
  styleUrls: ['./badge.page.scss'],
})
export class BadgePage implements OnInit {
   componentebadge: badgematriz[] = [

    {
     color: 'primary',
     numer: '11',
     slot: 'end',
     nombre: 'Follew '
    },
     {
      color: 'secondary',
      numer: '11',
      slot: 'end'
      ,
     nombre: 'Follew '
     },
     {
      color: 'tertiary',
      numer:'11',
      slot:'end',
      nombre: 'Follew '
     },
     {
      color: 'success',
      numer:'11',
      slot:'end',
      nombre: 'Follew'
     },
     {
      color: 'warning',
      numer:'11',
      slot:'end',
      nombre: 'Follew '
     },
     {
      color: 'danger',
      numer:'11',
      slot:'end',
      nombre: 'Follew '
     },
     {
      color: 'light ',
      numer:'11',
      slot:'end',
      nombre: 'Follew '
     },
     {
      color: 'medium ',
      numer: '11',
      slot:'end',
      nombre: 'Follew '
     },
     {
      color: 'dark',
      numer:'11',
      slot:'end',
      nombre: 'Follew '
     }

   ];
  constructor() { }

  ngOnInit() {
  }

}
interface badgematriz {
  color: string;
  numer: string;
  slot: string;
  nombre: string;
  }
