import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { ClassEStyleBindingComponent } from './class-e-style-binding/class-e-style-binding.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { InputOutputPropertiesComponent } from './input-output-properties/input-output-properties.component';
import { InputPropertyComponent } from './input-property/input-property.component';
import { OutputPropertyComponent } from './output-property/output-property.component';

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    ClassEStyleBindingComponent,
    EventBindingComponent,
    TwoWayBindingComponent,
    InputOutputPropertiesComponent,
    InputPropertyComponent,
    OutputPropertyComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
