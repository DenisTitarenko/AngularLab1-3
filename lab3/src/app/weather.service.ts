import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Weather} from './models/weather.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private weatherURL: string;

  constructor(private httpClient: HttpClient) { }

  getAll(weatherCity: string): Observable<Weather> {
    this.weatherURL = 'http://api.openweathermap.org/data/2.5/weather?q=' + weatherCity + '&appid=ba681aaf2162027ba64cda5f52789d21';
    return this.httpClient.get(this.weatherURL).pipe(
      map((res: any) =>
        new Weather(res.main.temp, res.name,
          res.weather.main, res.wind.speed,
          res.main.humidity) )
    );
  }
}
