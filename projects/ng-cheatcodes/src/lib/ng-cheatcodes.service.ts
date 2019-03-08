import { Injectable, Inject } from '@angular/core';
import { NgCheatcodeConfigToken, CheatKey, NgCheatcodeConfig, NgCheatcodeEvent } from './ng-cheatcodes-config-token';
import { fromEvent, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NgCheatcodesService {

  public cheat = new Subject<NgCheatcodeEvent>();

  private cheatCodes: NgCheatcodeConfig[];

  private sequence: string[] = [];

  private longestLength: number;

  constructor(@Inject(NgCheatcodeConfigToken) config: NgCheatcodeConfig[]) {
    this.cheatCodes = config;
    this.longestLength = this.getLengthOfLongestCheatcode(config.map(c => c.cheatCode));
    this.listen();
  }

  public isActive(cheatName: string): boolean {
    const match = this.cheatCodes.find(c => c.name === cheatName);
    return match && match.isActive;
  }

  private listen() {
    fromEvent(document, 'keydown').subscribe((e: KeyboardEvent) => {
      const key = e.key;
      this.sequence.push(key);

      if (this.sequence.length > this.longestLength) {
        this.sequence.shift();
      }

      const match = this.findCheatcodeMatch();
      if (match) {
        match.isActive = !match.isActive;
        this.cheat.next({
          name: match.name,
          isActive: match.isActive
        });
      }

    });
  }

  private findCheatcodeMatch(): NgCheatcodeConfig {
    return this.cheatCodes.find(cc => this.isMatch(cc.cheatCode));
  }

  private isMatch(cheatCode: CheatKey[]): boolean {
    const toCheck = this.sequence.slice(this.sequence.length - cheatCode.length);
    return cheatCode.every((code: string, index: number) => code === toCheck[index]);
  }

  private getLengthOfLongestCheatcode(cheatCodes: CheatKey[][]) {
    return cheatCodes.reduce((maxL, el) => el.length > maxL ? el.length : maxL, 0);
  }

}
