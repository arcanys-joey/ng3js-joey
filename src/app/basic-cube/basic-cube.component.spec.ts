import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicCubeComponent } from './basic-cube.component';

describe('BasicCubeComponent', () => {
  let component: BasicCubeComponent;
  let fixture: ComponentFixture<BasicCubeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicCubeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicCubeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
