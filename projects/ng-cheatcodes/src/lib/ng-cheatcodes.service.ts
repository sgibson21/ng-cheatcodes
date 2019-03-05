import { Injectable, Inject } from '@angular/core';
import { NgCheatCodeConfigToken, CheatKey, NgCheatCodeConfig } from './ng-cheatcodes-config-token';
import { fromEvent, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NgCheatCodesService {

  public cheat = new Subject();

  private cheatCodes: NgCheatCodeConfig[];

  private sequence: string[] = [];

  private longestLength: number;

  constructor(@Inject(NgCheatCodeConfigToken) config: NgCheatCodeConfig[]) {
    this.cheatCodes = config;
    this.longestLength = this.getLengthOfLongestCheatCode(config.map(c => c.cheatCode));
    this.listen();
  }

  public isActive(cheatName: string): boolean {
    const match = this.cheatCodes.find(c => c.name === cheatName);
    return match && match.isActive;
  }

  private listen() {
    fromEvent(document, 'keydown').subscribe((e: KeyboardEvent) => {
      const keyCode = e.key;
      this.sequence.push(keyCode);

      if (this.sequence.length > this.longestLength) {
        this.sequence.shift();
      }

      const match = this.findCheatCodeMatch();
      if (match) {
        match.isActive = !match.isActive;
        this.cheat.next(match.name);
      }

    });
  }

  private findCheatCodeMatch(): NgCheatCodeConfig {
    return this.cheatCodes.find(cc => this.isMatch(cc.cheatCode));
  }

  private isMatch(cheatCode: CheatKey[]): boolean {
    const toCheck = this.sequence.slice(this.sequence.length - cheatCode.length);
    return cheatCode.every((code: string, index: number) => code === toCheck[index]);
  }

  private getLengthOfLongestCheatCode(cheatCodes: CheatKey[][]) {
    return cheatCodes.reduce((maxL, el) => el.length > maxL ? el.length : maxL, 0);
  }

}
