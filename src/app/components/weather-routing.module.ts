import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForecastCityComponent } from './forecast-city/forecast-city.component';
import { CurrentCityListComponent } from './current-city-list/current-city-list.component';

const weatherRoutes: Routes = [
    { path: '', component: CurrentCityListComponent, pathMatch: 'full' },
    { path: 'forecast/:zipCode', component: ForecastCityComponent },
];

@NgModule({
    imports: [RouterModule.forChild(weatherRoutes)],
    exports: [RouterModule],
})
export class WeatherRoutingModule {}
