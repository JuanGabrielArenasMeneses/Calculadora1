import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiplicateComponent } from './multiplicate.component';

describe('MultiplicateComponent', () => {
  let component: MultiplicateComponent;
  let fixture: ComponentFixture<MultiplicateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiplicateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiplicateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
