import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarvelsilverComponent } from './marvelsilver.component';

describe('MarvelsilverComponent', () => {
  let component: MarvelsilverComponent;
  let fixture: ComponentFixture<MarvelsilverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarvelsilverComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarvelsilverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
