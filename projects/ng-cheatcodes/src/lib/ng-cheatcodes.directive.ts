import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { NgCheatCodesService } from './ng-cheatcodes.service';

@Directive({
  selector: '[cheatCode]'
})
export class NgCheatCodesDirective {

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
    private ngCheatCodesService: NgCheatCodesService
  ) {
    ngCheatCodesService.cheat.subscribe(cheat => {
      if (cheat === this.cheatName) {
        this.toggleView();
      }
    });
  }

  private toggleView() {
    const isActive = this.ngCheatCodesService.isActive(this.cheatName);
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
