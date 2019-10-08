import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { GameSearch } from '../../../game-search.service'

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.css']
})
export class SplashComponent implements OnInit {

  

  public results: any = [];
  public searching: any = false;
  public searchError: any = '';

  constructor(private _gameSearch: GameSearch,
    
    ) {}

  toggleSearching(){
    this.searching = !this.searching;
  }

  search(query){
    this.toggleSearching();
    // if(query.length >= 3){}else {searchError = 'Please enter at least 3 characters.'}
    this._gameSearch.fetch(query)
      .subscribe(data => {this.results = data; console.log(data); this.toggleSearching()})
  }

  ngOnInit() {
  }

}
