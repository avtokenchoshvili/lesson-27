import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {Observable} from 'rxjs';
import {CategoriesDialogComponent} from 'src/app/dialogs/categories-dialog/categories-dialog.component';
import {CategoriesService} from 'src/app/services/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

	categories$!: Observable<any[]>;

  constructor(
		private _categoriesService: CategoriesService,
		private _matDialog: MatDialog
	) { }

  ngOnInit(): void {
		this._getData();
		this.addCategory();
  }

	private _getData() {
		this.categories$ = this._categoriesService.getAllCategory();
	}

	addCategory(cat?: any) {
		const dialog = this._matDialog.open(CategoriesDialogComponent, {
			width: '440px',
			data: cat
		})
	}
	
	delete(categoryId: string) {
		this._categoriesService.deleteCategory(categoryId).subscribe(
			() => {
				this._getData();
			},
			err => {
				console.log(err);
			}
		)
	}

}
