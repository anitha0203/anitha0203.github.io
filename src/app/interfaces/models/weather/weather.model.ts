import { WeatherConditionEnum } from '@app/interfaces/enums/weather-condition.enum';

export interface WeatherModel {
    condition: WeatherConditionEnum;
    temperatureMax: number;
    temperatureMin: number;
    temperature: number;
    datetime: Date;
}
