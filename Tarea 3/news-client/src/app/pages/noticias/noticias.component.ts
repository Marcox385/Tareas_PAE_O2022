import { Component, OnInit } from '@angular/core';
import { NoticiaService } from 'src/app/shared/services/noticia.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss']
})
export class NoticiasComponent implements OnInit {
  cargando: boolean = false;

  search: string = '';
  lastSearch: string = '';

  noticias: any = {};
  current: any = {};

  constructor(private servicioDeNoticias: NoticiaService) { }

  ngOnInit(): void {}

  buscar(): void {
    this.cargando = true;
    this.servicioDeNoticias.getNoticias(this.search).subscribe({
        next: (response) => {
          this.lastSearch = this.search;
          this.noticias = response.articles;
          this.cargando = false;
          this.search = '';
        },
        error: (err) => {
          console.log('No se pudo procesar la solicitud: ', err);
        }
      }
    )
  }

  setCurrent(noticia: any): void {
    this.current = noticia;
  }

  clearCurrent(): void {
    this.current = {};
  }
}