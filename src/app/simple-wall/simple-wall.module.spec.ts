import { SimpleWallModule } from './simple-wall.module';

describe('SimpleWallModule', () => {
  let simpleWallModule: SimpleWallModule;

  beforeEach(() => {
    simpleWallModule = new SimpleWallModule();
  });

  it('should create an instance', () => {
    expect(simpleWallModule).toBeTruthy();
  });
});
