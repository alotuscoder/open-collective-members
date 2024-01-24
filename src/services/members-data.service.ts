import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import OpenSourceCollective from 'src/interfaces/open-source-collective.interface';

@Injectable({
  providedIn: 'root'
})
export class MembersDataService {
  apiURL : string;

  constructor(private http : HttpClient) {
    const limit = 5;
    const offset = 3
    this.apiURL = 'https://opencollective.com/webpack/members/organizations.json?limit=50&offset=0';
  }

  getMembersData() : Observable<OpenSourceCollective[]> {
    return this.http.get<OpenSourceCollective[]>(this.apiURL);
  }
}
