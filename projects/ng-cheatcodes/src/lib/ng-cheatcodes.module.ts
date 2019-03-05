import { NgModule, ModuleWithProviders } from '@angular/core';
import { NgCheatcodesService } from './ng-cheatcodes.service';
import { NgCheatcodesDirective } from './ng-cheatcodes.directive';
import { NgCheatcodeConfig, NgCheatcodeConfigToken } from './ng-cheatcodes-config-token';
import { defaultCheatcodes } from './default-cheatcodes';

@NgModule({
  declarations: [NgCheatcodesDirective],
  imports: [],
  providers: [
    {
      provide: NgCheatcodeConfigToken,
      useValue: defaultCheatcodes
    }
  ],
  exports: [NgCheatcodesDirective]
})
export class NgCheatcodesModule {

  public static forRoot(config: NgCheatcodeConfig[]): ModuleWithProviders {
    return {
      ngModule: NgCheatcodesModule,
      providers: [
        NgCheatcodesService,
        {
          provide: NgCheatcodeConfigToken,
          useValue: config
        }
      ]
    };
  }

}
