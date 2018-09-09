import { WthCubeModule } from './wth-cube.module';

describe('WthCubeModule', () => {
  let wthCubeModule: WthCubeModule;

  beforeEach(() => {
    wthCubeModule = new WthCubeModule();
  });

  it('should create an instance', () => {
    expect(wthCubeModule).toBeTruthy();
  });
});
