import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { PostsComponent } from './modules/posts/posts.component';
import { CardComponent } from './shared/widgets/card/card.component';
import { TableComponent } from './table/table.component';
import { ContactsComponent } from './contacts/contacts.component';
import { LeadsComponent } from './leads/leads.component';

const routes: Routes = [{
  path:'',
  component:DefaultComponent,
  children:[{
    path:'',
    component:DashboardComponent
  },
  {path:'',redirectTo:'dashboard',pathMatch:'full'},
  {path:'posts',
  component:PostsComponent},
  {path:'card',component:CardComponent},
  {path:'table',component:TableComponent},
  {path:'contact',component:ContactsComponent},
  {path:'lead',component:LeadsComponent}
 
  

]

}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
