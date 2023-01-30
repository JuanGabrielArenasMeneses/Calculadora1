import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EqualsComponent } from './equals.component';

describe('EqualsComponent', () => {
  let component: EqualsComponent;
  let fixture: ComponentFixture<EqualsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EqualsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EqualsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
