export class Weather {
  temperature: string;
  city: string;
  weatherType: string;
  windSpeed: string;
  humidity: string;

  constructor(temperature: string,
              city: string,
              weatherType: string,
              windSpeed: string,
              humidity: string) {
    this.temperature = temperature;
    this.city = city;
    this.weatherType = weatherType;
    this.windSpeed = windSpeed;
    this.humidity = humidity;
  }
}
