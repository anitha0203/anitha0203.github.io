import { WeatherConditionEnum } from '@app/interfaces/enums/weather-condition.enum';

export interface WeatherApiModel {
    id: number;
    main: WeatherConditionEnum;
    description: string;
    icon: string;
}
