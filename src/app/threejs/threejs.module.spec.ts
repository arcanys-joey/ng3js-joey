import { ThreejsModule } from './threejs.module';

describe('ThreejsModule', () => {
  let threejsModule: ThreejsModule;

  beforeEach(() => {
    threejsModule = new ThreejsModule();
  });

  it('should create an instance', () => {
    expect(threejsModule).toBeTruthy();
  });
});
