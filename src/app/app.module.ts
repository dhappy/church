import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LegComponent } from './components/leg/leg.component';
import { MapComponent } from './components/map/map.component';
import { TeamComponent } from './components/team/team.component';
import { FloorplanComponent } from './components/floorplan/floorplan.component';
import { MarkdownModule } from 'ngx-markdown'

@NgModule({
  declarations: [
    AppComponent,
    LegComponent,
    MapComponent,
    TeamComponent,
    FloorplanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MarkdownModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
