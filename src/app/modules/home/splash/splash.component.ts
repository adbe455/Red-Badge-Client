import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GameSearch } from 'src/app/services/game-search.service';
import { IgdbAuth } from 'src/app/services/igdb-auth.service';



@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.scss']
  
})
export class SplashComponent implements OnInit {



  public results: any = [];
  public searching: any = false;
  public searchError: any = '';
  public query: any;

  constructor(
    private _igdbAuth: IgdbAuth,
    private _gameSearch: GameSearch,
    private route: ActivatedRoute,
    private router: Router,
    ) {}

  ngOnInit() {
    if(localStorage.getItem('igdb') == null)
    {
      this._igdbAuth.fetch()
      .subscribe(data => {
        localStorage.setItem('igdb', JSON.stringify({ token: data }));
      })
    }
  }

  toggleSearching(){
    this.searching = !this.searching;
  }

  search(query: string){
    this.toggleSearching();
    // if(query.length >= 3){}else {searchError = 'Please enter at least 3 characters.'}
    this._gameSearch.fetch(query, 0) //static offset, fix this
    .subscribe(data => {this.results = data; console.log(data); this.toggleSearching()})
  }

  onEnter(query: string) {
    // this.router.navigate({path: `/search/${query}`})
    this.router.navigate([`/search/${query}`], {relativeTo: this.route})
    this.search(query)
  }

}
