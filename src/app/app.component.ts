import { Component } from '@angular/core';
import { NgCheatcodesService, NgCheatcodeEvent } from 'projects/ng-cheatcodes/src/public_api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  title = 'ng-cheatcodes-demo';

  cheatcodeLog: string[] = [];

  constructor(ngCheatcodesService: NgCheatcodesService) {
    ngCheatcodesService.cheat.subscribe((cheatcodeEvent: NgCheatcodeEvent) => {
      this.cheatcodeLog.push(`"${cheatcodeEvent.name}" ${cheatcodeEvent.isActive ? 'activated' : 'deactivated'}`);
    });
  }

}
