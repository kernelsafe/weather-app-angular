import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import {NoopAnimationsModule} from '@angular/platform-browser/animations'
import {MatButtonModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatInputModule,
  MatProgressSpinnerModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatTooltipModule,
  MatIconModule} from '@angular/material'
import { FlexLayoutModule } from '@angular/flex-layout'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HttpClientModule } from '@angular/common/http'
import { WeatherComponent } from './components/weather/weather.component'
import { WeatherHistoryComponent } from './components/weather-history/weather-history.component'

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    WeatherHistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatTooltipModule,
    MatSortModule,
    MatIconModule,
    FlexLayoutModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
