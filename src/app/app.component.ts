import { Component } from '@angular/core';
import { SearchWikiService } from './shared/search-wiki.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  query: string;
  searchResponse: any = [];
  selectedMatchId: number;
  selectedMatchContent: string;
  selectedMatchLink: string;
  constructor(private searchWikiService: SearchWikiService) {
  };

  selectedMatch(index) {
    this.selectedMatchId = index;
    this.selectedMatchContent = this.searchResponse[2][this.selectedMatchId];
    this.selectedMatchLink = this.searchResponse[3][this.selectedMatchId];
  }
  isSelectedMatch(index) {
    return this.selectedMatchId === index;
  }
  search() {
   // console.log(this.query);
    if(this.query) {
        this.searchWikiService.getSearchResult(this.query).subscribe(res => {
        this.searchResponse = res.json();
        this.selectedMatch(0);
      });
    }
  }
}
