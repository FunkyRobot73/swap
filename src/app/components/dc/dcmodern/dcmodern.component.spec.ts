import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DcmodernComponent } from './dcmodern.component';

describe('DcmodernComponent', () => {
  let component: DcmodernComponent;
  let fixture: ComponentFixture<DcmodernComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DcmodernComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DcmodernComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
