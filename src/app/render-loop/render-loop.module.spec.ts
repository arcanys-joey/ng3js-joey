import { RenderLoopModule } from './render-loop.module';

describe('RenderLoopModule', () => {
  let renderLoopModule: RenderLoopModule;

  beforeEach(() => {
    renderLoopModule = new RenderLoopModule();
  });

  it('should create an instance', () => {
    expect(renderLoopModule).toBeTruthy();
  });
});
