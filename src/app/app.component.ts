import { Component } from '@angular/core';
import { NgCheatcodesService } from 'projects/ng-cheatcodes/src/public_api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  title = 'ng-cheatcodes-demo';

  cheatCodes = [];

  constructor(ngCheatcodesService: NgCheatcodesService) {
    ngCheatcodesService.cheat.subscribe(cheat => {
      this.cheatCodes.push(cheat);
    });
  }

}
