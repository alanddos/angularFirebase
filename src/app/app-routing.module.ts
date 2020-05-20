import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavBarComponent} from '../app/nav-bar/nav-bar.component'
import { NoPageFoundComponent} from '../app/no-page-found/no-page-found.component'
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddressFormComponent } from './address-form/address-form.component'
import { DragDropComponent } from './drag-drop/drag-drop.component'
import { TableComponent } from './table/table.component'
import { TreeComponent } from './tree/tree.component'

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: DashboardComponent },
  { path: 'addres-form', component: AddressFormComponent },
  { path: 'drag-drop', component: DragDropComponent },
  { path: 'table', component: TableComponent },
  { path: 'tree', component: TreeComponent },
  { path: 'user', component: UserComponent },
  { path: 'login', component: LoginComponent },
  // { path: 'about', component: AboutComponent },
  // { path: 'products', component: ProductsComponent },
  // { path: 'product-detail/:id', component: ProductDetailComponent },
  // { path: 'contact', component: ContactComponent },
  { path: '**', component: NoPageFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
