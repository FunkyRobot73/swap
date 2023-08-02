import { TestBed } from '@angular/core/testing';

import { AddcomicService } from './addcomic.service';

describe('AddcomicService', () => {
  let service: AddcomicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddcomicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
