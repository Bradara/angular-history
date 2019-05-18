import { Component, OnInit } from '@angular/core';
import { data } from '../data';

class ArticleTitle {
  id: number;
  title: string;
}

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {
  articlesTitles: ArticleTitle[] = data.map(a => a as ArticleTitle);

  constructor() { }

  ngOnInit() {
  }

}
