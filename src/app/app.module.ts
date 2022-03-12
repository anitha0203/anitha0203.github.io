import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '@app/app-routing.module';
import { AppComponent } from '@app/app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { httpInterceptorProviders } from './interfaces/http-interceptors';
import { WeatherModule } from './components/weather.module';


@NgModule({
    imports: [BrowserModule, FormsModule, HttpClientModule, WeatherModule, AppRoutingModule,ReactiveFormsModule],
    declarations: [AppComponent],
    providers: [httpInterceptorProviders],
    bootstrap: [AppComponent],
})
export class AppModule {}
