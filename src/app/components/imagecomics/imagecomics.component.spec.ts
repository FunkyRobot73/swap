import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagecomicsComponent } from './imagecomics.component';

describe('ImagecomicsComponent', () => {
  let component: ImagecomicsComponent;
  let fixture: ComponentFixture<ImagecomicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagecomicsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImagecomicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
