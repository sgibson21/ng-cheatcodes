import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgCheatCodesModule } from 'projects/ng-cheatcodes/src/public_api';
import { CheatKey } from 'projects/ng-cheatcodes/src/lib/ng-cheatcodes-config-token';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, NgCheatCodesModule.forRoot([
      {
        name: 'a b c',
        cheatCode: [CheatKey.a, CheatKey.b, CheatKey.c]
      },
      {
        name: 'konami',
        cheatCode: [
          CheatKey.up,
          CheatKey.up,
          CheatKey.down,
          CheatKey.down,
          CheatKey.left,
          CheatKey.right,
          CheatKey.left,
          CheatKey.right,
          CheatKey.b,
          CheatKey.a]
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
