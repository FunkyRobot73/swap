import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarvelcomicsComponent } from './marvelcomics.component';

describe('MarvelcomicsComponent', () => {
  let component: MarvelcomicsComponent;
  let fixture: ComponentFixture<MarvelcomicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarvelcomicsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarvelcomicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
