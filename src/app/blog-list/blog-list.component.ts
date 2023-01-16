import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Blog} from '../interfaces/blog';
import {BlogService} from '../services/blog.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {

	blogs$!: Observable<Blog[]>;

  constructor(
		private _blogService: BlogService
	) { }

  ngOnInit(): void {
		this.blogs$ = this._blogService.getBlogs();
  }

}
