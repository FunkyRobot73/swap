import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DcgoldenComponent } from './dcgolden.component';

describe('DcgoldenComponent', () => {
  let component: DcgoldenComponent;
  let fixture: ComponentFixture<DcgoldenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DcgoldenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DcgoldenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
