import { NgModule, Optional, SkipSelf, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Main3jsService } from './services/main3js.service';
import { ConfigService } from './services/config.service';
import { UtilsService } from './services/utils.service';
import { TranslateService } from './services/translate.service';
import { CubeDataService } from './services/cube-data.service';
import { CubeService } from './services/cube.service';
import { THREEJS_TOKEN, CONFIG_TOKEN, ORBIT_CONTROLS_TOKEN } from './threejs.tokens';
import * as THREE from 'three';
import { Config } from './config';
import { OrbitControls } from '@avatsaev/three-orbitcontrols-ts';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    {
      provide: CONFIG_TOKEN,
      useValue: ConfigService.defaults
    },
    {
      provide: ORBIT_CONTROLS_TOKEN,
      useValue: OrbitControls
    },
    {
      provide: THREEJS_TOKEN,
      useValue: THREE
    },
    UtilsService,
    TranslateService,
    Main3jsService,
    CubeDataService,
    CubeService
  ]
})
export class ThreejsModule {
  constructor (@Optional() @SkipSelf() parentModule: ThreejsModule) {
    if (parentModule) {
      throw new Error('ThreejsModule is already loaded. Import it in the AppModule only');
    }
  }

  /**
   * 
   * @param config 
   */
  public static forRoot(config?: Config): ModuleWithProviders {
    return {
      ngModule: ThreejsModule,
      providers: [
        {
          provide: CONFIG_TOKEN,
          useValue: ConfigService.getConfig(config)
        },
        {
          provide: ORBIT_CONTROLS_TOKEN,
          useValue: OrbitControls
        },
        {
          provide: THREEJS_TOKEN,
          useValue: THREE
        },
        Main3jsService,
        UtilsService,
        CubeDataService,
        CubeService
      ]
    };
  }
}
