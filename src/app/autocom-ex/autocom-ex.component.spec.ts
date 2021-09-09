import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocomExComponent } from './autocom-ex.component';

describe('AutocomExComponent', () => {
  let component: AutocomExComponent;
  let fixture: ComponentFixture<AutocomExComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutocomExComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutocomExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
