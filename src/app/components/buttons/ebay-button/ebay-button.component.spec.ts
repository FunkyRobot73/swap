import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EbayButtonComponent } from './ebay-button.component';

describe('EbayButtonComponent', () => {
  let component: EbayButtonComponent;
  let fixture: ComponentFixture<EbayButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EbayButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EbayButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
