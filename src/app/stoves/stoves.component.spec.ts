import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StovesComponent } from './stoves.component';

describe('StovesComponent', () => {
  let component: StovesComponent;
  let fixture: ComponentFixture<StovesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StovesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StovesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
