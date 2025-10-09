import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private baseUrl = 'https://date.nager.at/api/v3/'

  constructor(private http: HttpClient) {}

  getCountries(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl + 'AvailableCountries');
  }

  getHolidays(year: number, code: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}PublicHolidays/${year}/${code}`);
  }

  getCountryInfo(code: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}GetPublicHolidays/${code}`);
  }
}
