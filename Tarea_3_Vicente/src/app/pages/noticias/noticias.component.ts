import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, Input, OnInit } from '@angular/core';

import { NoticiaService } from 'src/app/shared/services/noticia.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss']
})
export class NoticiasComponent implements OnInit {

  noticias: any  = [];
  cargando: boolean = false;
  current:any={}
  zelda: string = 'http://google.com';
  search: string = '';
  lastSearch: string = '';

  constructor(private servicioDeNoticias: NoticiaService) {}
 
  ngOnInit(): void {}
 // current:any={}

  buscar(e?: any): void {

    this.cargando = true;
    this.servicioDeNoticias.getNoticias(this.search).subscribe({
      next: (response) => {
        this.lastSearch = this.search;
        this.noticias = response.articles;
        this.cargando = false;
      },
      error: (err: any) => {
        console.log(err)
        console.log('Ocurrio un error');
      }
    });
  }

  selectNew(curr:any){
    this.current=curr
  } 
  clearCurrent(){
    this.current={}
    
  }
}