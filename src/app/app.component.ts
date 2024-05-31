import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { PrimeNGConfig } from 'primeng/api';
import { AppConfig, LayoutService } from './layout/service/app.layout.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Lana Pharmacy';
  
  constructor(private primengConfig: PrimeNGConfig, private layoutService: LayoutService) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true;       //enables core ripple functionality

    //optional configuration with the default configuration
    const config: AppConfig = {
      ripple: false,                      //toggles ripple on and off
      inputStyle: 'outlined',             //default style for input elements
      menuMode: 'static',                 //layout mode of the menu, valid values are "static" and "overlay"
      colorScheme: 'light',               //color scheme of the template, valid values are "light" and "dark"
      theme: 'lara-light-indigo',         //default component theme for PrimeNG
      scale: 14                           //size of the body font size to scale the whole application
    };
    this.layoutService.config.set(config);
  }
  
  submit() {
    console.log('submitted');
  }
}
