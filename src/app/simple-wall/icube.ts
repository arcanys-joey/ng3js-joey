export interface Axes {
  x: number;
  y: number;
  z: number;
}

export interface Dimensions {
  width: number;
  length: number;
  depth: number;
}

export interface CubeData {

    /**
   * @property
   */
  position: Axes;

  /**
   * @property
   */
  rotation: Axes;

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
