import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatConExComponent } from './mat-con-ex.component';

describe('MatConExComponent', () => {
  let component: MatConExComponent;
  let fixture: ComponentFixture<MatConExComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatConExComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatConExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
