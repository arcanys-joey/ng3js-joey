import { RenderTestModule } from './render-test.module';

describe('RenderTestModule', () => {
  let renderTestModule: RenderTestModule;

  beforeEach(() => {
    renderTestModule = new RenderTestModule();
  });

  it('should create an instance', () => {
    expect(renderTestModule).toBeTruthy();
  });
});
