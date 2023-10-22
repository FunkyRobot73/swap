import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarvelmodernComponent } from './marvelmodern.component';

describe('MarvelmodernComponent', () => {
  let component: MarvelmodernComponent;
  let fixture: ComponentFixture<MarvelmodernComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarvelmodernComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarvelmodernComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
