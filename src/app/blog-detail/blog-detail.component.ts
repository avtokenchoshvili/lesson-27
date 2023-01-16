import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {Blog} from '../interfaces/blog';
import {BlogService} from '../services/blog.service';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {

	blog$!: Observable<Blog>

  constructor(
		private _blogService: BlogService,
		private _route: ActivatedRoute
	) { }

  ngOnInit(): void {
		this.blog$ = this._blogService.getBlog(this._route.snapshot.params['id']);
  }

}
