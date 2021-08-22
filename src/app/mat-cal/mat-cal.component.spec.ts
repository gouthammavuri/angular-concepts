import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatCalComponent } from './mat-cal.component';

describe('MatCalComponent', () => {
  let component: MatCalComponent;
  let fixture: ComponentFixture<MatCalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatCalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatCalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
