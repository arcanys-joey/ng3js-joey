import { NgModule, Optional, SkipSelf, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Main3jsService } from './main3js.service';
import { ConfigService } from './config.service';
import { THREEJS_TOKEN, CONFIG_TOKEN, DEFAULT_CONFIG_TOKEN } from './threejs.tokens';
import * as THREE from 'three';
import { Config } from 'threejs/config';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    {
      provide: THREEJS_TOKEN,
      useValue: THREE
    },
    {
      provide: CONFIG_TOKEN,
      useValue: ConfigService.defaults
    },
    Main3jsService
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
          provide: THREEJS_TOKEN,
          useValue: THREE
        },
        Main3jsService
      ]
    };
  }
}
