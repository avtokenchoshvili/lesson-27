import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Blog} from '../interfaces/blog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(
		private _http: HttpClient
	) { }

	getBlogs(): Observable<Blog[]> {
		return this._http.get<Blog[]>('http://localhost:8000/api/blog');
	}

	getBlog(id: string): Observable<Blog> {
		return this._http.get<Blog>(`http://localhost:8000/api/blog/${id}`);
	}
}
