import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { CategoriesComponent } from '../../admin/categories/categories.component';
import { TagsComponent } from '../../admin/tags/tags.component';
import {ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';
import { QuizComponent } from '../../admin/quiz/quiz.component';
import { QuizAddEditDialogComponent } from '../../admin/quiz/quiz-add-edit-dialog/quiz-add-edit-dialog.component';


@NgModule({
  declarations: [
    CategoriesComponent,
    TagsComponent,
    QuizComponent,
    QuizAddEditDialogComponent
  ],
  imports: [
		ReactiveFormsModule,
    CommonModule,
		SharedModule,
    AdminRoutingModule,
    
    
  ]
})
export class AdminModule { }
