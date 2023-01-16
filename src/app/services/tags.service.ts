import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TagsService {
  constructor(private _http: HttpClient) { }

  getAllTag(): Observable<any[]> {
    return this._http.get<any[]>(`${environment.api}/api/tags`);
  }

  deleteTag(tagId: string) {
    return this._http.delete(`${environment.api}/api/tags/${tagId}`);
  }

  addTag(data: any) {
    return this._http.post(`${environment.api}/api/tags`, data)
  }

  editTag(data: { id: string, title: string }) {
    return this._http.put(`${environment.api}/api/tags`, data);
  }
}
