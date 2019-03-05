import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgCheatcodesModule, konamiCheatcode } from 'projects/ng-cheatcodes/src/public_api';
import { CheatKey } from 'projects/ng-cheatcodes/src/lib/ng-cheatcodes-config-token';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, NgCheatcodesModule.forRoot([
      {
        name: 'a b c',
        cheatCode: [CheatKey.a, CheatKey.b, CheatKey.c]
      },
      konamiCheatcode
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
