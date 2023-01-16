import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-quiz-add-edit-dialog',
  templateUrl: './quiz-add-edit-dialog.component.html',
  styleUrls: ['./quiz-add-edit-dialog.component.css']
})
export class QuizAddEditDialogComponent implements OnInit {

	form!: FormGroup;


 
  constructor(
		private _fb: FormBuilder ,
		private _quizService: QuizService,
		private _matDialogRef: MatDialogRef<QuizAddEditDialogComponent>
	) { }

  ngOnInit(): void {
		this.form = this._fb.group({
			question: ['rame kitxva ?'],
			answers: this._fb.array([])
		});

	
  }

	get answers(): FormArray {
		return this.form.controls['answers'] as FormArray
	}

	addAnswer() {
		const group = this._fb.group({
			answer: [''],
			isCorrect: [false]
		});
		
		this.answers.push(group);

		console.log(this.form.value);

	}


	delete(i: number) {
		this.answers.removeAt(i);
	}
add(){
	this._matDialogRef.close(this.form.value);
}

}
