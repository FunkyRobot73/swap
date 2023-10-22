import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DcbronzeComponent } from './dcbronze.component';

describe('DcbronzeComponent', () => {
  let component: DcbronzeComponent;
  let fixture: ComponentFixture<DcbronzeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DcbronzeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DcbronzeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
