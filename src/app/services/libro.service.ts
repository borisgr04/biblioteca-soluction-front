import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { HandleHttpErrorService } from '../@base/handle-http-error.service';
import { Libro } from '../models/libro';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LibroService {

  baseUrl: string;
  constructor(
      private http: HttpClient,
      private handleErrorService: HandleHttpErrorService)
  {
    this.baseUrl = environment.baseUrl + 'api/';
  }

  get(): Observable<Libro[]> {
    return this.http.get<Libro[]>(this.baseUrl + 'Libro')
        .pipe(
            tap(_ => this.handleErrorService.log('datos enviados')),
            catchError(this.handleErrorService.handleError<Libro[]>('Consulta de Libros', []))
        );
  }
}
