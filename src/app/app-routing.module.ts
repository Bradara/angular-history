import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleDatailsComponent } from './article-datails/article-datails.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: 'angular-history/article/:id', component: ArticleDatailsComponent },
  { path: '**', redirectTo: 'angular-history/article/1', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
