import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { DefaultModule } from './layouts/default/default.module';
// import { TableComponent } from './table/table.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { ContactsComponent } from './contacts/contacts.component';
import { LeadsComponent } from './leads/leads.component';



@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    LeadsComponent,
    
    
   
    
    
    
    // DefaultComponent,
    // DashboardComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    DefaultModule,
    MatPaginatorModule,
   
   
    
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
