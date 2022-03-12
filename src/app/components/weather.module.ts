import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherRoutingModule } from './weather-routing.module';
import { CurrentCityListComponent } from './current-city-list/current-city-list.component';
import { ForecastCityComponent } from './forecast-city/forecast-city.component';
import { CurrentCityComponent } from './current-city/current-city.component';
import { WeatherIconUrlPipe } from './weather-icon-url.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { CitySelectionFormComponent } from './city-selection-form/city-selection-form.component';


@NgModule({
    imports: [CommonModule, WeatherRoutingModule,ReactiveFormsModule],
    declarations: [CurrentCityListComponent,CitySelectionFormComponent, ForecastCityComponent, CurrentCityComponent, WeatherIconUrlPipe],
})
export class WeatherModule {}
