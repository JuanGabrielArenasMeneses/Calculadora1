import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagenArticulosServiciosComponent } from './imagen-articulos-servicios.component';

describe('ImagenArticulosServiciosComponent', () => {
  let component: ImagenArticulosServiciosComponent;
  let fixture: ComponentFixture<ImagenArticulosServiciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagenArticulosServiciosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagenArticulosServiciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
