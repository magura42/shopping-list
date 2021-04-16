import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '@shopping-list/api-interfaces';

@Component({
  selector: 'shopping-list-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Mannis Shopping List App'
  constructor(private http: HttpClient) {}
}
