import {Component, Input, OnInit} from '@angular/core';
import {WeatherService} from '../weather.service';
import {Weather} from '../models/weather.model';

@Component({
  selector: 'app-weather-page',
  templateUrl: './weather-page.component.html',
  styleUrls: ['./weather-page.component.css']
})
export class WeatherPageComponent implements OnInit {
  weatherData: Weather;
  weatherCity: string;

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
  }

  getTemperatureInCelsius(): number {
    if (!this.weatherData) {
      return;
    }
    return (Number(this.weatherData.temperature) - 275.15);
  }

  onSubmit(): void {
    this.weatherService.getAll(this.weatherCity)
      .subscribe((weather: Weather) => this.weatherData = weather);
    console.log(this.weatherCity);
  }

  onWeatherCityChange(weatherCity: string): void {
    this.weatherCity = weatherCity;
    console.log(weatherCity);
  }

}
