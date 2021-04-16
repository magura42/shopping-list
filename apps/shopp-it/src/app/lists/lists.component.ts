import { Component, OnInit } from '@angular/core';
import { List } from '@shopping-list/shared';
import {ListsService} from "./lists.service";

@Component({
  selector: 'shopping-list-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss']
})
export class ListsComponent implements OnInit {

  lists: Array<List> = [];

  constructor(private listsService: ListsService) { }

  search(): void {
    this.listsService.find().subscribe(
      (lists: List[])=> {
        this.lists = lists;
      },
      (errResp) => {
        console.error('Error loading lists', errResp);
      })
  }

  ngOnInit(): void {
    this.search();
  }

}
