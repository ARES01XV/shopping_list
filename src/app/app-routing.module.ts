import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryAddComponent } from './category-add/category-add.component';
import { CategoryEditComponent } from './category-edit/category-edit.component';
import { HomeComponent } from './home/home.component';
import { ShoppingAddComponent } from './shopping-add/shopping-add.component';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'shopping_list', component: ShoppingListComponent },
  { path: 'add_item', component: ShoppingAddComponent },
  { path: 'edit_item', component: ShoppingEditComponent},
  {path: 'add_category', component: CategoryAddComponent},
  {path: 'edit_category', component: CategoryEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
