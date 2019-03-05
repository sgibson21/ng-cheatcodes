import { TestBed } from '@angular/core/testing';

import { NgCheatcodesService } from './ng-cheatcodes.service';

describe('NgCheatcodesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgCheatcodesService = TestBed.get(NgCheatcodesService);
    expect(service).toBeTruthy();
  });
});
