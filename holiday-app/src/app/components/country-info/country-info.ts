import {Component, Input} from '@angular/core';
import {CountryService} from '../../services/country';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-country-info',
  imports: [
    NgIf,
    NgForOf
  ],
  templateUrl: './country-info.html',
  styleUrl: './country-info.css',
  standalone: true,
})
export class CountryInfo {
  @Input() countryCode!: string;
  holidays: any[] = [];
  loaded = false;

  constructor(private countryService: CountryService) {}

  ngOnChanges(): void {
    if (this.countryCode) {
      this.loadHolidays();
    }
  }

  loadHolidays() {
    const currentYear = new Date().getFullYear();
    this.countryService.getHolidays(currentYear, this.countryCode).subscribe(data => {
      this.holidays = data;
      this.loaded = true;
    });
  }
}
