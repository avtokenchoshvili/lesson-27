import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {ProfileService} from '../services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

	data$!: Observable<any>;

  constructor(
		private _profileService: ProfileService
	) { }

  ngOnInit(): void {
		this.data$ = this._profileService.getProfile();
  }

}
