import { Component, OnInit } from '@angular/core';
import { WeatherData } from './models/weather.model';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private weatherservice: WeatherService){
  }

  cityName:string = 'Hyderabad';
  weatherData?: WeatherData;
  errorFlag:boolean=false;
  isCold:boolean=false;

  ngOnInit(): void {
    this.getWeatherData(this.cityName);
    this.cityName=''
  }

  onSumbit(){
    this.getWeatherData(this.cityName);
    
    console.log(this.isCold);
    this.cityName=''
  }

   getBgColor(){
    return this.isCold?'#4C52AD':'#FAC742';
  }

  getColor(){
    return this.isCold?'white':'black';
  }


  private getWeatherData(cityName: string){
    this.weatherservice.getWeatherData(this.cityName).subscribe(
      data=>{
        this.errorFlag=false;
        this.weatherData = data;
        if(this.weatherData?.main.temp && this.weatherData?.main.temp<15){
          console.log(this.weatherData.main.temp)
          this.isCold=true;
        }
        else{
          this.isCold=false;
        }
        console.log(data);
      },
      error=>{
        this.errorFlag=true;
      }
      
    );
  }


  title = 'Weather-App';
}
