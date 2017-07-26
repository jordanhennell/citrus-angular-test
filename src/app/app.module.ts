import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { SettingsComponent } from './settings-component/settings.component';
import { SearchComponent } from './search-component/search.component';
import { ReviewComponent } from './review-component/review.component';

const appRoutes: Routes = [
  { path: 'settings', component: SettingsComponent },
  { path: 'search',      component: SearchComponent },
  { path: 'review', component: ReviewComponent },
  { path: '', redirectTo: '/settings', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    SettingsComponent,
    SearchComponent,
    ReviewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
