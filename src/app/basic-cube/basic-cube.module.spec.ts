import { BasicCubeModule } from './basic-cube.module';

describe('BasicCubeModule', () => {
  let basicCubeModule: BasicCubeModule;

  beforeEach(() => {
    basicCubeModule = new BasicCubeModule();
  });

  it('should create an instance', () => {
    expect(basicCubeModule).toBeTruthy();
  });
});
