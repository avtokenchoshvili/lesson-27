import { Component, OnDestroy, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {debounceTime, finalize, map, Observable, Subscription, tap} from 'rxjs';
import { Main, MainService } from '../services/main.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, OnDestroy {

	public data$!: Observable<Main>;

	public loader: boolean = false;

	nameControl: FormControl = new FormControl('');	
	
  constructor(
		private _mainService: MainService
  ) { }

  ngOnInit(): void {
		
		this.nameControl.valueChanges.pipe(
			debounceTime(500)
		).subscribe(
			res => {
				this.data$ = this._mainService.getMain();
				console.log(res);
			}
		)	



		this.loader = true;
		this.data$ = this._mainService.getMain().pipe(
			finalize(() => {
				this.loader = false;
				console.log(`finalize`)
			})
		);
	}

	ngOnDestroy(): void {
	}

}
