import { Pipe, PipeTransform } from '@angular/core';
import { Libro } from '../models/libro';


@Pipe({
  name: 'filtroLibros'
})
export class FiltroLibrosPipe implements PipeTransform {

  transform(libros: Libro[], searchText: string): any {
    if (searchText == null) return libros;
       
         console.log(searchText);
        
        return libros.filter(p=> 
            p.titulo.toLowerCase().indexOf(searchText.toLowerCase()) !== -1 
            ||
            p.autor.toLowerCase().indexOf(searchText.toLowerCase()) !== -1 
            ||
            p.anio.toLowerCase().indexOf(searchText.toLowerCase()) !== -1 
        );
    }
}