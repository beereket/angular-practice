import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CountryList} from './components/country-list/country-list';

@Component({
  selector: 'app-root',
  imports: [CountryList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('holiday-app');
}
