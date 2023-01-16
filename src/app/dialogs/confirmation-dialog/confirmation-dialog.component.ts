import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.css']
})
export class ConfirmationDialogComponent implements OnInit {

  constructor(
		private _matDialogRef: MatDialogRef<ConfirmationDialogComponent>
	) { }

  ngOnInit(): void {
  }
	
	ok() {
		this._matDialogRef.close(true)
	}

	no() {
		this._matDialogRef.close()
	}

}
