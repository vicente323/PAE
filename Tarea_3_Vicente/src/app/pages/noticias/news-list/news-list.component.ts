import { Component, OnInit,Input,SimpleChanges, Output,EventEmitter} from '@angular/core';


@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {
  @Input() newsList:any={}

  @Output() selectedNew= new EventEmitter<void>();
  @Input() current:any={}

  constructor() { }
  
  selectNew(current:any){
    
    this.selectedNew.emit(current)
  }
  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Cambios')
    console.log(changes)
    
  }
}
