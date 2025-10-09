import { Component, OnInit } from '@angular/core';
import {CountryService} from '../../services/country';
import {CountryInfo} from '../country-info/country-info';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-country-list',
  imports: [
    CountryInfo,
    NgForOf,
    NgIf,
  ],
  standalone: true,
  templateUrl: './country-list.html',
  styleUrl: './country-list.css'
})
export class CountryList {
  countries: any[] = [];
  selectedCode: string = '';

  constructor(private countryService: CountryService) {}

  ngOnInit(): void {
    this.loadCountries();
  }

  loadCountries() {
    this.countryService.getCountries().subscribe(data => {
      this.countries = data;
    });
  }

  onSelectCountry(code: string) {
    this.selectedCode = code;
  }
}
