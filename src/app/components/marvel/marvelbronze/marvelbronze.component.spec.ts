import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarvelbronzeComponent } from './marvelbronze.component';

describe('MarvelbronzeComponent', () => {
  let component: MarvelbronzeComponent;
  let fixture: ComponentFixture<MarvelbronzeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarvelbronzeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarvelbronzeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
