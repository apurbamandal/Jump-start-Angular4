import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class SearchWikiService {

  constructor(private http: Http) { }

  getSearchResult(query) {
    return this.http.get('https://en.wikipedia.org/w/api.php?action=opensearch&search=' + query + '&limit=10&format=json');
  }

}
