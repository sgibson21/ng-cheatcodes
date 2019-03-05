import { Component } from '@angular/core';
import { NgCheatCodesService } from 'projects/ng-cheatcodes/src/public_api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  title = 'ng-cheatcodes-demo';

  cheatCodes = [];

  constructor(ngCheatCodesService: NgCheatCodesService) {
    ngCheatCodesService.cheat.subscribe(cheat => {
      this.cheatCodes.push(cheat);
    });
  }

}
