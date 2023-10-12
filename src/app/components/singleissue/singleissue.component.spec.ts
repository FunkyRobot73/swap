import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleissueComponent } from './singleissue.component';

describe('SingleissueComponent', () => {
  let component: SingleissueComponent;
  let fixture: ComponentFixture<SingleissueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleissueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleissueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
