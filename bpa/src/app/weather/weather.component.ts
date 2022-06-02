import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IWeather } from './IWeather';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent implements OnInit {
  private WEATHER_API = 'd1f7d9e73c7c7b55733acba3939aaf2e';
  private LATITUDE = '52.4313';
  private LONGITUDE = '30.9937';
  private url = `//api.openweathermap.org/data/2.5/forecast?lat=${this.LATITUDE}&lon=${this.LONGITUDE}&appid=${this.WEATHER_API}&units=metric`;

  public city = 'Gomel';
  public data!: IWeather;
  constructor(private http: HttpClient) {
    try {
      this.http.get(this.url).subscribe((data) => {
        this.data = <IWeather>data;
      });
    } catch (error) {
      console.log(error);
    }
  }

  ngOnInit(): void {}

  ngAfterViewInit() {}
}
