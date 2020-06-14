import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryDisplayComponent } from './gallery-display.component';

describe('GalleryDisplayComponent', () => {
  let component: GalleryDisplayComponent;
  let fixture: ComponentFixture<GalleryDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
