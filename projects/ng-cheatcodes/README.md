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
import { NgCheatcodesModule } from 'ng-cheatcodes';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgCheatcodesModule
  ],
  providers: [ ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
```
The Konami code will be available by default (up, up, down, down, left, right, left, right, b, a)

Aditionally, you can configure your own cheat codes:

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
    // Just provide a name and a set of cheat keys.
    NgCheatcodesModule.forRoot([
      {
        name: 'superUser',
        cheatCode: [
          CheatKey.up,
          CheatKey.right,
          CheatKey.down,
          CheatKey.left,
          CheatKey.a
          CheatKey.b,
          CheatKey.c
        ]
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

When providing your own cheat codes, you will lose the Konami code. You can import the Konami cheat code to add to your own list of cheat codes:

```typescript
import { NgCheatcodesModule, CheatKey, konamiCheatcode } from 'ng-cheatcodes';

...

NgCheatcodesModule.forRoot([
  {
    name: 'superUser',
    cheatCode: [
      CheatKey.up,
      CheatKey.right,
      CheatKey.down,
      CheatKey.left,
      CheatKey.a
      CheatKey.b,
      CheatKey.c
    ]
  },
  konamiCheatcode
]
```

Use the Structural directive in your Angular application just like *ngIf:

```xml
<!-- Provide the name of the cheat code that must be triggered, for the div to be rendered -->
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
