import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { WeatherData } from '../models/weather.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http:HttpClient) {   }
  

  getWeatherData(cityName: string):Observable<WeatherData>{
      return this.http.get<WeatherData>(environment.weatherApiBaseUrl,{
        params: new HttpParams()
        .set('q',cityName)
        .set(environment.apiName,environment.apiKey)
        .set('units','metric')
      })
    }

  // Also Be written as:

  // getWeatherData(cityName: string):Observable<WeatherData>{
  //   return this.http.get<WeatherData>('https://api.openweathermap.org/data/2.5/weather?q='+cityName+'&appid=a8cb291f59be9ebda3db53af1804d14e&units=metric')
  // }

    

}
