import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../article';
import { ActivatedRoute } from '@angular/router';
import { data } from '../data';

@Component({
  selector: 'app-article-datails',
  templateUrl: './article-datails.component.html',
  styleUrls: ['./article-datails.component.css']
})
export class ArticleDatailsComponent implements OnInit {
  article: Article;
  currentDescription: string;
  isDescriptionEnded: boolean;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getArticle();
    this.isDescriptionEnded = false;
  }

  getArticle(): void {
    const id = +this.route.snapshot.paramMap.get('id') || 1;
    this.article = data.find(a => a.id === id);
    if (this.article.description.length > 250) {
      this.currentDescription = this.article.description.slice(0, 250);
    } else {
      this.currentDescription = this.article.description;
      this.isDescriptionEnded = true;
    }
  }

  readMore() {
    const currentLength = this.currentDescription.length;
    const articleLength = this.article.description.length;
    if ((currentLength + 250) > articleLength) {
      this.currentDescription = this.article.description;
      this.isDescriptionEnded = true;
    } else {
      this.currentDescription = this.article.description.slice(0, currentLength + 250);
    }

  }

}
