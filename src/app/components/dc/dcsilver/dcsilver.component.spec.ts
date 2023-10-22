import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DcsilverComponent } from './dcsilver.component';

describe('DcsilverComponent', () => {
  let component: DcsilverComponent;
  let fixture: ComponentFixture<DcsilverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DcsilverComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DcsilverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
