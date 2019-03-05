# NgCheatcodes

Toggle features by adding cheat codes to your Angular application.

## Installation

To install this library, run:

```bash
$ npm install ng-cheatcodes --save
```

## Getting started

Once you have installed ng-cheatcodes, import the module in your Angular application:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import the module
import { NgCheatcodesModule, CheatKey } from 'ng-cheatcodes';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    // Configure the module with your custom cheat codes.
    // Just provide a name and a set of cheat keys
    NgCheatcodesModule.forRoot([
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
  providers: [ ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
```

Use the Structural directive in your Angular application just like *ngFor:

```xml
<!-- Provide the name of the cheat code that the DIV should be toggled by -->
<div *cheatCode="'konami'">Hello World!</div>
```

Use the NgCheatcodesService to subscribe to cheat events.

```typescript
constructor(ngCheatcodesService: NgCheatcodesService) {
  ngCheatcodesService.cheat.subscribe((cheatName: string) => {
    // Use the cheat name to toggle component behaviour
  });
}
```


This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.2.0.

## License

MIT ©
