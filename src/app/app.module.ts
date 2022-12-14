import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import {HttpClientModule} from'@angular/common/http';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingAddComponent } from './shopping-add/shopping-add.component';
import { HomeComponent } from './home/home.component';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { CategoryAddComponent } from './category-add/category-add.component';
import { CategoryEditComponent } from './category-edit/category-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent,
    ShoppingAddComponent,
    HomeComponent,
    ShoppingEditComponent,
    CategoryAddComponent,
    CategoryEditComponent,
    // HttpClientModule,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
