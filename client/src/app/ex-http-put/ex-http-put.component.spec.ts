import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExHttpPutComponent } from './ex-http-put.component';

describe('ExHttpPutComponent', () => {
  let component: ExHttpPutComponent;
  let fixture: ComponentFixture<ExHttpPutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExHttpPutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExHttpPutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
