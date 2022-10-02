import { Component, OnInit , Input,SimpleChanges,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.scss']
})
export class NewsDetailsComponent implements OnInit {
  @Input() noticia: any={}
  @Output() onClear : EventEmitter<void>= new EventEmitter();
  //current:any={title:"Placeholder"}

  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Cambios')
    
  }
  clearNoticia(){

    // this.noticia={}
    this.onClear.emit();
  }

}
