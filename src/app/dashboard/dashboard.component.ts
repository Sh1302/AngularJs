import { Component, OnInit } from '@angular/core';
import { WeatherreportService } from '../weatherreport.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  city :any;
  weatherData : any;
  constructor (private wea : WeatherreportService){}
  ngOnInit(){
    this.getcity();
  }
  getcity()
  {
    this.wea.citydetail()
    .subscribe((response: any) => {
      this.city = response.city
    });
  }
    showWeather()
    {
      this.wea.weather(this.city).subscribe(data => {
        this.weatherData =data;
        console.log(this.weatherData);
      });
  }

}
