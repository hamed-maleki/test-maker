import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {DpDatePickerModule} from 'ng2-jalali-date-picker';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AddingTestComponent } from './adding-test/adding-test.component';

@NgModule({
  declarations: [
    AppComponent,
    AddingTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DpDatePickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
