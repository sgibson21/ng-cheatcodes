import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgCheatcodesModule, konamiCheatcode, CheatKey } from 'projects/ng-cheatcodes/src/public_api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, NgCheatcodesModule.forRoot([
      konamiCheatcode,
      {
        name: 'a b c',
        cheatCode: [CheatKey.a, CheatKey.b, CheatKey.c]
      },
      {
        name: 'super user',
        cheatCode: [
          CheatKey.s,
          CheatKey.u,
          CheatKey.p,
          CheatKey.e,
          CheatKey.r,
          CheatKey.space,
          CheatKey.u,
          CheatKey.s,
          CheatKey.e,
          CheatKey.r,
          CheatKey.one,
          CheatKey.two,
          CheatKey.three
        ]
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
