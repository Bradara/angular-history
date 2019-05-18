import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleDatailsComponent } from './article-datails.component';

describe('ArticleDatailsComponent', () => {
  let component: ArticleDatailsComponent;
  let fixture: ComponentFixture<ArticleDatailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleDatailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleDatailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
