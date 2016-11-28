import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { SimpleNotificationsModule } from 'angular2-notifications';

import { AppComponent }  from './app.component';
import { GroceryListComponent } from './grocery-list-details/grocery-list.component';
import { GroceryFormComponent } from './grocery-list-details/form/grocery-list-form.component';


@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    SimpleNotificationsModule 
  ],
  declarations: [ 
    AppComponent,
    GroceryListComponent,
    GroceryFormComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { 

}
