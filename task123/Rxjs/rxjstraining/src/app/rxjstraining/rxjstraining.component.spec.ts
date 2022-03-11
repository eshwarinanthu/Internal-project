import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjstrainingComponent } from './rxjstraining.component';

describe('RxjstrainingComponent', () => {
  let component: RxjstrainingComponent;
  let fixture: ComponentFixture<RxjstrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RxjstrainingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjstrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
