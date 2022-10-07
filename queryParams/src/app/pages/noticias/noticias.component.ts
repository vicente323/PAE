import { Component, OnInit } from '@angular/core';

import { NoticiaService } from 'src/app/shared/services/noticia.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss']
})
export class NoticiasComponent implements OnInit {

  noticias: any  = [];
  cargando: boolean = false;

  zelda: string = 'http://google.com';
  search: string = '';
  lastSearch: string = '';
  current: any = {title:'Ejemplo'};

  constructor(private noticiaService: NoticiaService, private route:ActivatedRoute) {}

  ngOnInit(): void {   
   
      this.route.queryParams
    
      .subscribe((params)=>{
        
      
        let np=JSON.parse(JSON.stringify(params))// perdon diosito por esta cochinada 
        console.log(np)
        this.search=np.q
        if(this.search){
          this.buscar()
          
        }
       
  
      })

    
 
  }

  buscar(e?: any): void {

    this.cargando = true;
    this.noticiaService.getNoticias(this.search).subscribe({
      next: (response) => {
        this.lastSearch = this.search;
        localStorage.setItem('q',this.lastSearch)
        this.noticias = response.articles;
        this.cargando = false;
      },
      error: (err: any) => {
        console.log('Ocurrio un error');
      }
    });
  }

  selectNoticia(noticia: any) {
    this.current = noticia;
    this.noticiaService.setCurrentNoticia(noticia);
  }

  clearCurrent() {
    this.current = {};
  }
}