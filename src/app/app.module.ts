import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { WeatherModule } from '@app/weather/weather.module';
import { AppRoutingModule } from '@app/app-routing.module';
import { AppComponent } from '@app/app.component';
import { httpInterceptorProviders } from './interfaces/http-interceptors';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
    imports: [BrowserModule, FormsModule, HttpClientModule, WeatherModule, AppRoutingModule,ReactiveFormsModule],
    declarations: [AppComponent],
    providers: [httpInterceptorProviders],
    bootstrap: [AppComponent],
})
export class AppModule {}
