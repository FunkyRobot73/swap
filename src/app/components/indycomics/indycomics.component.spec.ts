import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndycomicsComponent } from './indycomics.component';

describe('IndycomicsComponent', () => {
  let component: IndycomicsComponent;
  let fixture: ComponentFixture<IndycomicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndycomicsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndycomicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
