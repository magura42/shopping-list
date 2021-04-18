import {Observable} from "rxjs";
import {Food} from "@shopping-list/shared";
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";

@Injectable()
export class FoodService {

  constructor(private http: HttpClient) {
  }

  find(): Observable<Food[]> {
    const url = 'api/food';
    return this.http.get<Food[]>(url);
  }
}
