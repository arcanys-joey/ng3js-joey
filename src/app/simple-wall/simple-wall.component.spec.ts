import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleWallComponent } from './simple-wall.component';

describe('SimpleWallComponent', () => {
  let component: SimpleWallComponent;
  let fixture: ComponentFixture<SimpleWallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleWallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleWallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
