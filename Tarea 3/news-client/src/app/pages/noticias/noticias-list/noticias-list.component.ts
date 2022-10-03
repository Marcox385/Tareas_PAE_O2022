import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-noticias-list',
  templateUrl: './noticias-list.component.html',
  styleUrls: ['./noticias-list.component.scss']
})
export class NoticiasListComponent implements OnInit {
  @Input('searchTerm') noticias: any = {};
  @Input('selected') current: any = {title: ''};
  @Output() onSelect: EventEmitter<void> = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Cambios componente lista: ', changes);
  }

  selectNoticia(noticia: any) {
    console.log('Se seleccionó la noticia =>', noticia);
    this.current = noticia;
    this.onSelect.emit(noticia);
  }

  clearCurrent() {
    this.current = {};
  }
}