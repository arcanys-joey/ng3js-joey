import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WthCubeComponent } from './wth-cube.component';

describe('WthCubeComponent', () => {
  let component: WthCubeComponent;
  let fixture: ComponentFixture<WthCubeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WthCubeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WthCubeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
