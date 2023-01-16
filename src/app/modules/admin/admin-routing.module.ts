import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from 'src/app/admin/categories/categories.component';
import { QuizComponent } from 'src/app/admin/quiz/quiz.component';
import { TagsComponent } from 'src/app/admin/tags/tags.component';

const routes: Routes = [
  {
    path: 'categories',
    component: CategoriesComponent,
    title: 'Admin categories'
  },
  { path: 'tags', component: TagsComponent, title: 'Admin tags' },
  { path: 'quiz', component: QuizComponent, title: 'Admin quiz' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
