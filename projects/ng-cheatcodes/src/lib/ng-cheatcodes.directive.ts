import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { NgCheatcodesService } from './ng-cheatcodes.service';

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
    ngCheatcodesService.cheat.subscribe(cheat => {
      if (cheat === this.cheatName) {
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
