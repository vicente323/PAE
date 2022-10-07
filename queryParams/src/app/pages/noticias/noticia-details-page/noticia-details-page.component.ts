import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Noticia } from 'src/app/shared/interfaces/noticia';

import { NoticiaService } from 'src/app/shared/services/noticia.service';

@Component({
  selector: 'app-noticia-details-page',
  templateUrl: './noticia-details-page.component.html',
  styleUrls: ['./noticia-details-page.component.scss']
})
export class NoticiaDetailsPageComponent implements OnInit {

  noticia: Noticia = {
    title: '',
    description: '',
    url: ''
  }

  titulo: string = '';
  search:string='';
  constructor(
    private noticiaService: NoticiaService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {

  }

  ngOnInit(): void {
    this.search=localStorage.getItem('q')||'';
    this.activatedRoute.params.subscribe((params) => {
      console.log('Parametros',params);
      this.titulo = params['titulo'];
    });


    this.noticia = this.noticiaService.getCurrentNoticia();

    if(this.titulo !== this.noticia.title) {
      console.log("debug")
      this.router.navigate(['..'], {
        //queryParams:{q:"a"},
        relativeTo: this.activatedRoute

        
      });
    }
  }


}
