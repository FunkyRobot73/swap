import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarvelgoldenComponent } from './marvelgolden.component';

describe('MarvelgoldenComponent', () => {
  let component: MarvelgoldenComponent;
  let fixture: ComponentFixture<MarvelgoldenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarvelgoldenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarvelgoldenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
