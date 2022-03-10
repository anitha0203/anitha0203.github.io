import { WeatherModel } from './weather.model';
import { CityModel } from './city.model';

export interface CurrentWeatherModel {
    city: CityModel;
    weather: WeatherModel;
    cachedDatetime: Date;
}
