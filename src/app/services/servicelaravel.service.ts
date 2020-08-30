import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Componente } from '../interface/interfaces';
@Injectable({
  providedIn: 'root'
})
export class ServicelaravelService {
   

  constructor( private http: HttpClient) { }

  getMenuOpcion(){
   
    return this.http.get<Componente[]>('/assets/data/menu.json');

  }


  GetUsuarios(){
 return this.http.get<any[]>('http://127.0.0.1:8000/api/usuariosdeprueba');
  
  // cuando ponemos <any[]> estamos diciendo que regresa un arreglo

  }
  EditUsuario(id: number)
  {
    return this.http.get('http://127.0.0.1:8000/api/editarusario/id');
  }

}
