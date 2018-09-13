import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RenderLoopComponent } from './render-loop.component';

describe('RenderLoopComponent', () => {
  let component: RenderLoopComponent;
  let fixture: ComponentFixture<RenderLoopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RenderLoopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RenderLoopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
