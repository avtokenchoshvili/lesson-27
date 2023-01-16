import { Component, OnInit ,Inject} from '@angular/core';
import {Form, FormBuilder, FormGroup} from '@angular/forms';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {QuizAddEditDialogComponent} from './quiz-add-edit-dialog/quiz-add-edit-dialog.component';
import { QuizService } from 'src/app/services/quiz.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
allQuizz$!:Observable<any[]> ;
	form!: FormGroup;
data: {questions:any[]}= {
	questions: []
}
  constructor(
		private _fb: FormBuilder,
		private _matDialog: MatDialog,
		private _quizService: QuizService,
	
	) { }

  ngOnInit(): void {
	// console.log(this.data);
	this.getQuizes();
	
	
		this.form = this._fb.group({
			title: [''],
			smallDescr: [''],
			descr: ['']
		})

		this.addAnswersDialog();
		
  }
  private getQuizes(){
	this.allQuizz$ = this._quizService.getQuiz()
  }
	addAnswersDialog() {
		const dialog = this._matDialog.open(QuizAddEditDialogComponent, {
			width: '440px',
			
		
			
		});
		dialog.afterClosed().subscribe(
		
			data =>{
				if(data){

			
			this.data.questions.push(data)	
				console.log(data)
			}
		}
		)
	}
	addQuiz(){
	
		this._quizService.addQuiz({...this.data,
		    ...this.form.value}).subscribe(
			res =>{
				console.log(res)
			}
		);
	}
	deleteQuizz(id:string){
		this._quizService.deleteQuiz(id).subscribe(
			() =>{
				this.getQuizes()
			}
		)
	}
	allQuizzes(){
		this._quizService.getQuiz().subscribe()
	}

	editQuizzes(id:string,data:any ){
		this._quizService.editQuiz(id,data).subscribe(
			(res)=>{
				console.log(res as JSON)
			}
		)
	}
}
