// @angular imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; // <-- NgModel lives here
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';


// MDB Imports
import { MDBBootstrapModule } from 'angular-bootstrap-md';


// component imports
import { AppComponent } from './app.component';
import { AuthComponent } from './core/auth/auth.component';
import { LoadingSpinnerComponent } from '../app/shared/loading-spinner/loading-spinner.component';
import { SplashComponent } from './modules/home/splash/splash.component';
import { NavbarComponent } from './core/header/navbar/navbar.component';
import { GameReviewComponent } from './modules/game-review/game-review/game-review.component';
import { GameForumComponent } from './modules/game-forum/game-forum/game-forum.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SearchDisplayComponent } from './search-display/search-display.component';
import { GeneralDiscussionComponent } from './modules/game-forum/game-forum/general-discussion/general-discussion.component';
import { ForumDisplayComponent } from './modules/game-forum/game-forum/forum-display/forum-display.component';
import { RedirectComponent } from './redirect/redirect.component';
import { AdminComponent } from './admin/admin.component';
// import { StripeComponent } from './stripe/stripe.component';


// service imports
import { GameSearch } from './services/game-search.service';
import { GameReview } from './services/game-review.service';
import { AuthService } from './core/auth/auth.service';
import { GameForumService } from './modules/game-forum/game-forum/game-forum.service';
import { AuthGuard } from './core/guards/auth-guard.service';


// pipe imports
import { SafePipe } from './shared/safe.pipe';


// Modules
import { AppRoutingModule } from './app-routing/app-routing.module';


// directive imports



@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    LoadingSpinnerComponent,
    SplashComponent,
    NavbarComponent,
    GameReviewComponent,
    PageNotFoundComponent,
    SearchDisplayComponent,
    GameForumComponent,
    SafePipe,
    GeneralDiscussionComponent,
    RedirectComponent,
    AdminComponent,
    ForumDisplayComponent,
    // StripeComponent,
    
  ],
  entryComponents:[
    GameReviewComponent,
    AuthComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
  ],
  exports: [
    GameReviewComponent,
    
  ],
  providers: [
    HttpClient,
    GameSearch,
    GameReview,
    AuthService,
    GameForumService,
    AuthGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
