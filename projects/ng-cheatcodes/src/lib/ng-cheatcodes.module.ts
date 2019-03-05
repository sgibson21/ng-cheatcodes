import { NgModule, ModuleWithProviders } from '@angular/core';
import { NgCheatCodesService } from './ng-cheatcodes.service';
import { NgCheatCodesDirective } from './ng-cheatcodes.directive';
import { NgCheatCodeConfig, NgCheatCodeConfigToken } from './ng-cheatcodes-config-token';

@NgModule({
  declarations: [NgCheatCodesDirective],
  imports: [],
  exports: [NgCheatCodesDirective]
})
export class NgCheatCodesModule {

  public static forRoot(config: NgCheatCodeConfig[]): ModuleWithProviders {
    return {
      ngModule: NgCheatCodesModule,
      providers: [
        NgCheatCodesService,
        {
          provide: NgCheatCodeConfigToken,
          useValue: config
        }
      ]
    };
  }

}
