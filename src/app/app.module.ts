import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatOptionModule, } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    MatButtonModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
