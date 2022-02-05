import { Component, OnInit } from '@angular/core';
import { Libro } from '../models/libro';
import { LibroService } from '../services/libro.service';

@Component({
  selector: 'app-consultar-libros',
  templateUrl: './consultar-libros.component.html',
  styleUrls: ['./consultar-libros.component.css']
})
export class ConsultarLibrosComponent implements OnInit {

  searchText:string="";
  libros: Libro[]=[];

  constructor(private libroService: LibroService) { }

  ngOnInit(): void {

    this.libroService.get().subscribe(result => {
      this.libros = result;
    });
    
  }

}
