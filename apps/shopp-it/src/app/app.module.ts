import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { ListsComponent } from './lists/lists.component';
import { EntriesComponent } from './entries/entries.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import {MaterialModule} from "./material.module";
import {ListsService} from "./lists/lists.service";

@NgModule({
  declarations: [AppComponent, NavbarComponent, ListsComponent, EntriesComponent],
  imports: [BrowserModule, HttpClientModule, BrowserAnimationsModule, LayoutModule,
    HttpClientModule,
    MaterialModule],
  providers: [ListsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
