import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(arreglo: any[], texto: string, columna: string): any[] {

   // console.log(arreglo);
   texto = texto.toLowerCase();
   if ( texto === ' ' ){
     return arreglo;
   }
   // tslint:disable-next-line: no-unused-expression
   return  arreglo.filter(item => {
     return item[columna].toLowerCase().includes(texto);

   });
  }

}
