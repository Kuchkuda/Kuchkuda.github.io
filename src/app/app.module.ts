import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
// import { CheckboxControlValueAccessor} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { TableComponent } from './user-list/table/table.component';


@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    // CheckboxControlValueAccessor,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
