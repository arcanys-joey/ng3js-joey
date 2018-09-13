/*
 We use the this array to check if that specific property of the wallframe can be rendered
*/
export const DESIGN_COMPONENT_PARTS = [
  'angle_bracing', 'beam_pockets', 'bottom_plates', 'box_trimmers', 'bracing_studs',
  'common_studs', 'head_trimmers', 'jamb_studs', 'nogs', 'over_studs', 'sheet_bracing',
  'sill_trimmers', 'top_plates', 'under_studs', 'lintels', 'loaded_studs', 'junction_blocks'
];

/*
 We are interested only for the Wall and Wallframe properties of the design file (for now)
*/
export enum WALL_CLASSES {
  WALL = 'AedGlobal::Structure::Wall',
  WALL_FRAME = 'AedGlobal::Structure::WallFrame'
}

/*
  This are all the component classes that will be rendered on the view
  TODO: Add any missing component class here
*/
export enum COMPONENT_PART_CLASSES {
  TOP_PLATE = 'AedGlobal::Structure::TopPlate',
  BOTTOM_PLATE = 'AedGlobal::Structure::BottomPlate',
  COMMON_STUD = 'AedGlobal::Structure::CommonStud',
  STANDARD_NOG = 'AedGlobal::Structure::StandardNog'
}

/*
 We map each component parts to avoid duplicating the data to be renderer. 
 We then use this data to look up/traverse the parents transform properties
 As much as possible we should not establish strong coupling between the wall/wallframes and its components
*/
export interface ComponentMap {
  type: string;
  levelIndex: number;
  wallIndex: number;
  wallID: number;
  wallFrameIndex: number;
  wallFrameID: number;
  partMap: string;
  partMapIndex: number;
}

/*
 Components will be group togethers during rendering to respect the wall rotation data
*/
export interface ComponentGroupMap {
  levelIndex: number;
  wallIndex: number;
  wallFrameIndex: number;
}

import { Axes } from '../threejs/services/icube';

/**
 * 
 */
export interface ComponentData {
  position: Axes;
  rotation: Axes;
  length: number;
  width: number;
  depth: number;
}

export interface TransformData {
  location: Axes;
  rotation: Axes;
}



