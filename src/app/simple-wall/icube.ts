export interface IAxes {
  x: number;
  y: number;
  z: number;
}

export interface CubeData {

    /**
   * @property
   */
  position: IAxes;

  /**
   * @property
   */
  rotation: IAxes;

  /**
   * @property
   */
  width: number;

  /**
   * @property
   */
  depth: number;

  /**
   * @property
   */
  length: number;

  /**
   * @property
   * only appears on some timber types, use this over length if defined
   */
  height?: number;
}
