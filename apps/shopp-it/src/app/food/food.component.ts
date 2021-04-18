import { Component, OnInit } from '@angular/core';
import {Food} from "@shopping-list/shared";
import {FoodService} from "./food.service";

@Component({
  selector: 'shopping-list-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.scss']
})
export class FoodComponent implements OnInit {

  foods: Array<Food> = [];


  constructor(private foodService: FoodService) { }

  search(): void {
    this.foodService.find().subscribe(
      (foods: Food[])=> {
        this.foods = foods;
      },
      (errResp) => {
        console.error('Error loading foods', errResp);
      })
  }

  ngOnInit(): void {
    this.search();
  }

}
