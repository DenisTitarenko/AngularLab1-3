import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HzComponent } from './hz.component';

describe('HzComponent', () => {
  let component: HzComponent;
  let fixture: ComponentFixture<HzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HzComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
