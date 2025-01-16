import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomecomComponent } from './homecom.component';

describe('HomecomComponent', () => {
  let component: HomecomComponent;
  let fixture: ComponentFixture<HomecomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomecomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomecomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
