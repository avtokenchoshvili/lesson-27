import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(
		private _http: HttpClient
	) { }

	getQuiz(): Observable<any[]> {
		return this._http.get<any[]>(`${environment.api}/api/quiz`);
	}

	deleteQuiz(quizId: string) {
		return this._http.delete(`${environment.api}/api/quiz/${quizId}`)
	}

	addQuiz(data: any) {
		return this._http.post(`${environment.api}/api/quiz`, data)
	}

	editQuiz(quizId:string,data:any) {
		return this._http.put(`${environment.api}/api/quiz/${quizId}`, data)
	}

}
