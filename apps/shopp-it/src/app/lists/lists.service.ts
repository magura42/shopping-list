import {Observable} from "rxjs";
import {List} from "@shopping-list/shared";
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";

@Injectable()
export class ListsService {

  constructor(private http: HttpClient) {
  }

  find(): Observable<List[]> {
    const url = 'api/list';
    return this.http.get<List[]>(url);
  }
}
