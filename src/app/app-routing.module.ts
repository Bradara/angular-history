import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleDatailsComponent } from './article-datails/article-datails.component';

const routes: Routes = [
  { path: 'article/:id', component: ArticleDatailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
