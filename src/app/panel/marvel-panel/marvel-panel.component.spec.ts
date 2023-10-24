import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarvelPanelComponent } from './marvel-panel.component';

describe('MarvelPanelComponent', () => {
  let component: MarvelPanelComponent;
  let fixture: ComponentFixture<MarvelPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarvelPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarvelPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
