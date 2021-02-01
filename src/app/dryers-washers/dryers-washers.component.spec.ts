import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DryersWashersComponent } from './dryers-washers.component';

describe('DryersWashersComponent', () => {
  let component: DryersWashersComponent;
  let fixture: ComponentFixture<DryersWashersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DryersWashersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DryersWashersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
