import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { NgCheatcodesService } from './ng-cheatcodes.service';
import { NgCheatcodeEvent } from './ng-cheatcodes-config-token';

@Directive({
  selector: '[cheatCode]'
})
export class NgCheatcodesDirective {

  @Input()
  public set cheatCode(cheatName: string) {
    this.cheatName = cheatName;
    this.toggleView();
  }

  private hasView = false;

  private cheatName: string;

  constructor(
    private viewContainer: ViewContainerRef,
    private templateRef: TemplateRef<any>,
    private ngCheatcodesService: NgCheatcodesService
  ) {
    ngCheatcodesService.cheat.subscribe((cheatcodeEvent: NgCheatcodeEvent) => {
      if (cheatcodeEvent && cheatcodeEvent.name === this.cheatName) {
        this.toggleView();
      }
    });
  }

  private toggleView() {
    const isActive = this.ngCheatcodesService.isActive(this.cheatName);
    if (!this.hasView && isActive) {
      this.createView();
    } else if (this.hasView && !isActive) {
      this.clearView();
    }
  }

  private createView() {
    this.viewContainer.createEmbeddedView(this.templateRef);
    this.hasView = true;
  }

  private clearView() {
    this.viewContainer.clear();
    this.hasView = false;
  }

}
