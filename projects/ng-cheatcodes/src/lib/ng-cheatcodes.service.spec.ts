import { TestBed } from '@angular/core/testing';

import { NgCheatCodesService } from './ng-cheatcodes.service';

describe('NgCheatCodesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgCheatCodesService = TestBed.get(NgCheatCodesService);
    expect(service).toBeTruthy();
  });
});
