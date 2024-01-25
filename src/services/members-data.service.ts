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
    this.apiURL = 'https://opencollective.com/mastodon/members/organizations.json?limit=50&offset=2';
  }

  getMembersData() : Observable<OpenSourceCollective[]> {
    return this.http.get<OpenSourceCollective[]>(this.apiURL);
  }
}
