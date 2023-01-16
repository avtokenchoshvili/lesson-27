import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {delay, map, Observable, tap} from 'rxjs';

export interface Main {
 title: string;
 descr: string;
 courses: { title: string; descr: string }[];
}

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(
		private _http: HttpClient 
	) { }

	getMain(): Observable<Main> {
		return this._http.get<Main>('assets/main.json').pipe(
			delay(2000),
			tap(
				(res: any) => {
					console.log('this is first tap operator', res)
				}
			),
			map(
				(result: any) => {
					console.log('this is map operator', result['data']);
					return result['data'];
				}
			),
			tap(
				(res: any) => {
					console.log('this is tap after map operator', res)
				}
			)
		);
	}
}
