import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class WeatherreportService {
  citydetail()
  {
    return this.http.get('https://ipinfo.io/json?token=4120fc83144b88');
  }
  weather(location: string)
  {
    return this.http.get('http://api.weatherstack.com/current?access_key=2766529e5a908ab5d3dde74dbf40ab60&query='+location);
  }
  constructor(private http : HttpClient ) { }
}
