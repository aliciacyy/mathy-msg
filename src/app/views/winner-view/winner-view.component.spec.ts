import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WinnerViewComponent } from './winner-view.component';

describe('WinnerViewComponent', () => {
  let component: WinnerViewComponent;
  let fixture: ComponentFixture<WinnerViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WinnerViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WinnerViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
