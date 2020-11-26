import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClickTravelService {

  protected apiBaseUrl: string = 'https://travel-api.clicksomeone.com';

  constructor(protected httpClient: HttpClient) {

  }

  get(url: string) {
    return this.httpClient.get(`${this.apiBaseUrl}${url}`);
  }

}

