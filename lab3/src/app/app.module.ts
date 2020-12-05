import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { FormPageComponent } from './form-page/form-page.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { UserComponent } from './user/user.component';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import { WeatherPageComponent } from './weather-page/weather-page.component';
import { HttpClientModule } from '@angular/common/http';

const routes = [
  {path: '', component: HomePageComponent},
  {path: 'form', component: FormPageComponent},
  {path: 'weather', component: WeatherPageComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    FormPageComponent,
    UserComponent,
    WeatherPageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    NgxDatatableModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
