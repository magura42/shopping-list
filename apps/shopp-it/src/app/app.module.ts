import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { NavbarComponent } from './navbar/navbar.component';
import { DishComponent } from './dish/dish.component';
import { MealComponent } from './meal/meal.component';
import { FoodComponent } from './food/food.component';
import { ListComponent } from './list/list.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import {MaterialModule} from "./material.module";
import {FoodService} from "./food/food.service";

@NgModule({
  declarations: [AppComponent, NavbarComponent, DishComponent, MealComponent, FoodComponent, ListComponent],
  imports: [BrowserModule, HttpClientModule, BrowserAnimationsModule, LayoutModule,
    HttpClientModule,
    MaterialModule],
  providers: [FoodService],
  bootstrap: [AppComponent],
})
export class AppModule {}
