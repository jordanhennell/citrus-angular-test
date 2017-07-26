import {TestBed, async} from '@angular/core/testing';

import {AppComponent} from './app.component';
import {AppModule} from './app.module';
import {SettingsComponent} from './settings-component/settings.component';
import {ReviewComponent} from './review-component/review.component';
import {SearchComponent} from './search-component/search.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        SettingsComponent,
        ReviewComponent,
        SearchComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
