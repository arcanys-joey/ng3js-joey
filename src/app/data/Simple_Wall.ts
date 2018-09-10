export const Simple_Wall = {
    '^o': 'AedGlobal::Structure::Project',
    'config': {
        '^o': 'AedGlobal::Structure::Configuration',
        'guid': 'da014fbb-bc65-47ed-91f3-1b1ad8dffafd',
        'fabricator_id': '5b291aabf8e746000fde6591',
        'designer_id': '5b84bbcbaa8f500015014941',
        'wind_speed': ':n2',
        'job_number': 'Job2A',
        'address_1': 'Park St24',
        'address_2': 'Sydney New South Wales',
        'city': 'Sydney New South Wales',
        'ext_lb_stud_centres': 450,
        'ext_non_lb_stud_centres': 450,
        'int_lb_stud_centres': 450,
        'int_non_lb_stud_centres': 600,
        'auth_url': 'https://authapi.aedglobal.com.au',
        'design_url': 'https://designapi.aedglobal.com.au'
    },
    'id_counter': 3,
    'levels': [
        [
            {
                '^o': 'AedGlobal::Structure::Slab',
                'id': 1,
                'vertices': [
                    {
                        '^o': 'AedGlobal::Structure::Location',
                        'x': 150,
                        'y': 150,
                        'z': 300
                    },
                    {
                        '^o': 'AedGlobal::Structure::Location',
                        'x': 3850,
                        'y': 150,
                        'z': 300
                    },
                    {
                        '^o': 'AedGlobal::Structure::Location',
                        'x': 3850,
                        'y': 3850,
                        'z': 300
                    },
                    {
                        '^o': 'AedGlobal::Structure::Location',
                        'x': 150,
                        'y': 3850,
                        'z': 300
                    }
                ],
                'transform': {
                    '^o': 'AedGlobal::Structure::Transform',
                    'location': {
                        '^o': 'AedGlobal::Structure::Location',
                        'x': 0,
                        'y': 0,
                        'z': 0
                    },
                    'rotation': {
                        '^o': 'AedGlobal::Structure::Rotation',
                        'x': 0,
                        'y': 0,
                        'z': 0
                    }
                },
                'top_height': 300,
                'bottom_height': 0
            },
            {
                '^o': 'AedGlobal::Structure::Wall',
                'id': 2,
                'vertices': [
                    {
                        '^o': 'AedGlobal::Structure::Location',
                        'x': 0,
                        'y': 0,
                        'z': 0
                    },
                    {
                        '^o': 'AedGlobal::Structure::Location',
                        'x': 0,
                        'y': 0,
                        'z': 2440
                    },
                    {
                        '^o': 'AedGlobal::Structure::Location',
                        'x': 3700,
                        'y': 0,
                        'z': 2440
                    },
                    {
                        '^o': 'AedGlobal::Structure::Location',
                        'x': 3700,
                        'y': 0,
                        'z': 0
                    },
                    {
                        '^o': 'AedGlobal::Structure::Location',
                        'x': 0,
                        'y': 70,
                        'z': 0
                    },
                    {
                        '^o': 'AedGlobal::Structure::Location',
                        'x': 0,
                        'y': 70,
                        'z': 2440
                    },
                    {
                        '^o': 'AedGlobal::Structure::Location',
                        'x': 3700,
                        'y': 70,
                        'z': 2440
                    },
                    {
                        '^o': 'AedGlobal::Structure::Location',
                        'x': 3700,
                        'y': 70,
                        'z': 0
                    }
                ],
                'transform': {
                    '^o': 'AedGlobal::Structure::Transform',
                    'location': {
                        '^o': 'AedGlobal::Structure::Location',
                        'x': 150,
                        'y': 150,
                        'z': 300
                    },
                    'rotation': {
                        '^o': 'AedGlobal::Structure::Rotation',
                        'x': 0,
                        'y': 0,
                        'z': 0
                    }
                },
                'wall_frames': [
                    {
                        '^o': 'AedGlobal::Structure::WallFrame',
                        'transform': {
                            '^o': 'AedGlobal::Structure::Transform',
                            'location': {
                                '^o': 'AedGlobal::Structure::Location',
                                'x': 0,
                                'y': 0,
                                'z': 0
                            },
                            'rotation': {
                                '^o': 'AedGlobal::Structure::Rotation',
                                'x': 0,
                                'y': 0,
                                'z': 0
                            }
                        },
                        'id': 3,
                        'incoming_loads': [
                            {
                                '^o': 'AedGlobal::Structure::WallStripLoad',
                                'start_location': 0,
                                'end_location': 3700,
                                'load': {
                                    '^o': 'AedGlobal::Structure::Rlw',
                                    'type': ':strip',
                                    'value': 1500,
                                    'truss_spacing': 600,
                                    'roof_material': ':sheet'
                                },
                                'face_index': 0
                            }
                        ],
                        'outgoing_loads': [],
                        'external_cladding': 'Brick',
                        'internal_cladding': 'Plaster Board',
                        'openings': [],
                        'rake_angle_top': 0,
                        'rake_angle_bottom': 0,
                        'nog_centres': 1350,
                        'face_index': 0,
                        'top_plates': [
                            {
                                '^o': 'AedGlobal::Structure::TopPlate',
                                'transform': {
                                    '^o': 'AedGlobal::Structure::Transform',
                                    'location': {
                                        '^o': 'AedGlobal::Structure::Location',
                                        'x': 0,
                                        'y': 0,
                                        'z': 2405
                                    },
                                    'rotation': {
                                        '^o': 'AedGlobal::Structure::Rotation',
                                        'x': 0,
                                        'y': 0,
                                        'z': 0
                                    }
                                },
                                'parts': [
                                    {
                                        '^o': 'AedGlobal::Structure::TimberPart',
                                        'saw_cut_groups': [
                                            {
                                                '^o': 'AedGlobal::Structure::SawCutGroup',
                                                'position': ':at_lead',
                                                'saw_cuts': [
                                                    {
                                                        '^o': 'AedGlobal::Structure::SawCut',
                                                        'transform': {
                                                            '^o': 'AedGlobal::Structure::Transform',
                                                            'location': {
                                                                '^o': 'AedGlobal::Structure::Location',
                                                                'x': 0,
                                                                'y': 0,
                                                                'z': 0
                                                            },
                                                            'rotation': {
                                                                '^o': 'AedGlobal::Structure::Rotation',
                                                                'x': 0,
                                                                'y': 0,
                                                                'z': 0
                                                            }
                                                        },
                                                        'kerf_width': 6,
                                                        'outside_edge': true,
                                                        'length': 0
                                                    }
                                                ],
                                                'cut_type': ':single'
                                            },
                                            {
                                                '^o': 'AedGlobal::Structure::SawCutGroup',
                                                'position': ':at_end',
                                                'saw_cuts': [
                                                    {
                                                        '^o': 'AedGlobal::Structure::SawCut',
                                                        'transform': {
                                                            '^o': 'AedGlobal::Structure::Transform',
                                                            'location': {
                                                                '^o': 'AedGlobal::Structure::Location',
                                                                'x': 3700,
                                                                'y': 0,
                                                                'z': 0
                                                            },
                                                            'rotation': {
                                                                '^o': 'AedGlobal::Structure::Rotation',
                                                                'x': 0,
                                                                'y': 0,
                                                                'z': 0
                                                            }
                                                        },
                                                        'kerf_width': 6,
                                                        'outside_edge': false,
                                                        'length': 70
                                                    }
                                                ],
                                                'cut_type': ':single'
                                            }
                                        ],
                                        'requires_leading_cut': false,
                                        'transform': {
                                            '^o': 'AedGlobal::Structure::Transform',
                                            'location': {
                                                '^o': 'AedGlobal::Structure::Location',
                                                'x': 0,
                                                'y': 0,
                                                'z': 0
                                            },
                                            'rotation': {
                                                '^o': 'AedGlobal::Structure::Rotation',
                                                'x': 0,
                                                'y': 0,
                                                'z': 0
                                            }
                                        },
                                        'part_id': 1,
                                        'type': ':part',
                                        'width': 35,
                                        'depth': 70,
                                        'length': 3700,
                                        'dimensions_assigned': true,
                                        'grade': 'mgp10',
                                        'treatment': 'none',
                                        'all_assigned': true,
                                        'properties_assigned': true
                                    }
                                ],
                                'loads': [
                                    {
                                        '^o': 'AedGlobal::Structure::Rlw',
                                        'type': ':strip',
                                        'value': 1500,
                                        'truss_spacing': 600,
                                        'roof_material': ':sheet'
                                    }
                                ],
                                'fixing_points': [],
                                'component_builder': {
                                    '^o': 'AedGlobal::Structure::ComponentBuilder'
                                },
                                'design_outcomes': {
                                    '^o': 'AedGlobal::Structure::DesignOutcomes',
                                    'design_class': {
                                        '^c': 'AedGlobal::Structure::TimberPlateDesign'
                                    },
                                    'design_outcomes': [
                                        {
                                            '^o': 'AedGlobal::Structure::TimberPlateDesign',
                                            'grade': ':mgp10',
                                            'treatment': ':none',
                                            'ply': 1,
                                            'depth': 70,
                                            'width': 35,
                                            'length': 3700,
                                            'wind_speed': ':n2',
                                            'mitre_left': 0,
                                            'mitre_right': 0,
                                            'rake_angle': 0
                                        }
                                    ],
                                    'active_index': 0
                                },
                                'wind_speed': ':n2',
                                'roof_material': ':sheet',
                                'stud_spacing': 450,
                                'truss_spacing': 600,
                                'tiedown_spacing': 0,
                                'rlw': 1500,
                                'load_bearing': false,
                                'depth': 70,
                                'width': 35,
                                'length': 3700,
                                'design_type': ':tables',
                                'component_info': {
                                    ':material': ':timber',
                                    ':type': ':plate'
                                }
                            }
                        ],
                        'bottom_plates': [
                            {
                                '^o': 'AedGlobal::Structure::BottomPlate',
                                'transform': {
                                    '^o': 'AedGlobal::Structure::Transform',
                                    'location': {
                                        '^o': 'AedGlobal::Structure::Location',
                                        'x': 0,
                                        'y': 0,
                                        'z': 0
                                    },
                                    'rotation': {
                                        '^o': 'AedGlobal::Structure::Rotation',
                                        'x': 0,
                                        'y': 0,
                                        'z': 0
                                    }
                                },
                                'parts': [
                                    {
                                        '^o': 'AedGlobal::Structure::TimberPart',
                                        'saw_cut_groups': [
                                            {
                                                '^o': 'AedGlobal::Structure::SawCutGroup',
                                                'position': ':at_lead',
                                                'saw_cuts': [
                                                    {
                                                        '^o': 'AedGlobal::Structure::SawCut',
                                                        'transform': {
                                                            '^o': 'AedGlobal::Structure::Transform',
                                                            'location': {
                                                                '^o': 'AedGlobal::Structure::Location',
                                                                'x': 0,
                                                                'y': 0,
                                                                'z': 0
                                                            },
                                                            'rotation': {
                                                                '^o': 'AedGlobal::Structure::Rotation',
                                                                'x': 0,
                                                                'y': 0,
                                                                'z': 0
                                                            }
                                                        },
                                                        'kerf_width': 6,
                                                        'outside_edge': true,
                                                        'length': 0
                                                    }
                                                ],
                                                'cut_type': ':single'
                                            },
                                            {
                                                '^o': 'AedGlobal::Structure::SawCutGroup',
                                                'position': ':at_end',
                                                'saw_cuts': [
                                                    {
                                                        '^o': 'AedGlobal::Structure::SawCut',
                                                        'transform': {
                                                            '^o': 'AedGlobal::Structure::Transform',
                                                            'location': {
                                                                '^o': 'AedGlobal::Structure::Location',
                                                                'x': 3700,
                                                                'y': 0,
                                                                'z': 0
                                                            },
                                                            'rotation': {
                                                                '^o': 'AedGlobal::Structure::Rotation',
                                                                'x': 0,
                                                                'y': 0,
                                                                'z': 0
                                                            }
                                                        },
                                                        'kerf_width': 6,
                                                        'outside_edge': false,
                                                        'length': 70
                                                    }
                                                ],
                                                'cut_type': ':single'
                                            }
                                        ],
                                        'requires_leading_cut': false,
                                        'transform': {
                                            '^o': 'AedGlobal::Structure::Transform',
                                            'location': {
                                                '^o': 'AedGlobal::Structure::Location',
                                                'x': 0,
                                                'y': 0,
                                                'z': 0
                                            },
                                            'rotation': {
                                                '^o': 'AedGlobal::Structure::Rotation',
                                                'x': 0,
                                                'y': 0,
                                                'z': 0
                                            }
                                        },
                                        'part_id': 1,
                                        'type': ':part',
                                        'width': 35,
                                        'depth': 70,
                                        'length': 3700,
                                        'dimensions_assigned': true,
                                        'grade': 'mgp10',
                                        'treatment': 'none',
                                        'all_assigned': true,
                                        'properties_assigned': true
                                    }
                                ],
                                'loads': [
                                    {
                                        '^o': 'AedGlobal::Structure::Rlw',
                                        'type': ':strip',
                                        'value': 1500,
                                        'truss_spacing': 600,
                                        'roof_material': ':sheet'
                                    }
                                ],
                                'fixing_points': [],
                                'component_builder': {
                                    '^o': 'AedGlobal::Structure::ComponentBuilder'
                                },
                                'design_outcomes': {
                                    '^o': 'AedGlobal::Structure::DesignOutcomes',
                                    'design_class': {
                                        '^c': 'AedGlobal::Structure::TimberPlateDesign'
                                    },
                                    'design_outcomes': [
                                        {
                                            '^o': 'AedGlobal::Structure::TimberPlateDesign',
                                            'grade': ':mgp10',
                                            'treatment': ':none',
                                            'ply': 1,
                                            'depth': 70,
                                            'width': 35,
                                            'length': 3700,
                                            'wind_speed': ':n2',
                                            'mitre_left': 0,
                                            'mitre_right': 0,
                                            'rake_angle': 0
                                        }
                                    ],
                                    'active_index': 0
                                },
                                'wind_speed': ':n2',
                                'roof_material': ':sheet',
                                'stud_spacing': 450,
                                'truss_spacing': 600,
                                'tiedown_spacing': 0,
                                'rlw': 1500,
                                'load_bearing': false,
                                'depth': 70,
                                'width': 35,
                                'length': 3700,
                                'design_type': ':tables',
                                'component_info': {
                                    ':material': ':timber',
                                    ':type': ':plate'
                                }
                            }
                        ],
                        'common_studs': [
                            {
                                '^o': 'AedGlobal::Structure::CommonStud',
                                'transform': {
                                    '^o': 'AedGlobal::Structure::Transform',
                                    'location': {
                                        '^o': 'AedGlobal::Structure::Location',
                                        'x': 35,
                                        'y': 0,
                                        'z': 35
                                    },
                                    'rotation': {
                                        '^o': 'AedGlobal::Structure::Rotation',
                                        'x': 0,
                                        'y': -90,
                                        'z': 0
                                    }
                                },
                                'parts': [
                                    {
                                        '^o': 'AedGlobal::Structure::TimberPart',
                                        'saw_cut_groups': [
                                            {
                                                '^o': 'AedGlobal::Structure::SawCutGroup',
                                                'position': ':at_lead',
                                                'saw_cuts': [
                                                    {
                                                        '^o': 'AedGlobal::Structure::SawCut',
                                                        'transform': {
                                                            '^o': 'AedGlobal::Structure::Transform',
                                                            'location': {
                                                                '^o': 'AedGlobal::Structure::Location',
                                                                'x': 0,
                                                                'y': 0,
                                                                'z': 0
                                                            },
                                                            'rotation': {
                                                                '^o': 'AedGlobal::Structure::Rotation',
                                                                'x': 0,
                                                                'y': 0,
                                                                'z': 0
                                                            }
                                                        },
                                                        'kerf_width': 6,
                                                        'outside_edge': true,
                                                        'length': 0
                                                    }
                                                ],
                                                'cut_type': ':single'
                                            },
                                            {
                                                '^o': 'AedGlobal::Structure::SawCutGroup',
                                                'position': ':at_end',
                                                'saw_cuts': [
                                                    {
                                                        '^o': 'AedGlobal::Structure::SawCut',
                                                        'transform': {
                                                            '^o': 'AedGlobal::Structure::Transform',
                                                            'location': {
                                                                '^o': 'AedGlobal::Structure::Location',
                                                                'x': 2370,
                                                                'y': 0,
                                                                'z': 0
                                                            },
                                                            'rotation': {
                                                                '^o': 'AedGlobal::Structure::Rotation',
                                                                'x': 0,
                                                                'y': 0,
                                                                'z': 0
                                                            }
                                                        },
                                                        'kerf_width': 6,
                                                        'outside_edge': false,
                                                        'length': 70
                                                    }
                                                ],
                                                'cut_type': ':single'
                                            }
                                        ],
                                        'requires_leading_cut': false,
                                        'transform': {
                                            '^o': 'AedGlobal::Structure::Transform',
                                            'location': {
                                                '^o': 'AedGlobal::Structure::Location',
                                                'x': 0,
                                                'y': 0,
                                                'z': 0
                                            },
                                            'rotation': {
                                                '^o': 'AedGlobal::Structure::Rotation',
                                                'x': 0,
                                                'y': 0,
                                                'z': 0
                                            }
                                        },
                                        'part_id': 1,
                                        'type': ':part',
                                        'width': 35,
                                        'depth': 70,
                                        'length': 2370,
                                        'dimensions_assigned': true,
                                        'grade': 'mgp10',
                                        'treatment': 'none',
                                        'all_assigned': true,
                                        'properties_assigned': true
                                    }
                                ],
                                'loads': [
                                    {
                                        '^o': 'AedGlobal::Structure::Rlw',
                                        'type': ':strip',
                                        'value': 1500,
                                        'truss_spacing': 600,
                                        'roof_material': ':sheet'
                                    }
                                ],
                                'fixing_points': [
                                    {
                                        '^o': 'AedGlobal::Structure::FixingPoint',
                                        'part_id': 1,
                                        'transform': {
                                            '^o': 'AedGlobal::Structure::Transform',
                                            'location': {
                                                '^o': 'AedGlobal::Structure::Location',
                                                'x': 0,
                                                'y': 20,
                                                'z': 17.5
                                            },
                                            'rotation': {
                                                '^o': 'AedGlobal::Structure::Rotation',
                                                'x': 0,
                                                'y': 0,
                                                'z': 0
                                            }
                                        },
                                        'fixing': {
                                            '^o': 'AedGlobal::Structure::FramingNail75',
                                            'name': 'Framing Nail 75 x 3.06mm',
                                            'capacity': 1,
                                            'quantity': 1
                                        }
                                    },
                                    {
                                        '^o': 'AedGlobal::Structure::FixingPoint',
                                        'part_id': 1,
                                        'transform': {
                                            '^o': 'AedGlobal::Structure::Transform',
                                            'location': {
                                                '^o': 'AedGlobal::Structure::Location',
                                                'x': 0,
                                                'y': 50,
                                                'z': 17.5
                                            },
                                            'rotation': {
                                                '^o': 'AedGlobal::Structure::Rotation',
                                                'x': 0,
                                                'y': 0,
                                                'z': 0
                                            }
                                        },
                                        'fixing': {
                                            '^o': 'AedGlobal::Structure::FramingNail75',
                                            'name': 'Framing Nail 75 x 3.06mm',
                                            'capacity': 1,
                                            'quantity': 1
                                        }
                                    },
                                    {
                                        '^o': 'AedGlobal::Structure::FixingPoint',
                                        'part_id': 1,
                                        'transform': {
                                            '^o': 'AedGlobal::Structure::Transform',
                                            'location': {
                                                '^o': 'AedGlobal::Structure::Location',
                                                'x': 2370,
                                                'y': 20,
                                                'z': 17.5
                                            },
                                            'rotation': {
                                                '^o': 'AedGlobal::Structure::Rotation',
                                                'x': 0,
                                                'y': 180,
                                                'z': 0
                                            }
                                        },
                                        'fixing': {
                                            '^o': 'AedGlobal::Structure::FramingNail75',
                                            'name': 'Framing Nail 75 x 3.06mm',
                                            'capacity': 1,
                                            'quantity': 1
                                        }
                                    },
                                    {
                                        '^o': 'AedGlobal::Structure::FixingPoint',
                                        'part_id': 1,
                                        'transform': {
                                            '^o': 'AedGlobal::Structure::Transform',
                                            'location': {
                                                '^o': 'AedGlobal::Structure::Location',
                                                'x': 2370,
                                                'y': 50,
                                                'z': 17.5
                                            },
                                            'rotation': {
                                                '^o': 'AedGlobal::Structure::Rotation',
                                                'x': 0,
                                                'y': 180,
                                                'z': 0
                                            }
                                        },
                                        'fixing': {
                                            '^o': 'AedGlobal::Structure::FramingNail75',
                                            'name': 'Framing Nail 75 x 3.06mm',
                                            'capacity': 1,
                                            'quantity': 1
                                        }
                                    }
                                ],
                                'component_builder': {
                                    '^o': 'AedGlobal::Structure::ComponentBuilder'
                                },
                                'design_outcomes': {
                                    '^o': 'AedGlobal::Structure::DesignOutcomes',
                                    'design_class': {
                                        '^c': 'AedGlobal::Structure::TimberStudDesign'
                                    },
                                    'design_outcomes': [
                                        {
                                            '^o': 'AedGlobal::Structure::TimberStudDesign',
                                            'grade': ':mgp10',
                                            'treatment': ':none',
                                            'ply': 1,
                                            'depth': 70,
                                            'width': 35,
                                            'length': 2370,
                                            'wind_speed': ':n2',
                                            'bevel_top': 0,
                                            'bevel_bottom': 0
                                        }
                                    ],
                                    'active_index': 0
                                },
                                'height': 2370,
                                'spacing': 450,
                                'wind_speed': ':n2',
                                'notch_depth': 0,
                                'external': true,
                                'rlw': 1500,
                                'nog_spacing': 1350,
                                'depth': 70,
                                'width': 35,
                                'length': 2370,
                                'design_type': ':tables',
                                'component_info': {
                                    ':material': ':timber',
                                    ':type': ':common_stud'
                                }
                            },
                            {
                                '^o': 'AedGlobal::Structure::CommonStud',
                                'transform': {
                                    '^o': 'AedGlobal::Structure::Transform',
                                    'location': {
                                        '^o': 'AedGlobal::Structure::Location',
                                        'x': 485,
                                        'y': 0,
                                        'z': 35
                                    },
                                    'rotation': {
                                        '^o': 'AedGlobal::Structure::Rotation',
                                        'x': 0,
                                        'y': -90,
                                        'z': 0
                                    }
                                },
                                'parts': [
                                    {
                                        '^o': 'AedGlobal::Structure::TimberPart',
                                        'saw_cut_groups': [
                                            {
                                                '^o': 'AedGlobal::Structure::SawCutGroup',
                                                'position': ':at_lead',
                                                'saw_cuts': [
                                                    {
                                                        '^o': 'AedGlobal::Structure::SawCut',
                                                        'transform': {
                                                            '^o': 'AedGlobal::Structure::Transform',
                                                            'location': {
                                                                '^o': 'AedGlobal::Structure::Location',
                                                                'x': 0,
                                                                'y': 0,
                                                                'z': 0
                                                            },
                                                            'rotation': {
                                                                '^o': 'AedGlobal::Structure::Rotation',
                                                                'x': 0,
                                                                'y': 0,
                                                                'z': 0
                                                            }
                                                        },
                                                        'kerf_width': 6,
                                                        'outside_edge': true,
                                                        'length': 0
                                                    }
                                                ],
                                                'cut_type': ':single'
                                            },
                                            {
                                                '^o': 'AedGlobal::Structure::SawCutGroup',
                                                'position': ':at_end',
                                                'saw_cuts': [
                                                    {
                                                        '^o': 'AedGlobal::Structure::SawCut',
                                                        'transform': {
                                                            '^o': 'AedGlobal::Structure::Transform',
                                                            'location': {
                                                                '^o': 'AedGlobal::Structure::Location',
                                                                'x': 2370,
                                                                'y': 0,
                                                                'z': 0
                                                            },
                                                            'rotation': {
                                                                '^o': 'AedGlobal::Structure::Rotation',
                                                                'x': 0,
                                                                'y': 0,
                                                                'z': 0
                                                            }
                                                        },
                                                        'kerf_width': 6,
                                                        'outside_edge': false,
                                                        'length': 70
                                                    }
                                                ],
                                                'cut_type': ':single'
                                            }
                                        ],
                                        'requires_leading_cut': false,
                                        'transform': {
                                            '^o': 'AedGlobal::Structure::Transform',
                                            'location': {
                                                '^o': 'AedGlobal::Structure::Location',
                                                'x': 0,
                                                'y': 0,
                                                'z': 0
                                            },
                                            'rotation': {
                                                '^o': 'AedGlobal::Structure::Rotation',
                                                'x': 0,
                                                'y': 0,
                                                'z': 0
                                            }
                                        },
                                        'part_id': 1,
                                        'type': ':part',
                                        'width': 35,
                                        'depth': 70,
                                        'length': 2370,
                                        'dimensions_assigned': true,
                                        'grade': 'mgp10',
                                        'treatment': 'none',
                                        'all_assigned': true,
                                        'properties_assigned': true
                                    }
                                ],
                                'loads': [
                                    {
                                        '^o': 'AedGlobal::Structure::Rlw',
                                        'type': ':strip',
                                        'value': 1500,
                                        'truss_spacing': 600,
                                        'roof_material': ':sheet'
                                    }
                                ],
                                'fixing_points': [
                                    {
                                        '^o': 'AedGlobal::Structure::FixingPoint',
                                        'part_id': 1,
                                        'transform': {
                                            '^o': 'AedGlobal::Structure::Transform',
                                            'location': {
                                                '^o': 'AedGlobal::Structure::Location',
                                                'x': 0,
                                                'y': 20,
                                                'z': 17.5
                                            },
                                            'rotation': {
                                                '^o': 'AedGlobal::Structure::Rotation',
                                                'x': 0,
                                                'y': 0,
                                                'z': 0
                                            }
                                        },
                                        'fixing': {
                                            '^o': 'AedGlobal::Structure::FramingNail75',
                                            'name': 'Framing Nail 75 x 3.06mm',
                                            'capacity': 1,
                                            'quantity': 1
                                        }
                                    },
                                    {
                                        '^o': 'AedGlobal::Structure::FixingPoint',
                                        'part_id': 1,
                                        'transform': {
                                            '^o': 'AedGlobal::Structure::Transform',
                                            'location': {
                                                '^o': 'AedGlobal::Structure::Location',
                                                'x': 0,
                                                'y': 50,
                                                'z': 17.5
                                            },
                                            'rotation': {
                                                '^o': 'AedGlobal::Structure::Rotation',
                                                'x': 0,
                                                'y': 0,
                                                'z': 0
                                            }
                                        },
                                        'fixing': {
                                            '^o': 'AedGlobal::Structure::FramingNail75',
                                            'name': 'Framing Nail 75 x 3.06mm',
                                            'capacity': 1,
                                            'quantity': 1
                                        }
                                    },
                                    {
                                        '^o': 'AedGlobal::Structure::FixingPoint',
                                        'part_id': 1,
                                        'transform': {
                                            '^o': 'AedGlobal::Structure::Transform',
                                            'location': {
                                                '^o': 'AedGlobal::Structure::Location',
                                                'x': 2370,
                                                'y': 20,
                                                'z': 17.5
                                            },
                                            'rotation': {
                                                '^o': 'AedGlobal::Structure::Rotation',
                                                'x': 0,
                                                'y': 180,
                                                'z': 0
                                            }
                                        },
                                        'fixing': {
                                            '^o': 'AedGlobal::Structure::FramingNail75',
                                            'name': 'Framing Nail 75 x 3.06mm',
                                            'capacity': 1,
                                            'quantity': 1
                                        }
                                    },
                                    {
                                        '^o': 'AedGlobal::Structure::FixingPoint',
                                        'part_id': 1,
                                        'transform': {
                                            '^o': 'AedGlobal::Structure::Transform',
                                            'location': {
                                                '^o': 'AedGlobal::Structure::Location',
                                                'x': 2370,
                                                'y': 50,
                                                'z': 17.5
                                            },
                                            'rotation': {
                                                '^o': 'AedGlobal::Structure::Rotation',
                                                'x': 0,
                                                'y': 180,
                                                'z': 0
                                            }
                                        },
                                        'fixing': {
                                            '^o': 'AedGlobal::Structure::FramingNail75',
                                            'name': 'Framing Nail 75 x 3.06mm',
                                            'capacity': 1,
                                            'quantity': 1
                                        }
                                    }
                                ],
                                'component_builder': {
                                    '^o': 'AedGlobal::Structure::ComponentBuilder'
                                },
                                'design_outcomes': {
                                    '^o': 'AedGlobal::Structure::DesignOutcomes',
                                    'design_class': {
                                        '^c': 'AedGlobal::Structure::TimberStudDesign'
                                    },
                                    'design_outcomes': [
                                        {
                                            '^o': 'AedGlobal::Structure::TimberStudDesign',
                                            'grade': ':mgp10',
                                            'treatment': ':none',
                                            'ply': 1,
                                            'depth': 70,
                                            'width': 35,
                                            'length': 2370,
                                            'wind_speed': ':n2',
                                            'bevel_top': 0,
                                            'bevel_bottom': 0
                                        }
                                    ],
                                    'active_index': 0
                                },
                                'height': 2370,
                                'spacing': 450,
                                'wind_speed': ':n2',
                                'notch_depth': 0,
                                'external': true,
                                'rlw': 1500,
                                'nog_spacing': 1350,
                                'depth': 70,
                                'width': 35,
                                'length': 2370,
                                'design_type': ':tables',
                                'component_info': {
                                    ':material': ':timber',
                                    ':type': ':common_stud'
                                }
                            },
                            {
                                '^o': 'AedGlobal::Structure::CommonStud',
                                'transform': {
                                    '^o': 'AedGlobal::Structure::Transform',
                                    'location': {
                                        '^o': 'AedGlobal::Structure::Location',
                                        'x': 935,
                                        'y': 0,
                                        'z': 35
                                    },
                                    'rotation': {
                                        '^o': 'AedGlobal::Structure::Rotation',
                                        'x': 0,
                                        'y': -90,
                                        'z': 0
                                    }
                                },
                                'parts': [
                                    {
                                        '^o': 'AedGlobal::Structure::TimberPart',
                                        'saw_cut_groups': [
                                            {
                                                '^o': 'AedGlobal::Structure::SawCutGroup',
                                                'position': ':at_lead',
                                                'saw_cuts': [
                                                    {
                                                        '^o': 'AedGlobal::Structure::SawCut',
                                                        'transform': {
                                                            '^o': 'AedGlobal::Structure::Transform',
                                                            'location': {
                                                                '^o': 'AedGlobal::Structure::Location',
                                                                'x': 0,
                                                                'y': 0,
                                                                'z': 0
                                                            },
                                                            'rotation': {
                                                                '^o': 'AedGlobal::Structure::Rotation',
                                                                'x': 0,
                                                                'y': 0,
                                                                'z': 0
                                                            }
                                                        },
                                                        'kerf_width': 6,
                                                        'outside_edge': true,
                                                        'length': 0
                                                    }
                                                ],
                                                'cut_type': ':single'
                                            },
                                            {
                                                '^o': 'AedGlobal::Structure::SawCutGroup',
                                                'position': ':at_end',
                                                'saw_cuts': [
                                                    {
                                                        '^o': 'AedGlobal::Structure::SawCut',
                                                        'transform': {
                                                            '^o': 'AedGlobal::Structure::Transform',
                                                            'location': {
                                                                '^o': 'AedGlobal::Structure::Location',
                                                                'x': 2370,
                                                                'y': 0,
                                                                'z': 0
                                                            },
                                                            'rotation': {
                                                                '^o': 'AedGlobal::Structure::Rotation',
                                                                'x': 0,
                                                                'y': 0,
                                                                'z': 0
                                                            }
                                                        },
                                                        'kerf_width': 6,
                                                        'outside_edge': false,
                                                        'length': 70
                                                    }
                                                ],
                                                'cut_type': ':single'
                                            }
                                        ],
                                        'requires_leading_cut': false,
                                        'transform': {
                                            '^o': 'AedGlobal::Structure::Transform',
                                            'location': {
                                                '^o': 'AedGlobal::Structure::Location',
                                                'x': 0,
                                                'y': 0,
                                                'z': 0
                                            },
                                            'rotation': {
                                                '^o': 'AedGlobal::Structure::Rotation',
                                                'x': 0,
                                                'y': 0,
                                                'z': 0
                                            }
                                        },
                                        'part_id': 1,
                                        'type': ':part',
                                        'width': 35,
                                        'depth': 70,
                                        'length': 2370,
                                        'dimensions_assigned': true,
                                        'grade': 'mgp10',
                                        'treatment': 'none',
                                        'all_assigned': true,
                                        'properties_assigned': true
                                    }
                                ],
                                'loads': [
                                    {
                                        '^o': 'AedGlobal::Structure::Rlw',
                                        'type': ':strip',
                                        'value': 1500,
                                        'truss_spacing': 600,
                                        'roof_material': ':sheet'
                                    }
                                ],
                                'fixing_points': [
                                    {
                                        '^o': 'AedGlobal::Structure::FixingPoint',
                                        'part_id': 1,
                                        'transform': {
                                            '^o': 'AedGlobal::Structure::Transform',
                                            'location': {
                                                '^o': 'AedGlobal::Structure::Location',
                                                'x': 0,
                                                'y': 20,
                                                'z': 17.5
                                            },
                                            'rotation': {
                                                '^o': 'AedGlobal::Structure::Rotation',
                                                'x': 0,
                                                'y': 0,
                                                'z': 0
                                            }
                                        },
                                        'fixing': {
                                            '^o': 'AedGlobal::Structure::FramingNail75',
                                            'name': 'Framing Nail 75 x 3.06mm',
                                            'capacity': 1,
                                            'quantity': 1
                                        }
                                    },
                                    {
                                        '^o': 'AedGlobal::Structure::FixingPoint',
                                        'part_id': 1,
                                        'transform': {
                                            '^o': 'AedGlobal::Structure::Transform',
                                            'location': {
                                                '^o': 'AedGlobal::Structure::Location',
                                                'x': 0,
                                                'y': 50,
                                                'z': 17.5
                                            },
                                            'rotation': {
                                                '^o': 'AedGlobal::Structure::Rotation',
                                                'x': 0,
                                                'y': 0,
                                                'z': 0
                                            }
                                        },
                                        'fixing': {
                                            '^o': 'AedGlobal::Structure::FramingNail75',
                                            'name': 'Framing Nail 75 x 3.06mm',
                                            'capacity': 1,
                                            'quantity': 1
                                        }
                                    },
                                    {
                                        '^o': 'AedGlobal::Structure::FixingPoint',
                                        'part_id': 1,
                                        'transform': {
                                            '^o': 'AedGlobal::Structure::Transform',
                                            'location': {
                                                '^o': 'AedGlobal::Structure::Location',
                                                'x': 2370,
                                                'y': 20,
                                                'z': 17.5
                                            },
                                            'rotation': {
                                                '^o': 'AedGlobal::Structure::Rotation',
                                                'x': 0,
                                                'y': 180,
                                                'z': 0
                                            }
                                        },
                                        'fixing': {
                                            '^o': 'AedGlobal::Structure::FramingNail75',
                                            'name': 'Framing Nail 75 x 3.06mm',
                                            'capacity': 1,
                                            'quantity': 1
                                        }
                                    },
                                    {
                                        '^o': 'AedGlobal::Structure::FixingPoint',
                                        'part_id': 1,
                                        'transform': {
                                            '^o': 'AedGlobal::Structure::Transform',
                                            'location': {
                                                '^o': 'AedGlobal::Structure::Location',
                                                'x': 2370,
                                                'y': 50,
                                                'z': 17.5
                                            },
                                            'rotation': {
                                                '^o': 'AedGlobal::Structure::Rotation',
                                                'x': 0,
                                                'y': 180,
                                                'z': 0
                                            }
                                        },
                                        'fixing': {
                                            '^o': 'AedGlobal::Structure::FramingNail75',
                                            'name': 'Framing Nail 75 x 3.06mm',
                                            'capacity': 1,
                                            'quantity': 1
                                        }
                                    }
                                ],
                                'component_builder': {
                                    '^o': 'AedGlobal::Structure::ComponentBuilder'
                                },
                                'design_outcomes': {
                                    '^o': 'AedGlobal::Structure::DesignOutcomes',
                                    'design_class': {
                                        '^c': 'AedGlobal::Structure::TimberStudDesign'
                                    },
                                    'design_outcomes': [
                                        {
                                            '^o': 'AedGlobal::Structure::TimberStudDesign',
                                            'grade': ':mgp10',
                                            'treatment': ':none',
                                            'ply': 1,
                                            'depth': 70,
                                            'width': 35,
                                            'length': 2370,
                                            'wind_speed': ':n2',
                                            'bevel_top': 0,
                                            'bevel_bottom': 0
                                        }
                                    ],
                                    'active_index': 0
                                },
                                'height': 2370,
                                'spacing': 450,
                                'wind_speed': ':n2',
                                'notch_depth': 0,
                                'external': true,
                                'rlw': 1500,
                                'nog_spacing': 1350,
                                'depth': 70,
                                'width': 35,
                                'length': 2370,
                                'design_type': ':tables',
                                'component_info': {
                                    ':material': ':timber',
                                    ':type': ':common_stud'
                                }
                            },
                            {
                                '^o': 'AedGlobal::Structure::CommonStud',
                                'transform': {
                                    '^o': 'AedGlobal::Structure::Transform',
                                    'location': {
                                        '^o': 'AedGlobal::Structure::Location',
                                        'x': 1385,
                                        'y': 0,
                                        'z': 35
                                    },
                                    'rotation': {
                                        '^o': 'AedGlobal::Structure::Rotation',
                                        'x': 0,
                                        'y': -90,
                                        'z': 0
                                    }
                                },
                                'parts': [
                                    {
                                        '^o': 'AedGlobal::Structure::TimberPart',
                                        'saw_cut_groups': [
                                            {
                                                '^o': 'AedGlobal::Structure::SawCutGroup',
                                                'position': ':at_lead',
                                                'saw_cuts': [
                                                    {
                                                        '^o': 'AedGlobal::Structure::SawCut',
                                                        'transform': {
                                                            '^o': 'AedGlobal::Structure::Transform',
                                                            'location': {
                                                                '^o': 'AedGlobal::Structure::Location',
                                                                'x': 0,
                                                                'y': 0,
                                                                'z': 0
                                                            },
                                                            'rotation': {
                                                                '^o': 'AedGlobal::Structure::Rotation',
                                                                'x': 0,
                                                                'y': 0,
                                                                'z': 0
                                                            }
                                                        },
                                                        'kerf_width': 6,
                                                        'outside_edge': true,
                                                        'length': 0
                                                    }
                                                ],
                                                'cut_type': ':single'
                                            },
                                            {
                                                '^o': 'AedGlobal::Structure::SawCutGroup',
                                                'position': ':at_end',
                                                'saw_cuts': [
                                                    {
                                                        '^o': 'AedGlobal::Structure::SawCut',
                                                        'transform': {
                                                            '^o': 'AedGlobal::Structure::Transform',
                                                            'location': {
                                                                '^o': 'AedGlobal::Structure::Location',
                                                                'x': 2370,
                                                                'y': 0,
                                                                'z': 0
                                                            },
                                                            'rotation': {
                                                                '^o': 'AedGlobal::Structure::Rotation',
                                                                'x': 0,
                                                                'y': 0,
                                                                'z': 0
                                                            }
                                                        },
                                                        'kerf_width': 6,
                                                        'outside_edge': false,
                                                        'length': 70
                                                    }
                                                ],
                                                'cut_type': ':single'
                                            }
                                        ],
                                        'requires_leading_cut': false,
                                        'transform': {
                                            '^o': 'AedGlobal::Structure::Transform',
                                            'location': {
                                                '^o': 'AedGlobal::Structure::Location',
                                                'x': 0,
                                                'y': 0,
                                                'z': 0
                                            },
                                            'rotation': {
                                                '^o': 'AedGlobal::Structure::Rotation',
                                                'x': 0,
                                                'y': 0,
                                                'z': 0
                                            }
                                        },
                                        'part_id': 1,
                                        'type': ':part',
                                        'width': 35,
                                        'depth': 70,
                                        'length': 2370,
                                        'dimensions_assigned': true,
                                        'grade': 'mgp10',
                                        'treatment': 'none',
                                        'all_assigned': true,
                                        'properties_assigned': true
                                    }
                                ],
                                'loads': [
                                    {
                                        '^o': 'AedGlobal::Structure::Rlw',
                                        'type': ':strip',
                                        'value': 1500,
                                        'truss_spacing': 600,
                                        'roof_material': ':sheet'
                                    }
                                ],
                                'fixing_points': [
                                    {
                                        '^o': 'AedGlobal::Structure::FixingPoint',
                                        'part_id': 1,
                                        'transform': {
                                            '^o': 'AedGlobal::Structure::Transform',
                                            'location': {
                                                '^o': 'AedGlobal::Structure::Location',
                                                'x': 0,
                                                'y': 20,
                                                'z': 17.5
                                            },
                                            'rotation': {
                                                '^o': 'AedGlobal::Structure::Rotation',
                                                'x': 0,
                                                'y': 0,
                                                'z': 0
                                            }
                                        },
                                        'fixing': {
                                            '^o': 'AedGlobal::Structure::FramingNail75',
                                            'name': 'Framing Nail 75 x 3.06mm',
                                            'capacity': 1,
                                            'quantity': 1
                                        }
                                    },
                                    {
                                        '^o': 'AedGlobal::Structure::FixingPoint',
                                        'part_id': 1,
                                        'transform': {
                                            '^o': 'AedGlobal::Structure::Transform',
                                            'location': {
                                                '^o': 'AedGlobal::Structure::Location',
                                                'x': 0,
                                                'y': 50,
                                                'z': 17.5
                                            },
                                            'rotation': {
                                                '^o': 'AedGlobal::Structure::Rotation',
                                                'x': 0,
                                                'y': 0,
                                                'z': 0
                                            }
                                        },
                                        'fixing': {
                                            '^o': 'AedGlobal::Structure::FramingNail75',
                                            'name': 'Framing Nail 75 x 3.06mm',
                                            'capacity': 1,
                                            'quantity': 1
                                        }
                                    },
                                    {
                                        '^o': 'AedGlobal::Structure::FixingPoint',
                                        'part_id': 1,
                                        'transform': {
                                            '^o': 'AedGlobal::Structure::Transform',
                                            'location': {
                                                '^o': 'AedGlobal::Structure::Location',
                                                'x': 2370,
                                                'y': 20,
                                                'z': 17.5
                                            },
                                            'rotation': {
                                                '^o': 'AedGlobal::Structure::Rotation',
                                                'x': 0,
                                                'y': 180,
                                                'z': 0
                                            }
                                        },
                                        'fixing': {
                                            '^o': 'AedGlobal::Structure::FramingNail75',
                                            'name': 'Framing Nail 75 x 3.06mm',
                                            'capacity': 1,
                                            'quantity': 1
                                        }
                                    },
                                    {
                                        '^o': 'AedGlobal::Structure::FixingPoint',
                                        'part_id': 1,
                                        'transform': {
                                            '^o': 'AedGlobal::Structure::Transform',
                                            'location': {
                                                '^o': 'AedGlobal::Structure::Location',
                                                'x': 2370,
                                                'y': 50,
                                                'z': 17.5
                                            },
                                            'rotation': {
                                                '^o': 'AedGlobal::Structure::Rotation',
                                                'x': 0,
                                                'y': 180,
                                                'z': 0
                                            }
                                        },
                                        'fixing': {
                                            '^o': 'AedGlobal::Structure::FramingNail75',
                                            'name': 'Framing Nail 75 x 3.06mm',
                                            'capacity': 1,
                                            'quantity': 1
                                        }
                                    }
                                ],
                                'component_builder': {
                                    '^o': 'AedGlobal::Structure::ComponentBuilder'
                                },
                                'design_outcomes': {
                                    '^o': 'AedGlobal::Structure::DesignOutcomes',
                                    'design_class': {
                                        '^c': 'AedGlobal::Structure::TimberStudDesign'
                                    },
                                    'design_outcomes': [
                                        {
                                            '^o': 'AedGlobal::Structure::TimberStudDesign',
                                            'grade': ':mgp10',
                                            'treatment': ':none',
                                            'ply': 1,
                                            'depth': 70,
                                            'width': 35,
                                            'length': 2370,
                                            'wind_speed': ':n2',
                                            'bevel_top': 0,
                                            'bevel_bottom': 0
                                        }
                                    ],
                                    'active_index': 0
                                },
                                'height': 2370,
                                'spacing': 450,
                                'wind_speed': ':n2',
                                'notch_depth': 0,
                                'external': true,
                                'rlw': 1500,
                                'nog_spacing': 1350,
                                'depth': 70,
                                'width': 35,
                                'length': 2370,
                                'design_type': ':tables',
                                'component_info': {
                                    ':material': ':timber',
                                    ':type': ':common_stud'
                                }
                            },
                            {
                                '^o': 'AedGlobal::Structure::CommonStud',
                                'transform': {
                                    '^o': 'AedGlobal::Structure::Transform',
                                    'location': {
                                        '^o': 'AedGlobal::Structure::Location',
                                        'x': 1835,
                                        'y': 0,
                                        'z': 35
                                    },
                                    'rotation': {
                                        '^o': 'AedGlobal::Structure::Rotation',
                                        'x': 0,
                                        'y': -90,
                                        'z': 0
                                    }
                                },
                                'parts': [
                                    {
                                        '^o': 'AedGlobal::Structure::TimberPart',
                                        'saw_cut_groups': [
                                            {
                                                '^o': 'AedGlobal::Structure::SawCutGroup',
                                                'position': ':at_lead',
                                                'saw_cuts': [
                                                    {
                                                        '^o': 'AedGlobal::Structure::SawCut',
                                                        'transform': {
                                                            '^o': 'AedGlobal::Structure::Transform',
                                                            'location': {
                                                                '^o': 'AedGlobal::Structure::Location',
                                                                'x': 0,
                                                                'y': 0,
                                                                'z': 0
                                                            },
                                                            'rotation': {
                                                                '^o': 'AedGlobal::Structure::Rotation',
                                                                'x': 0,
                                                                'y': 0,
                                                                'z': 0
                                                            }
                                                        },
                                                        'kerf_width': 6,
                                                        'outside_edge': true,
                                                        'length': 0
                                                    }
                                                ],
                                                'cut_type': ':single'
                                            },
                                            {
                                                '^o': 'AedGlobal::Structure::SawCutGroup',
                                                'position': ':at_end',
                                                'saw_cuts': [
                                                    {
                                                        '^o': 'AedGlobal::Structure::SawCut',
                                                        'transform': {
                                                            '^o': 'AedGlobal::Structure::Transform',
                                                            'location': {
                                                                '^o': 'AedGlobal::Structure::Location',
                                                                'x': 2370,
                                                                'y': 0,
                                                                'z': 0
                                                            },
                                                            'rotation': {
                                                                '^o': 'AedGlobal::Structure::Rotation',
                                                                'x': 0,
                                                                'y': 0,
                                                                'z': 0
                                                            }
                                                        },
                                                        'kerf_width': 6,
                                                        'outside_edge': false,
                                                        'length': 70
                                                    }
                                                ],
                                                'cut_type': ':single'
                                            }
                                        ],
                                        'requires_leading_cut': false,
                                        'transform': {
                                            '^o': 'AedGlobal::Structure::Transform',
                                            'location': {
                                                '^o': 'AedGlobal::Structure::Location',
                                                'x': 0,
                                                'y': 0,
                                                'z': 0
                                            },
                                            'rotation': {
                                                '^o': 'AedGlobal::Structure::Rotation',
                                                'x': 0,
                                                'y': 0,
                                                'z': 0
                                            }
                                        },
                                        'part_id': 1,
                                        'type': ':part',
                                        'width': 35,
                                        'depth': 70,
                                        'length': 2370,
                                        'dimensions_assigned': true,
                                        'grade': 'mgp10',
                                        'treatment': 'none',
                                        'all_assigned': true,
                                        'properties_assigned': true
                                    }
                                ],
                                'loads': [
                                    {
                                        '^o': 'AedGlobal::Structure::Rlw',
                                        'type': ':strip',
                                        'value': 1500,
                                        'truss_spacing': 600,
                                        'roof_material': ':sheet'
                                    }
                                ],
                                'fixing_points': [
                                    {
                                        '^o': 'AedGlobal::Structure::FixingPoint',
                                        'part_id': 1,
                                        'transform': {
                                            '^o': 'AedGlobal::Structure::Transform',
                                            'location': {
                                                '^o': 'AedGlobal::Structure::Location',
                                                'x': 0,
                                                'y': 20,
                                                'z': 17.5
                                            },
                                            'rotation': {
                                                '^o': 'AedGlobal::Structure::Rotation',
                                                'x': 0,
                                                'y': 0,
                                                'z': 0
                                            }
                                        },
                                        'fixing': {
                                            '^o': 'AedGlobal::Structure::FramingNail75',
                                            'name': 'Framing Nail 75 x 3.06mm',
                                            'capacity': 1,
                                            'quantity': 1
                                        }
                                    },
                                    {
                                        '^o': 'AedGlobal::Structure::FixingPoint',
                                        'part_id': 1,
                                        'transform': {
                                            '^o': 'AedGlobal::Structure::Transform',
                                            'location': {
                                                '^o': 'AedGlobal::Structure::Location',
                                                'x': 0,
                                                'y': 50,
                                                'z': 17.5
                                            },
                                            'rotation': {
                                                '^o': 'AedGlobal::Structure::Rotation',
                                                'x': 0,
                                                'y': 0,
                                                'z': 0
                                            }
                                        },
                                        'fixing': {
                                            '^o': 'AedGlobal::Structure::FramingNail75',
                                            'name': 'Framing Nail 75 x 3.06mm',
                                            'capacity': 1,
                                            'quantity': 1
                                        }
                                    },
                                    {
                                        '^o': 'AedGlobal::Structure::FixingPoint',
                                        'part_id': 1,
                                        'transform': {
                                            '^o': 'AedGlobal::Structure::Transform',
                                            'location': {
                                                '^o': 'AedGlobal::Structure::Location',
                                                'x': 2370,
                                                'y': 20,
                                                'z': 17.5
                                            },
                                            'rotation': {
                                                '^o': 'AedGlobal::Structure::Rotation',
                                                'x': 0,
                                                'y': 180,
                                                'z': 0
                                            }
                                        },
                                        'fixing': {
                                            '^o': 'AedGlobal::Structure::FramingNail75',
                                            'name': 'Framing Nail 75 x 3.06mm',
                                            'capacity': 1,
                                            'quantity': 1
                                        }
                                    },
                                    {
                                        '^o': 'AedGlobal::Structure::FixingPoint',
                                        'part_id': 1,
                                        'transform': {
                                            '^o': 'AedGlobal::Structure::Transform',
                                            'location': {
                                                '^o': 'AedGlobal::Structure::Location',
                                                'x': 2370,
                                                'y': 50,
                                                'z': 17.5
                                            },
                                            'rotation': {
                                                '^o': 'AedGlobal::Structure::Rotation',
                                                'x': 0,
                                                'y': 180,
                                                'z': 0
                                            }
                                        },
                                        'fixing': {
                                            '^o': 'AedGlobal::Structure::FramingNail75',
                                            'name': 'Framing Nail 75 x 3.06mm',
                                            'capacity': 1,
                                            'quantity': 1
                                        }
                                    }
                                ],
                                'component_builder': {
                                    '^o': 'AedGlobal::Structure::ComponentBuilder'
                                },
                                'design_outcomes': {
                                    '^o': 'AedGlobal::Structure::DesignOutcomes',
                                    'design_class': {
                                        '^c': 'AedGlobal::Structure::TimberStudDesign'
                                    },
                                    'design_outcomes': [
                                        {
                                            '^o': 'AedGlobal::Structure::TimberStudDesign',
                                            'grade': ':mgp10',
                                            'treatment': ':none',
                                            'ply': 1,
                                            'depth': 70,
                                            'width': 35,
                                            'length': 2370,
                                            'wind_speed': ':n2',
                                            'bevel_top': 0,
                                            'bevel_bottom': 0
                                        }
                                    ],
                                    'active_index': 0
                                },
                                'height': 2370,
                                'spacing': 450,
                                'wind_speed': ':n2',
                                'notch_depth': 0,
                                'external': true,
                                'rlw': 1500,
                                'nog_spacing': 1350,
                                'depth': 70,
                                'width': 35,
                                'length': 2370,
                                'design_type': ':tables',
                                'component_info': {
                                    ':material': ':timber',
                                    ':type': ':common_stud'
                                }
                            },
                            {
                                '^o': 'AedGlobal::Structure::CommonStud',
                                'transform': {
                                    '^o': 'AedGlobal::Structure::Transform',
                                    'location': {
                                        '^o': 'AedGlobal::Structure::Location',
                                        'x': 2285,
                                        'y': 0,
                                        'z': 35
                                    },
                                    'rotation': {
                                        '^o': 'AedGlobal::Structure::Rotation',
                                        'x': 0,
                                        'y': -90,
                                        'z': 0
                                    }
                                },
                                'parts': [
                                    {
                                        '^o': 'AedGlobal::Structure::TimberPart',
                                        'saw_cut_groups': [
                                            {
                                                '^o': 'AedGlobal::Structure::SawCutGroup',
                                                'position': ':at_lead',
                                                'saw_cuts': [
                                                    {
                                                        '^o': 'AedGlobal::Structure::SawCut',
                                                        'transform': {
                                                            '^o': 'AedGlobal::Structure::Transform',
                                                            'location': {
                                                                '^o': 'AedGlobal::Structure::Location',
                                                                'x': 0,
                                                                'y': 0,
                                                                'z': 0
                                                            },
                                                            'rotation': {
                                                                '^o': 'AedGlobal::Structure::Rotation',
                                                                'x': 0,
                                                                'y': 0,
                                                                'z': 0
                                                            }
                                                        },
                                                        'kerf_width': 6,
                                                        'outside_edge': true,
                                                        'length': 0
                                                    }
                                                ],
                                                'cut_type': ':single'
                                            },
                                            {
                                                '^o': 'AedGlobal::Structure::SawCutGroup',
                                                'position': ':at_end',
                                                'saw_cuts': [
                                                    {
                                                        '^o': 'AedGlobal::Structure::SawCut',
                                                        'transform': {
                                                            '^o': 'AedGlobal::Structure::Transform',
                                                            'location': {
                                                                '^o': 'AedGlobal::Structure::Location',
                                                                'x': 2370,
                                                                'y': 0,
                                                                'z': 0
                                                            },
                                                            'rotation': {
                                                                '^o': 'AedGlobal::Structure::Rotation',
                                                                'x': 0,
                                                                'y': 0,
                                                                'z': 0
                                                            }
                                                        },
                                                        'kerf_width': 6,
                                                        'outside_edge': false,
                                                        'length': 70
                                                    }
                                                ],
                                                'cut_type': ':single'
                                            }
                                        ],
                                        'requires_leading_cut': false,
                                        'transform': {
                                            '^o': 'AedGlobal::Structure::Transform',
                                            'location': {
                                                '^o': 'AedGlobal::Structure::Location',
                                                'x': 0,
                                                'y': 0,
                                                'z': 0
                                            },
                                            'rotation': {
                                                '^o': 'AedGlobal::Structure::Rotation',
                                                'x': 0,
                                                'y': 0,
                                                'z': 0
                                            }
                                        },
                                        'part_id': 1,
                                        'type': ':part',
                                        'width': 35,
                                        'depth': 70,
                                        'length': 2370,
                                        'dimensions_assigned': true,
                                        'grade': 'mgp10',
                                        'treatment': 'none',
                                        'all_assigned': true,
                                        'properties_assigned': true
                                    }
                                ],
                                'loads': [
                                    {
                                        '^o': 'AedGlobal::Structure::Rlw',
                                        'type': ':strip',
                                        'value': 1500,
                                        'truss_spacing': 600,
                                        'roof_material': ':sheet'
                                    }
                                ],
                                'fixing_points': [
                                    {
                                        '^o': 'AedGlobal::Structure::FixingPoint',
                                        'part_id': 1,
                                        'transform': {
                                            '^o': 'AedGlobal::Structure::Transform',
                                            'location': {
                                                '^o': 'AedGlobal::Structure::Location',
                                                'x': 0,
                                                'y': 20,
                                                'z': 17.5
                                            },
                                            'rotation': {
                                                '^o': 'AedGlobal::Structure::Rotation',
                                                'x': 0,
                                                'y': 0,
                                                'z': 0
                                            }
                                        },
                                        'fixing': {
                                            '^o': 'AedGlobal::Structure::FramingNail75',
                                            'name': 'Framing Nail 75 x 3.06mm',
                                            'capacity': 1,
                                            'quantity': 1
                                        }
                                    },
                                    {
                                        '^o': 'AedGlobal::Structure::FixingPoint',
                                        'part_id': 1,
                                        'transform': {
                                            '^o': 'AedGlobal::Structure::Transform',
                                            'location': {
                                                '^o': 'AedGlobal::Structure::Location',
                                                'x': 0,
                                                'y': 50,
                                                'z': 17.5
                                            },
                                            'rotation': {
                                                '^o': 'AedGlobal::Structure::Rotation',
                                                'x': 0,
                                                'y': 0,
                                                'z': 0
                                            }
                                        },
                                        'fixing': {
                                            '^o': 'AedGlobal::Structure::FramingNail75',
                                            'name': 'Framing Nail 75 x 3.06mm',
                                            'capacity': 1,
                                            'quantity': 1
                                        }
                                    },
                                    {
                                        '^o': 'AedGlobal::Structure::FixingPoint',
                                        'part_id': 1,
                                        'transform': {
                                            '^o': 'AedGlobal::Structure::Transform',
                                            'location': {
                                                '^o': 'AedGlobal::Structure::Location',
                                                'x': 2370,
                                                'y': 20,
                                                'z': 17.5
                                            },
                                            'rotation': {
                                                '^o': 'AedGlobal::Structure::Rotation',
                                                'x': 0,
                                                'y': 180,
                                                'z': 0
                                            }
                                        },
                                        'fixing': {
                                            '^o': 'AedGlobal::Structure::FramingNail75',
                                            'name': 'Framing Nail 75 x 3.06mm',
                                            'capacity': 1,
                                            'quantity': 1
                                        }
                                    },
                                    {
                                        '^o': 'AedGlobal::Structure::FixingPoint',
                                        'part_id': 1,
                                        'transform': {
                                            '^o': 'AedGlobal::Structure::Transform',
                                            'location': {
                                                '^o': 'AedGlobal::Structure::Location',
                                                'x': 2370,
                                                'y': 50,
                                                'z': 17.5
                                            },
                                            'rotation': {
                                                '^o': 'AedGlobal::Structure::Rotation',
                                                'x': 0,
                                                'y': 180,
                                                'z': 0
                                            }
                                        },
                                        'fixing': {
                                            '^o': 'AedGlobal::Structure::FramingNail75',
                                            'name': 'Framing Nail 75 x 3.06mm',
                                            'capacity': 1,
                                            'quantity': 1
                                        }
                                    }
                                ],
                                'component_builder': {
                                    '^o': 'AedGlobal::Structure::ComponentBuilder'
                                },
                                'design_outcomes': {
                                    '^o': 'AedGlobal::Structure::DesignOutcomes',
                                    'design_class': {
                                        '^c': 'AedGlobal::Structure::TimberStudDesign'
                                    },
                                    'design_outcomes': [
                                        {
                                            '^o': 'AedGlobal::Structure::TimberStudDesign',
                                            'grade': ':mgp10',
                                            'treatment': ':none',
                                            'ply': 1,
                                            'depth': 70,
                                            'width': 35,
                                            'length': 2370,
                                            'wind_speed': ':n2',
                                            'bevel_top': 0,
                                            'bevel_bottom': 0
                                        }
                                    ],
                                    'active_index': 0
                                },
                                'height': 2370,
                                'spacing': 450,
                                'wind_speed': ':n2',
                                'notch_depth': 0,
                                'external': true,
                                'rlw': 1500,
                                'nog_spacing': 1350,
                                'depth': 70,
                                'width': 35,
                                'length': 2370,
                                'design_type': ':tables',
                                'component_info': {
                                    ':material': ':timber',
                                    ':type': ':common_stud'
                                }
                            },
                            {
                                '^o': 'AedGlobal::Structure::CommonStud',
                                'transform': {
                                    '^o': 'AedGlobal::Structure::Transform',
                                    'location': {
                                        '^o': 'AedGlobal::Structure::Location',
                                        'x': 2735,
                                        'y': 0,
                                        'z': 35
                                    },
                                    'rotation': {
                                        '^o': 'AedGlobal::Structure::Rotation',
                                        'x': 0,
                                        'y': -90,
                                        'z': 0
                                    }
                                },
                                'parts': [
                                    {
                                        '^o': 'AedGlobal::Structure::TimberPart',
                                        'saw_cut_groups': [
                                            {
                                                '^o': 'AedGlobal::Structure::SawCutGroup',
                                                'position': ':at_lead',
                                                'saw_cuts': [
                                                    {
                                                        '^o': 'AedGlobal::Structure::SawCut',
                                                        'transform': {
                                                            '^o': 'AedGlobal::Structure::Transform',
                                                            'location': {
                                                                '^o': 'AedGlobal::Structure::Location',
                                                                'x': 0,
                                                                'y': 0,
                                                                'z': 0
                                                            },
                                                            'rotation': {
                                                                '^o': 'AedGlobal::Structure::Rotation',
                                                                'x': 0,
                                                                'y': 0,
                                                                'z': 0
                                                            }
                                                        },
                                                        'kerf_width': 6,
                                                        'outside_edge': true,
                                                        'length': 0
                                                    }
                                                ],
                                                'cut_type': ':single'
                                            },
                                            {
                                                '^o': 'AedGlobal::Structure::SawCutGroup',
                                                'position': ':at_end',
                                                'saw_cuts': [
                                                    {
                                                        '^o': 'AedGlobal::Structure::SawCut',
                                                        'transform': {
                                                            '^o': 'AedGlobal::Structure::Transform',
                                                            'location': {
                                                                '^o': 'AedGlobal::Structure::Location',
                                                                'x': 2370,
                                                                'y': 0,
                                                                'z': 0
                                                            },
                                                            'rotation': {
                                                                '^o': 'AedGlobal::Structure::Rotation',
                                                                'x': 0,
                                                                'y': 0,
                                                                'z': 0
                                                            }
                                                        },
                                                        'kerf_width': 6,
                                                        'outside_edge': false,
                                                        'length': 70
                                                    }
                                                ],
                                                'cut_type': ':single'
                                            }
                                        ],
                                        'requires_leading_cut': false,
                                        'transform': {
                                            '^o': 'AedGlobal::Structure::Transform',
                                            'location': {
                                                '^o': 'AedGlobal::Structure::Location',
                                                'x': 0,
                                                'y': 0,
                                                'z': 0
                                            },
                                            'rotation': {
                                                '^o': 'AedGlobal::Structure::Rotation',
                                                'x': 0,
                                                'y': 0,
                                                'z': 0
                                            }
                                        },
                                        'part_id': 1,
                                        'type': ':part',
                                        'width': 35,
                                        'depth': 70,
                                        'length': 2370,
                                        'dimensions_assigned': true,
                                        'grade': 'mgp10',
                                        'treatment': 'none',
                                        'all_assigned': true,
                                        'properties_assigned': true
                                    }
                                ],
                                'loads': [
                                    {
                                        '^o': 'AedGlobal::Structure::Rlw',
                                        'type': ':strip',
                                        'value': 1500,
                                        'truss_spacing': 600,
                                        'roof_material': ':sheet'
                                    }
                                ],
                                'fixing_points': [
                                    {
                                        '^o': 'AedGlobal::Structure::FixingPoint',
                                        'part_id': 1,
                                        'transform': {
                                            '^o': 'AedGlobal::Structure::Transform',
                                            'location': {
                                                '^o': 'AedGlobal::Structure::Location',
                                                'x': 0,
                                                'y': 20,
                                                'z': 17.5
                                            },
                                            'rotation': {
                                                '^o': 'AedGlobal::Structure::Rotation',
                                                'x': 0,
                                                'y': 0,
                                                'z': 0
                                            }
                                        },
                                        'fixing': {
                                            '^o': 'AedGlobal::Structure::FramingNail75',
                                            'name': 'Framing Nail 75 x 3.06mm',
                                            'capacity': 1,
                                            'quantity': 1
                                        }
                                    },
                                    {
                                        '^o': 'AedGlobal::Structure::FixingPoint',
                                        'part_id': 1,
                                        'transform': {
                                            '^o': 'AedGlobal::Structure::Transform',
                                            'location': {
                                                '^o': 'AedGlobal::Structure::Location',
                                                'x': 0,
                                                'y': 50,
                                                'z': 17.5
                                            },
                                            'rotation': {
                                                '^o': 'AedGlobal::Structure::Rotation',
                                                'x': 0,
                                                'y': 0,
                                                'z': 0
                                            }
                                        },
                                        'fixing': {
                                            '^o': 'AedGlobal::Structure::FramingNail75',
                                            'name': 'Framing Nail 75 x 3.06mm',
                                            'capacity': 1,
                                            'quantity': 1
                                        }
                                    },
                                    {
                                        '^o': 'AedGlobal::Structure::FixingPoint',
                                        'part_id': 1,
                                        'transform': {
                                            '^o': 'AedGlobal::Structure::Transform',
                                            'location': {
                                                '^o': 'AedGlobal::Structure::Location',
                                                'x': 2370,
                                                'y': 20,
                                                'z': 17.5
                                            },
                                            'rotation': {
                                                '^o': 'AedGlobal::Structure::Rotation',
                                                'x': 0,
                                                'y': 180,
                                                'z': 0
                                            }
                                        },
                                        'fixing': {
                                            '^o': 'AedGlobal::Structure::FramingNail75',
                                            'name': 'Framing Nail 75 x 3.06mm',
                                            'capacity': 1,
                                            'quantity': 1
                                        }
                                    },
                                    {
                                        '^o': 'AedGlobal::Structure::FixingPoint',
                                        'part_id': 1,
                                        'transform': {
                                            '^o': 'AedGlobal::Structure::Transform',
                                            'location': {
                                                '^o': 'AedGlobal::Structure::Location',
                                                'x': 2370,
                                                'y': 50,
                                                'z': 17.5
                                            },
                                            'rotation': {
                                                '^o': 'AedGlobal::Structure::Rotation',
                                                'x': 0,
                                                'y': 180,
                                                'z': 0
                                            }
                                        },
                                        'fixing': {
                                            '^o': 'AedGlobal::Structure::FramingNail75',
                                            'name': 'Framing Nail 75 x 3.06mm',
                                            'capacity': 1,
                                            'quantity': 1
                                        }
                                    }
                                ],
                                'component_builder': {
                                    '^o': 'AedGlobal::Structure::ComponentBuilder'
                                },
                                'design_outcomes': {
                                    '^o': 'AedGlobal::Structure::DesignOutcomes',
                                    'design_class': {
                                        '^c': 'AedGlobal::Structure::TimberStudDesign'
                                    },
                                    'design_outcomes': [
                                        {
                                            '^o': 'AedGlobal::Structure::TimberStudDesign',
                                            'grade': ':mgp10',
                                            'treatment': ':none',
                                            'ply': 1,
                                            'depth': 70,
                                            'width': 35,
                                            'length': 2370,
                                            'wind_speed': ':n2',
                                            'bevel_top': 0,
                                            'bevel_bottom': 0
                                        }
                                    ],
                                    'active_index': 0
                                },
                                'height': 2370,
                                'spacing': 450,
                                'wind_speed': ':n2',
                                'notch_depth': 0,
                                'external': true,
                                'rlw': 1500,
                                'nog_spacing': 1350,
                                'depth': 70,
                                'width': 35,
                                'length': 2370,
                                'design_type': ':tables',
                                'component_info': {
                                    ':material': ':timber',
                                    ':type': ':common_stud'
                                }
                            },
                            {
                                '^o': 'AedGlobal::Structure::CommonStud',
                                'transform': {
                                    '^o': 'AedGlobal::Structure::Transform',
                                    'location': {
                                        '^o': 'AedGlobal::Structure::Location',
                                        'x': 3185,
                                        'y': 0,
                                        'z': 35
                                    },
                                    'rotation': {
                                        '^o': 'AedGlobal::Structure::Rotation',
                                        'x': 0,
                                        'y': -90,
                                        'z': 0
                                    }
                                },
                                'parts': [
                                    {
                                        '^o': 'AedGlobal::Structure::TimberPart',
                                        'saw_cut_groups': [
                                            {
                                                '^o': 'AedGlobal::Structure::SawCutGroup',
                                                'position': ':at_lead',
                                                'saw_cuts': [
                                                    {
                                                        '^o': 'AedGlobal::Structure::SawCut',
                                                        'transform': {
                                                            '^o': 'AedGlobal::Structure::Transform',
                                                            'location': {
                                                                '^o': 'AedGlobal::Structure::Location',
                                                                'x': 0,
                                                                'y': 0,
                                                                'z': 0
                                                            },
                                                            'rotation': {
                                                                '^o': 'AedGlobal::Structure::Rotation',
                                                                'x': 0,
                                                                'y': 0,
                                                                'z': 0
                                                            }
                                                        },
                                                        'kerf_width': 6,
                                                        'outside_edge': true,
                                                        'length': 0
                                                    }
                                                ],
                                                'cut_type': ':single'
                                            },
                                            {
                                                '^o': 'AedGlobal::Structure::SawCutGroup',
                                                'position': ':at_end',
                                                'saw_cuts': [
                                                    {
                                                        '^o': 'AedGlobal::Structure::SawCut',
                                                        'transform': {
                                                            '^o': 'AedGlobal::Structure::Transform',
                                                            'location': {
                                                                '^o': 'AedGlobal::Structure::Location',
                                                                'x': 2370,
                                                                'y': 0,
                                                                'z': 0
                                                            },
                                                            'rotation': {
                                                                '^o': 'AedGlobal::Structure::Rotation',
                                                                'x': 0,
                                                                'y': 0,
                                                                'z': 0
                                                            }
                                                        },
                                                        'kerf_width': 6,
                                                        'outside_edge': false,
                                                        'length': 70
                                                    }
                                                ],
                                                'cut_type': ':single'
                                            }
                                        ],
                                        'requires_leading_cut': false,
                                        'transform': {
                                            '^o': 'AedGlobal::Structure::Transform',
                                            'location': {
                                                '^o': 'AedGlobal::Structure::Location',
                                                'x': 0,
                                                'y': 0,
                                                'z': 0
                                            },
                                            'rotation': {
                                                '^o': 'AedGlobal::Structure::Rotation',
                                                'x': 0,
                                                'y': 0,
                                                'z': 0
                                            }
                                        },
                                        'part_id': 1,
                                        'type': ':part',
                                        'width': 35,
                                        'depth': 70,
                                        'length': 2370,
                                        'dimensions_assigned': true,
                                        'grade': 'mgp10',
                                        'treatment': 'none',
                                        'all_assigned': true,
                                        'properties_assigned': true
                                    }
                                ],
                                'loads': [
                                    {
                                        '^o': 'AedGlobal::Structure::Rlw',
                                        'type': ':strip',
                                        'value': 1500,
                                        'truss_spacing': 600,
                                        'roof_material': ':sheet'
                                    }
                                ],
                                'fixing_points': [
                                    {
                                        '^o': 'AedGlobal::Structure::FixingPoint',
                                        'part_id': 1,
                                        'transform': {
                                            '^o': 'AedGlobal::Structure::Transform',
                                            'location': {
                                                '^o': 'AedGlobal::Structure::Location',
                                                'x': 0,
                                                'y': 20,
                                                'z': 17.5
                                            },
                                            'rotation': {
                                                '^o': 'AedGlobal::Structure::Rotation',
                                                'x': 0,
                                                'y': 0,
                                                'z': 0
                                            }
                                        },
                                        'fixing': {
                                            '^o': 'AedGlobal::Structure::FramingNail75',
                                            'name': 'Framing Nail 75 x 3.06mm',
                                            'capacity': 1,
                                            'quantity': 1
                                        }
                                    },
                                    {
                                        '^o': 'AedGlobal::Structure::FixingPoint',
                                        'part_id': 1,
                                        'transform': {
                                            '^o': 'AedGlobal::Structure::Transform',
                                            'location': {
                                                '^o': 'AedGlobal::Structure::Location',
                                                'x': 0,
                                                'y': 50,
                                                'z': 17.5
                                            },
                                            'rotation': {
                                                '^o': 'AedGlobal::Structure::Rotation',
                                                'x': 0,
                                                'y': 0,
                                                'z': 0
                                            }
                                        },
                                        'fixing': {
                                            '^o': 'AedGlobal::Structure::FramingNail75',
                                            'name': 'Framing Nail 75 x 3.06mm',
                                            'capacity': 1,
                                            'quantity': 1
                                        }
                                    },
                                    {
                                        '^o': 'AedGlobal::Structure::FixingPoint',
                                        'part_id': 1,
                                        'transform': {
                                            '^o': 'AedGlobal::Structure::Transform',
                                            'location': {
                                                '^o': 'AedGlobal::Structure::Location',
                                                'x': 2370,
                                                'y': 20,
                                                'z': 17.5
                                            },
                                            'rotation': {
                                                '^o': 'AedGlobal::Structure::Rotation',
                                                'x': 0,
                                                'y': 180,
                                                'z': 0
                                            }
                                        },
                                        'fixing': {
                                            '^o': 'AedGlobal::Structure::FramingNail75',
                                            'name': 'Framing Nail 75 x 3.06mm',
                                            'capacity': 1,
                                            'quantity': 1
                                        }
                                    },
                                    {
                                        '^o': 'AedGlobal::Structure::FixingPoint',
                                        'part_id': 1,
                                        'transform': {
                                            '^o': 'AedGlobal::Structure::Transform',
                                            'location': {
                                                '^o': 'AedGlobal::Structure::Location',
                                                'x': 2370,
                                                'y': 50,
                                                'z': 17.5
                                            },
                                            'rotation': {
                                                '^o': 'AedGlobal::Structure::Rotation',
                                                'x': 0,
                                                'y': 180,
                                                'z': 0
                                            }
                                        },
                                        'fixing': {
                                            '^o': 'AedGlobal::Structure::FramingNail75',
                                            'name': 'Framing Nail 75 x 3.06mm',
                                            'capacity': 1,
                                            'quantity': 1
                                        }
                                    }
                                ],
                                'component_builder': {
                                    '^o': 'AedGlobal::Structure::ComponentBuilder'
                                },
                                'design_outcomes': {
                                    '^o': 'AedGlobal::Structure::DesignOutcomes',
                                    'design_class': {
                                        '^c': 'AedGlobal::Structure::TimberStudDesign'
                                    },
                                    'design_outcomes': [
                                        {
                                            '^o': 'AedGlobal::Structure::TimberStudDesign',
                                            'grade': ':mgp10',
                                            'treatment': ':none',
                                            'ply': 1,
                                            'depth': 70,
                                            'width': 35,
                                            'length': 2370,
                                            'wind_speed': ':n2',
                                            'bevel_top': 0,
                                            'bevel_bottom': 0
                                        }
                                    ],
                                    'active_index': 0
                                },
                                'height': 2370,
                                'spacing': 450,
                                'wind_speed': ':n2',
                                'notch_depth': 0,
                                'external': true,
                                'rlw': 1500,
                                'nog_spacing': 1350,
                                'depth': 70,
                                'width': 35,
                                'length': 2370,
                                'design_type': ':tables',
                                'component_info': {
                                    ':material': ':timber',
                                    ':type': ':common_stud'
                                }
                            },
                            {
                                '^o': 'AedGlobal::Structure::CommonStud',
                                'transform': {
                                    '^o': 'AedGlobal::Structure::Transform',
                                    'location': {
                                        '^o': 'AedGlobal::Structure::Location',
                                        'x': 3442.5,
                                        'y': 0,
                                        'z': 35
                                    },
                                    'rotation': {
                                        '^o': 'AedGlobal::Structure::Rotation',
                                        'x': 0,
                                        'y': -90,
                                        'z': 0
                                    }
                                },
                                'parts': [
                                    {
                                        '^o': 'AedGlobal::Structure::TimberPart',
                                        'saw_cut_groups': [
                                            {
                                                '^o': 'AedGlobal::Structure::SawCutGroup',
                                                'position': ':at_lead',
                                                'saw_cuts': [
                                                    {
                                                        '^o': 'AedGlobal::Structure::SawCut',
                                                        'transform': {
                                                            '^o': 'AedGlobal::Structure::Transform',
                                                            'location': {
                                                                '^o': 'AedGlobal::Structure::Location',
                                                                'x': 0,
                                                                'y': 0,
                                                                'z': 0
                                                            },
                                                            'rotation': {
                                                                '^o': 'AedGlobal::Structure::Rotation',
                                                                'x': 0,
                                                                'y': 0,
                                                                'z': 0
                                                            }
                                                        },
                                                        'kerf_width': 6,
                                                        'outside_edge': true,
                                                        'length': 0
                                                    }
                                                ],
                                                'cut_type': ':single'
                                            },
                                            {
                                                '^o': 'AedGlobal::Structure::SawCutGroup',
                                                'position': ':at_end',
                                                'saw_cuts': [
                                                    {
                                                        '^o': 'AedGlobal::Structure::SawCut',
                                                        'transform': {
                                                            '^o': 'AedGlobal::Structure::Transform',
                                                            'location': {
                                                                '^o': 'AedGlobal::Structure::Location',
                                                                'x': 2370,
                                                                'y': 0,
                                                                'z': 0
                                                            },
                                                            'rotation': {
                                                                '^o': 'AedGlobal::Structure::Rotation',
                                                                'x': 0,
                                                                'y': 0,
                                                                'z': 0
                                                            }
                                                        },
                                                        'kerf_width': 6,
                                                        'outside_edge': false,
                                                        'length': 70
                                                    }
                                                ],
                                                'cut_type': ':single'
                                            }
                                        ],
                                        'requires_leading_cut': false,
                                        'transform': {
                                            '^o': 'AedGlobal::Structure::Transform',
                                            'location': {
                                                '^o': 'AedGlobal::Structure::Location',
                                                'x': 0,
                                                'y': 0,
                                                'z': 0
                                            },
                                            'rotation': {
                                                '^o': 'AedGlobal::Structure::Rotation',
                                                'x': 0,
                                                'y': 0,
                                                'z': 0
                                            }
                                        },
                                        'part_id': 1,
                                        'type': ':part',
                                        'width': 35,
                                        'depth': 70,
                                        'length': 2370,
                                        'dimensions_assigned': true,
                                        'grade': 'mgp10',
                                        'treatment': 'none',
                                        'all_assigned': true,
                                        'properties_assigned': true
                                    }
                                ],
                                'loads': [
                                    {
                                        '^o': 'AedGlobal::Structure::Rlw',
                                        'type': ':strip',
                                        'value': 1500,
                                        'truss_spacing': 600,
                                        'roof_material': ':sheet'
                                    }
                                ],
                                'fixing_points': [
                                    {
                                        '^o': 'AedGlobal::Structure::FixingPoint',
                                        'part_id': 1,
                                        'transform': {
                                            '^o': 'AedGlobal::Structure::Transform',
                                            'location': {
                                                '^o': 'AedGlobal::Structure::Location',
                                                'x': 0,
                                                'y': 20,
                                                'z': 17.5
                                            },
                                            'rotation': {
                                                '^o': 'AedGlobal::Structure::Rotation',
                                                'x': 0,
                                                'y': 0,
                                                'z': 0
                                            }
                                        },
                                        'fixing': {
                                            '^o': 'AedGlobal::Structure::FramingNail75',
                                            'name': 'Framing Nail 75 x 3.06mm',
                                            'capacity': 1,
                                            'quantity': 1
                                        }
                                    },
                                    {
                                        '^o': 'AedGlobal::Structure::FixingPoint',
                                        'part_id': 1,
                                        'transform': {
                                            '^o': 'AedGlobal::Structure::Transform',
                                            'location': {
                                                '^o': 'AedGlobal::Structure::Location',
                                                'x': 0,
                                                'y': 50,
                                                'z': 17.5
                                            },
                                            'rotation': {
                                                '^o': 'AedGlobal::Structure::Rotation',
                                                'x': 0,
                                                'y': 0,
                                                'z': 0
                                            }
                                        },
                                        'fixing': {
                                            '^o': 'AedGlobal::Structure::FramingNail75',
                                            'name': 'Framing Nail 75 x 3.06mm',
                                            'capacity': 1,
                                            'quantity': 1
                                        }
                                    },
                                    {
                                        '^o': 'AedGlobal::Structure::FixingPoint',
                                        'part_id': 1,
                                        'transform': {
                                            '^o': 'AedGlobal::Structure::Transform',
                                            'location': {
                                                '^o': 'AedGlobal::Structure::Location',
                                                'x': 2370,
                                                'y': 20,
                                                'z': 17.5
                                            },
                                            'rotation': {
                                                '^o': 'AedGlobal::Structure::Rotation',
                                                'x': 0,
                                                'y': 180,
                                                'z': 0
                                            }
                                        },
                                        'fixing': {
                                            '^o': 'AedGlobal::Structure::FramingNail75',
                                            'name': 'Framing Nail 75 x 3.06mm',
                                            'capacity': 1,
                                            'quantity': 1
                                        }
                                    },
                                    {
                                        '^o': 'AedGlobal::Structure::FixingPoint',
                                        'part_id': 1,
                                        'transform': {
                                            '^o': 'AedGlobal::Structure::Transform',
                                            'location': {
                                                '^o': 'AedGlobal::Structure::Location',
                                                'x': 2370,
                                                'y': 50,
                                                'z': 17.5
                                            },
                                            'rotation': {
                                                '^o': 'AedGlobal::Structure::Rotation',
                                                'x': 0,
                                                'y': 180,
                                                'z': 0
                                            }
                                        },
                                        'fixing': {
                                            '^o': 'AedGlobal::Structure::FramingNail75',
                                            'name': 'Framing Nail 75 x 3.06mm',
                                            'capacity': 1,
                                            'quantity': 1
                                        }
                                    }
                                ],
                                'component_builder': {
                                    '^o': 'AedGlobal::Structure::ComponentBuilder'
                                },
                                'design_outcomes': {
                                    '^o': 'AedGlobal::Structure::DesignOutcomes',
                                    'design_class': {
                                        '^c': 'AedGlobal::Structure::TimberStudDesign'
                                    },
                                    'design_outcomes': [
                                        {
                                            '^o': 'AedGlobal::Structure::TimberStudDesign',
                                            'grade': ':mgp10',
                                            'treatment': ':none',
                                            'ply': 1,
                                            'depth': 70,
                                            'width': 35,
                                            'length': 2370,
                                            'wind_speed': ':n2',
                                            'bevel_top': 0,
                                            'bevel_bottom': 0
                                        }
                                    ],
                                    'active_index': 0
                                },
                                'height': 2370,
                                'spacing': 450,
                                'wind_speed': ':n2',
                                'notch_depth': 0,
                                'external': true,
                                'rlw': 1500,
                                'nog_spacing': 1350,
                                'depth': 70,
                                'width': 35,
                                'length': 2370,
                                'design_type': ':tables',
                                'component_info': {
                                    ':material': ':timber',
                                    ':type': ':common_stud'
                                }
                            },
                            {
                                '^o': 'AedGlobal::Structure::CommonStud',
                                'transform': {
                                    '^o': 'AedGlobal::Structure::Transform',
                                    'location': {
                                        '^o': 'AedGlobal::Structure::Location',
                                        'x': 3700,
                                        'y': 0,
                                        'z': 35
                                    },
                                    'rotation': {
                                        '^o': 'AedGlobal::Structure::Rotation',
                                        'x': 0,
                                        'y': -90,
                                        'z': 0
                                    }
                                },
                                'parts': [
                                    {
                                        '^o': 'AedGlobal::Structure::TimberPart',
                                        'saw_cut_groups': [
                                            {
                                                '^o': 'AedGlobal::Structure::SawCutGroup',
                                                'position': ':at_lead',
                                                'saw_cuts': [
                                                    {
                                                        '^o': 'AedGlobal::Structure::SawCut',
                                                        'transform': {
                                                            '^o': 'AedGlobal::Structure::Transform',
                                                            'location': {
                                                                '^o': 'AedGlobal::Structure::Location',
                                                                'x': 0,
                                                                'y': 0,
                                                                'z': 0
                                                            },
                                                            'rotation': {
                                                                '^o': 'AedGlobal::Structure::Rotation',
                                                                'x': 0,
                                                                'y': 0,
                                                                'z': 0
                                                            }
                                                        },
                                                        'kerf_width': 6,
                                                        'outside_edge': true,
                                                        'length': 0
                                                    }
                                                ],
                                                'cut_type': ':single'
                                            },
                                            {
                                                '^o': 'AedGlobal::Structure::SawCutGroup',
                                                'position': ':at_end',
                                                'saw_cuts': [
                                                    {
                                                        '^o': 'AedGlobal::Structure::SawCut',
                                                        'transform': {
                                                            '^o': 'AedGlobal::Structure::Transform',
                                                            'location': {
                                                                '^o': 'AedGlobal::Structure::Location',
                                                                'x': 2370,
                                                                'y': 0,
                                                                'z': 0
                                                            },
                                                            'rotation': {
                                                                '^o': 'AedGlobal::Structure::Rotation',
                                                                'x': 0,
                                                                'y': 0,
                                                                'z': 0
                                                            }
                                                        },
                                                        'kerf_width': 6,
                                                        'outside_edge': false,
                                                        'length': 70
                                                    }
                                                ],
                                                'cut_type': ':single'
                                            }
                                        ],
                                        'requires_leading_cut': false,
                                        'transform': {
                                            '^o': 'AedGlobal::Structure::Transform',
                                            'location': {
                                                '^o': 'AedGlobal::Structure::Location',
                                                'x': 0,
                                                'y': 0,
                                                'z': 0
                                            },
                                            'rotation': {
                                                '^o': 'AedGlobal::Structure::Rotation',
                                                'x': 0,
                                                'y': 0,
                                                'z': 0
                                            }
                                        },
                                        'part_id': 1,
                                        'type': ':part',
                                        'width': 35,
                                        'depth': 70,
                                        'length': 2370,
                                        'dimensions_assigned': true,
                                        'grade': 'mgp10',
                                        'treatment': 'none',
                                        'all_assigned': true,
                                        'properties_assigned': true
                                    }
                                ],
                                'loads': [
                                    {
                                        '^o': 'AedGlobal::Structure::Rlw',
                                        'type': ':strip',
                                        'value': 1500,
                                        'truss_spacing': 600,
                                        'roof_material': ':sheet'
                                    }
                                ],
                                'fixing_points': [
                                    {
                                        '^o': 'AedGlobal::Structure::FixingPoint',
                                        'part_id': 1,
                                        'transform': {
                                            '^o': 'AedGlobal::Structure::Transform',
                                            'location': {
                                                '^o': 'AedGlobal::Structure::Location',
                                                'x': 0,
                                                'y': 20,
                                                'z': 17.5
                                            },
                                            'rotation': {
                                                '^o': 'AedGlobal::Structure::Rotation',
                                                'x': 0,
                                                'y': 0,
                                                'z': 0
                                            }
                                        },
                                        'fixing': {
                                            '^o': 'AedGlobal::Structure::FramingNail75',
                                            'name': 'Framing Nail 75 x 3.06mm',
                                            'capacity': 1,
                                            'quantity': 1
                                        }
                                    },
                                    {
                                        '^o': 'AedGlobal::Structure::FixingPoint',
                                        'part_id': 1,
                                        'transform': {
                                            '^o': 'AedGlobal::Structure::Transform',
                                            'location': {
                                                '^o': 'AedGlobal::Structure::Location',
                                                'x': 0,
                                                'y': 50,
                                                'z': 17.5
                                            },
                                            'rotation': {
                                                '^o': 'AedGlobal::Structure::Rotation',
                                                'x': 0,
                                                'y': 0,
                                                'z': 0
                                            }
                                        },
                                        'fixing': {
                                            '^o': 'AedGlobal::Structure::FramingNail75',
                                            'name': 'Framing Nail 75 x 3.06mm',
                                            'capacity': 1,
                                            'quantity': 1
                                        }
                                    },
                                    {
                                        '^o': 'AedGlobal::Structure::FixingPoint',
                                        'part_id': 1,
                                        'transform': {
                                            '^o': 'AedGlobal::Structure::Transform',
                                            'location': {
                                                '^o': 'AedGlobal::Structure::Location',
                                                'x': 2370,
                                                'y': 20,
                                                'z': 17.5
                                            },
                                            'rotation': {
                                                '^o': 'AedGlobal::Structure::Rotation',
                                                'x': 0,
                                                'y': 180,
                                                'z': 0
                                            }
                                        },
                                        'fixing': {
                                            '^o': 'AedGlobal::Structure::FramingNail75',
                                            'name': 'Framing Nail 75 x 3.06mm',
                                            'capacity': 1,
                                            'quantity': 1
                                        }
                                    },
                                    {
                                        '^o': 'AedGlobal::Structure::FixingPoint',
                                        'part_id': 1,
                                        'transform': {
                                            '^o': 'AedGlobal::Structure::Transform',
                                            'location': {
                                                '^o': 'AedGlobal::Structure::Location',
                                                'x': 2370,
                                                'y': 50,
                                                'z': 17.5
                                            },
                                            'rotation': {
                                                '^o': 'AedGlobal::Structure::Rotation',
                                                'x': 0,
                                                'y': 180,
                                                'z': 0
                                            }
                                        },
                                        'fixing': {
                                            '^o': 'AedGlobal::Structure::FramingNail75',
                                            'name': 'Framing Nail 75 x 3.06mm',
                                            'capacity': 1,
                                            'quantity': 1
                                        }
                                    }
                                ],
                                'component_builder': {
                                    '^o': 'AedGlobal::Structure::ComponentBuilder'
                                },
                                'design_outcomes': {
                                    '^o': 'AedGlobal::Structure::DesignOutcomes',
                                    'design_class': {
                                        '^c': 'AedGlobal::Structure::TimberStudDesign'
                                    },
                                    'design_outcomes': [
                                        {
                                            '^o': 'AedGlobal::Structure::TimberStudDesign',
                                            'grade': ':mgp10',
                                            'treatment': ':none',
                                            'ply': 1,
                                            'depth': 70,
                                            'width': 35,
                                            'length': 2370,
                                            'wind_speed': ':n2',
                                            'bevel_top': 0,
                                            'bevel_bottom': 0
                                        }
                                    ],
                                    'active_index': 0
                                },
                                'height': 2370,
                                'spacing': 450,
                                'wind_speed': ':n2',
                                'notch_depth': 0,
                                'external': true,
                                'rlw': 1500,
                                'nog_spacing': 1350,
                                'depth': 70,
                                'width': 35,
                                'length': 2370,
                                'design_type': ':tables',
                                'component_info': {
                                    ':material': ':timber',
                                    ':type': ':common_stud'
                                }
                            }
                        ],
                        'jamb_studs': [],
                        'loaded_studs': [],
                        'bracing_studs': [],
                        'junctions': [],
                        'lintels': [],
                        'box_trimmers': [],
                        'head_trimmers': [],
                        'sill_trimmers': [],
                        'under_studs': [],
                        'over_studs': [],
                        'sheet_bracing': [],
                        'angle_bracing': [],
                        'beam_pockets': [],
                        'nogs': [
                            {
                                '^o': 'AedGlobal::Structure::StandardNog',
                                'transform': {
                                    '^o': 'AedGlobal::Structure::Transform',
                                    'location': {
                                        '^o': 'AedGlobal::Structure::Location',
                                        'x': 35,
                                        'y': 0,
                                        'z': 1237.5
                                    },
                                    'rotation': {
                                        '^o': 'AedGlobal::Structure::Rotation',
                                        'x': 0,
                                        'y': 0,
                                        'z': 0
                                    }
                                },
                                'parts': [
                                    {
                                        '^o': 'AedGlobal::Structure::TimberPart',
                                        'saw_cut_groups': [
                                            {
                                                '^o': 'AedGlobal::Structure::SawCutGroup',
                                                'position': ':at_lead',
                                                'saw_cuts': [
                                                    {
                                                        '^o': 'AedGlobal::Structure::SawCut',
                                                        'transform': {
                                                            '^o': 'AedGlobal::Structure::Transform',
                                                            'location': {
                                                                '^o': 'AedGlobal::Structure::Location',
                                                                'x': 0,
                                                                'y': 0,
                                                                'z': 0
                                                            },
                                                            'rotation': {
                                                                '^o': 'AedGlobal::Structure::Rotation',
                                                                'x': 0,
                                                                'y': 0,
                                                                'z': 0
                                                            }
                                                        },
                                                        'kerf_width': 6,
                                                        'outside_edge': true,
                                                        'length': 0
                                                    }
                                                ],
                                                'cut_type': ':single'
                                            },
                                            {
                                                '^o': 'AedGlobal::Structure::SawCutGroup',
                                                'position': ':at_end',
                                                'saw_cuts': [
                                                    {
                                                        '^o': 'AedGlobal::Structure::SawCut',
                                                        'transform': {
                                                            '^o': 'AedGlobal::Structure::Transform',
                                                            'location': {
                                                                '^o': 'AedGlobal::Structure::Location',
                                                                'x': 415,
                                                                'y': 0,
                                                                'z': 0
                                                            },
                                                            'rotation': {
                                                                '^o': 'AedGlobal::Structure::Rotation',
                                                                'x': 0,
                                                                'y': 0,
                                                                'z': 0
                                                            }
                                                        },
                                                        'kerf_width': 6,
                                                        'outside_edge': false,
                                                        'length': 70
                                                    }
                                                ],
                                                'cut_type': ':single'
                                            }
                                        ],
                                        'requires_leading_cut': false,
                                        'transform': {
                                            '^o': 'AedGlobal::Structure::Transform',
                                            'location': {
                                                '^o': 'AedGlobal::Structure::Location',
                                                'x': 0,
                                                'y': 0,
                                                'z': 0
                                            },
                                            'rotation': {
                                                '^o': 'AedGlobal::Structure::Rotation',
                                                'x': 0,
                                                'y': 0,
                                                'z': 0
                                            }
                                        },
                                        'part_id': 1,
                                        'type': ':part',
                                        'width': 35,
                                        'depth': 70,
                                        'length': 415,
                                        'dimensions_assigned': true,
                                        'grade': 'f5',
                                        'treatment': 'none',
                                        'all_assigned': true,
                                        'properties_assigned': true
                                    }
                                ],
                                'loads': [],
                                'fixing_points': [
                                    {
                                        '^o': 'AedGlobal::Structure::FixingPoint',
                                        'part_id': 1,
                                        'transform': {
                                            '^o': 'AedGlobal::Structure::Transform',
                                            'location': {
                                                '^o': 'AedGlobal::Structure::Location',
                                                'x': 0,
                                                'y': 20,
                                                'z': 17.5
                                            },
                                            'rotation': {
                                                '^o': 'AedGlobal::Structure::Rotation',
                                                'x': 0,
                                                'y': 0,
                                                'z': 0
                                            }
                                        },
                                        'fixing': {
                                            '^o': 'AedGlobal::Structure::FramingNail75',
                                            'name': 'Framing Nail 75 x 3.06mm',
                                            'capacity': 1,
                                            'quantity': 1
                                        }
                                    },
                                    {
                                        '^o': 'AedGlobal::Structure::FixingPoint',
                                        'part_id': 1,
                                        'transform': {
                                            '^o': 'AedGlobal::Structure::Transform',
                                            'location': {
                                                '^o': 'AedGlobal::Structure::Location',
                                                'x': 0,
                                                'y': 50,
                                                'z': 17.5
                                            },
                                            'rotation': {
                                                '^o': 'AedGlobal::Structure::Rotation',
                                                'x': 0,
                                                'y': 0,
                                                'z': 0
                                            }
                                        },
                                        'fixing': {
                                            '^o': 'AedGlobal::Structure::FramingNail75',
                                            'name': 'Framing Nail 75 x 3.06mm',
                                            'capacity': 1,
                                            'quantity': 1
                                        }
                                    },
                                    {
                                        '^o': 'AedGlobal::Structure::FixingPoint',
                                        'part_id': 1,
                                        'transform': {
                                            '^o': 'AedGlobal::Structure::Transform',
                                            'location': {
                                                '^o': 'AedGlobal::Structure::Location',
                                                'x': 415,
                                                'y': 20,
                                                'z': 17.5
                                            },
                                            'rotation': {
                                                '^o': 'AedGlobal::Structure::Rotation',
                                                'x': 0,
                                                'y': 180,
                                                'z': 0
                                            }
                                        },
                                        'fixing': {
                                            '^o': 'AedGlobal::Structure::FramingNail75',
                                            'name': 'Framing Nail 75 x 3.06mm',
                                            'capacity': 1,
                                            'quantity': 1
                                        }
                                    },
                                    {
                                        '^o': 'AedGlobal::Structure::FixingPoint',
                                        'part_id': 1,
                                        'transform': {
                                            '^o': 'AedGlobal::Structure::Transform',
                                            'location': {
                                                '^o': 'AedGlobal::Structure::Location',
                                                'x': 415,
                                                'y': 50,
                                                'z': 17.5
                                            },
                                            'rotation': {
                                                '^o': 'AedGlobal::Structure::Rotation',
                                                'x': 0,
                                                'y': 180,
                                                'z': 0
                                            }
                                        },
                                        'fixing': {
                                            '^o': 'AedGlobal::Structure::FramingNail75',
                                            'name': 'Framing Nail 75 x 3.06mm',
                                            'capacity': 1,
                                            'quantity': 1
                                        }
                                    }
                                ],
                                'component_builder': {
                                    '^o': 'AedGlobal::Structure::ComponentBuilder'
                                },
                                'design_outcomes': {
                                    '^o': 'AedGlobal::Structure::DesignOutcomes',
                                    'design_class': {
                                        '^c': 'AedGlobal::Structure::TimberDesign'
                                    },
                                    'design_outcomes': [
                                        {
                                            '^o': 'AedGlobal::Structure::TimberDesign',
                                            'grade': ':f5',
                                            'treatment': ':none',
                                            'ply': 1,
                                            'depth': 70,
                                            'width': 35,
                                            'length': 222.5,
                                            'wind_speed': ':n2'
                                        }
                                    ],
                                    'active_index': 0
                                },
                                'depth': 70,
                                'width': 35,
                                'length': 415,
                                'design_type': ':tables',
                                'component_info': {
                                    ':material': ':timber',
                                    ':type': ':nog'
                                }
                            },
                            {
                                '^o': 'AedGlobal::Structure::StandardNog',
                                'transform': {
                                    '^o': 'AedGlobal::Structure::Transform',
                                    'location': {
                                        '^o': 'AedGlobal::Structure::Location',
                                        'x': 485,
                                        'y': 0,
                                        'z': 1202.5
                                    },
                                    'rotation': {
                                        '^o': 'AedGlobal::Structure::Rotation',
                                        'x': 0,
                                        'y': 0,
                                        'z': 0
                                    }
                                },
                                'parts': [
                                    {
                                        '^o': 'AedGlobal::Structure::TimberPart',
                                        'saw_cut_groups': [
                                            {
                                                '^o': 'AedGlobal::Structure::SawCutGroup',
                                                'position': ':at_lead',
                                                'saw_cuts': [
                                                    {
                                                        '^o': 'AedGlobal::Structure::SawCut',
                                                        'transform': {
                                                            '^o': 'AedGlobal::Structure::Transform',
                                                            'location': {
                                                                '^o': 'AedGlobal::Structure::Location',
                                                                'x': 0,
                                                                'y': 0,
                                                                'z': 0
                                                            },
                                                            'rotation': {
                                                                '^o': 'AedGlobal::Structure::Rotation',
                                                                'x': 0,
                                                                'y': 0,
                                                                'z': 0
                                                            }
                                                        },
                                                        'kerf_width': 6,
                                                        'outside_edge': true,
                                                        'length': 0
                                                    }
                                                ],
                                                'cut_type': ':single'
                                            },
                                            {
                                                '^o': 'AedGlobal::Structure::SawCutGroup',
                                                'position': ':at_end',
                                                'saw_cuts': [
                                                    {
                                                        '^o': 'AedGlobal::Structure::SawCut',
                                                        'transform': {
                                                            '^o': 'AedGlobal::Structure::Transform',
                                                            'location': {
                                                                '^o': 'AedGlobal::Structure::Location',
                                                                'x': 415,
                                                                'y': 0,
                                                                'z': 0
                                                            },
                                                            'rotation': {
                                                                '^o': 'AedGlobal::Structure::Rotation',
                                                                'x': 0,
                                                                'y': 0,
                                                                'z': 0
                                                            }
                                                        },
                                                        'kerf_width': 6,
                                                        'outside_edge': false,
                                                        'length': 70
                                                    }
                                                ],
                                                'cut_type': ':single'
                                            }
                                        ],
                                        'requires_leading_cut': false,
                                        'transform': {
                                            '^o': 'AedGlobal::Structure::Transform',
                                            'location': {
                                                '^o': 'AedGlobal::Structure::Location',
                                                'x': 0,
                                                'y': 0,
                                                'z': 0
                                            },
                                            'rotation': {
                                                '^o': 'AedGlobal::Structure::Rotation',
                                                'x': 0,
                                                'y': 0,
                                                'z': 0
                                            }
                                        },
                                        'part_id': 1,
                                        'type': ':part',
                                        'width': 35,
                                        'depth': 70,
                                        'length': 415,
                                        'dimensions_assigned': true,
                                        'grade': 'f5',
                                        'treatment': 'none',
                                        'all_assigned': true,
                                        'properties_assigned': true
                                    }
                                ],
                                'loads': [],
                                'fixing_points': [
                                    {
                                        '^o': 'AedGlobal::Structure::FixingPoint',
                                        'part_id': 1,
                                        'transform': {
                                            '^o': 'AedGlobal::Structure::Transform',
                                            'location': {
                                                '^o': 'AedGlobal::Structure::Location',
                                                'x': 0,
                                                'y': 20,
                                                'z': 17.5
                                            },
                                            'rotation': {
                                                '^o': 'AedGlobal::Structure::Rotation',
                                                'x': 0,
                                                'y': 0,
                                                'z': 0
                                            }
                                        },
                                        'fixing': {
                                            '^o': 'AedGlobal::Structure::FramingNail75',
                                            'name': 'Framing Nail 75 x 3.06mm',
                                            'capacity': 1,
                                            'quantity': 1
                                        }
                                    },
                                    {
                                        '^o': 'AedGlobal::Structure::FixingPoint',
                                        'part_id': 1,
                                        'transform': {
                                            '^o': 'AedGlobal::Structure::Transform',
                                            'location': {
                                                '^o': 'AedGlobal::Structure::Location',
                                                'x': 0,
                                                'y': 50,
                                                'z': 17.5
                                            },
                                            'rotation': {
                                                '^o': 'AedGlobal::Structure::Rotation',
                                                'x': 0,
                                                'y': 0,
                                                'z': 0
                                            }
                                        },
                                        'fixing': {
                                            '^o': 'AedGlobal::Structure::FramingNail75',
                                            'name': 'Framing Nail 75 x 3.06mm',
                                            'capacity': 1,
                                            'quantity': 1
                                        }
                                    },
                                    {
                                        '^o': 'AedGlobal::Structure::FixingPoint',
                                        'part_id': 1,
                                        'transform': {
                                            '^o': 'AedGlobal::Structure::Transform',
                                            'location': {
                                                '^o': 'AedGlobal::Structure::Location',
                                                'x': 415,
                                                'y': 20,
                                                'z': 17.5
                                            },
                                            'rotation': {
                                                '^o': 'AedGlobal::Structure::Rotation',
                                                'x': 0,
                                                'y': 180,
                                                'z': 0
                                            }
                                        },
                                        'fixing': {
                                            '^o': 'AedGlobal::Structure::FramingNail75',
                                            'name': 'Framing Nail 75 x 3.06mm',
                                            'capacity': 1,
                                            'quantity': 1
                                        }
                                    },
                                    {
                                        '^o': 'AedGlobal::Structure::FixingPoint',
                                        'part_id': 1,
                                        'transform': {
                                            '^o': 'AedGlobal::Structure::Transform',
                                            'location': {
                                                '^o': 'AedGlobal::Structure::Location',
                                                'x': 415,
                                                'y': 50,
                                                'z': 17.5
                                            },
                                            'rotation': {
                                                '^o': 'AedGlobal::Structure::Rotation',
                                                'x': 0,
                                                'y': 180,
                                                'z': 0
                                            }
                                        },
                                        'fixing': {
                                            '^o': 'AedGlobal::Structure::FramingNail75',
                                            'name': 'Framing Nail 75 x 3.06mm',
                                            'capacity': 1,
                                            'quantity': 1
                                        }
                                    }
                                ],
                                'component_builder': {
                                    '^o': 'AedGlobal::Structure::ComponentBuilder'
                                },
                                'design_outcomes': {
                                    '^o': 'AedGlobal::Structure::DesignOutcomes',
                                    'design_class': {
                                        '^c': 'AedGlobal::Structure::TimberDesign'
                                    },
                                    'design_outcomes': [
                                        {
                                            '^o': 'AedGlobal::Structure::TimberDesign',
                                            'grade': ':f5',
                                            'treatment': ':none',
                                            'ply': 1,
                                            'depth': 70,
                                            'width': 35,
                                            'length': 222.5,
                                            'wind_speed': ':n2'
                                        }
                                    ],
                                    'active_index': 0
                                },
                                'depth': 70,
                                'width': 35,
                                'length': 415,
                                'design_type': ':tables',
                                'component_info': {
                                    ':material': ':timber',
                                    ':type': ':nog'
                                }
                            },
                            {
                                '^o': 'AedGlobal::Structure::StandardNog',
                                'transform': {
                                    '^o': 'AedGlobal::Structure::Transform',
                                    'location': {
                                        '^o': 'AedGlobal::Structure::Location',
                                        'x': 935,
                                        'y': 0,
                                        'z': 1237.5
                                    },
                                    'rotation': {
                                        '^o': 'AedGlobal::Structure::Rotation',
                                        'x': 0,
                                        'y': 0,
                                        'z': 0
                                    }
                                },
                                'parts': [
                                    {
                                        '^o': 'AedGlobal::Structure::TimberPart',
                                        'saw_cut_groups': [
                                            {
                                                '^o': 'AedGlobal::Structure::SawCutGroup',
                                                'position': ':at_lead',
                                                'saw_cuts': [
                                                    {
                                                        '^o': 'AedGlobal::Structure::SawCut',
                                                        'transform': {
                                                            '^o': 'AedGlobal::Structure::Transform',
                                                            'location': {
                                                                '^o': 'AedGlobal::Structure::Location',
                                                                'x': 0,
                                                                'y': 0,
                                                                'z': 0
                                                            },
                                                            'rotation': {
                                                                '^o': 'AedGlobal::Structure::Rotation',
                                                                'x': 0,
                                                                'y': 0,
                                                                'z': 0
                                                            }
                                                        },
                                                        'kerf_width': 6,
                                                        'outside_edge': true,
                                                        'length': 0
                                                    }
                                                ],
                                                'cut_type': ':single'
                                            },
                                            {
                                                '^o': 'AedGlobal::Structure::SawCutGroup',
                                                'position': ':at_end',
                                                'saw_cuts': [
                                                    {
                                                        '^o': 'AedGlobal::Structure::SawCut',
                                                        'transform': {
                                                            '^o': 'AedGlobal::Structure::Transform',
                                                            'location': {
                                                                '^o': 'AedGlobal::Structure::Location',
                                                                'x': 415,
                                                                'y': 0,
                                                                'z': 0
                                                            },
                                                            'rotation': {
                                                                '^o': 'AedGlobal::Structure::Rotation',
                                                                'x': 0,
                                                                'y': 0,
                                                                'z': 0
                                                            }
                                                        },
                                                        'kerf_width': 6,
                                                        'outside_edge': false,
                                                        'length': 70
                                                    }
                                                ],
                                                'cut_type': ':single'
                                            }
                                        ],
                                        'requires_leading_cut': false,
                                        'transform': {
                                            '^o': 'AedGlobal::Structure::Transform',
                                            'location': {
                                                '^o': 'AedGlobal::Structure::Location',
                                                'x': 0,
                                                'y': 0,
                                                'z': 0
                                            },
                                            'rotation': {
                                                '^o': 'AedGlobal::Structure::Rotation',
                                                'x': 0,
                                                'y': 0,
                                                'z': 0
                                            }
                                        },
                                        'part_id': 1,
                                        'type': ':part',
                                        'width': 35,
                                        'depth': 70,
                                        'length': 415,
                                        'dimensions_assigned': true,
                                        'grade': 'f5',
                                        'treatment': 'none',
                                        'all_assigned': true,
                                        'properties_assigned': true
                                    }
                                ],
                                'loads': [],
                                'fixing_points': [
                                    {
                                        '^o': 'AedGlobal::Structure::FixingPoint',
                                        'part_id': 1,
                                        'transform': {
                                            '^o': 'AedGlobal::Structure::Transform',
                                            'location': {
                                                '^o': 'AedGlobal::Structure::Location',
                                                'x': 0,
                                                'y': 20,
                                                'z': 17.5
                                            },
                                            'rotation': {
                                                '^o': 'AedGlobal::Structure::Rotation',
                                                'x': 0,
                                                'y': 0,
                                                'z': 0
                                            }
                                        },
                                        'fixing': {
                                            '^o': 'AedGlobal::Structure::FramingNail75',
                                            'name': 'Framing Nail 75 x 3.06mm',
                                            'capacity': 1,
                                            'quantity': 1
                                        }
                                    },
                                    {
                                        '^o': 'AedGlobal::Structure::FixingPoint',
                                        'part_id': 1,
                                        'transform': {
                                            '^o': 'AedGlobal::Structure::Transform',
                                            'location': {
                                                '^o': 'AedGlobal::Structure::Location',
                                                'x': 0,
                                                'y': 50,
                                                'z': 17.5
                                            },
                                            'rotation': {
                                                '^o': 'AedGlobal::Structure::Rotation',
                                                'x': 0,
                                                'y': 0,
                                                'z': 0
                                            }
                                        },
                                        'fixing': {
                                            '^o': 'AedGlobal::Structure::FramingNail75',
                                            'name': 'Framing Nail 75 x 3.06mm',
                                            'capacity': 1,
                                            'quantity': 1
                                        }
                                    },
                                    {
                                        '^o': 'AedGlobal::Structure::FixingPoint',
                                        'part_id': 1,
                                        'transform': {
                                            '^o': 'AedGlobal::Structure::Transform',
                                            'location': {
                                                '^o': 'AedGlobal::Structure::Location',
                                                'x': 415,
                                                'y': 20,
                                                'z': 17.5
                                            },
                                            'rotation': {
                                                '^o': 'AedGlobal::Structure::Rotation',
                                                'x': 0,
                                                'y': 180,
                                                'z': 0
                                            }
                                        },
                                        'fixing': {
                                            '^o': 'AedGlobal::Structure::FramingNail75',
                                            'name': 'Framing Nail 75 x 3.06mm',
                                            'capacity': 1,
                                            'quantity': 1
                                        }
                                    },
                                    {
                                        '^o': 'AedGlobal::Structure::FixingPoint',
                                        'part_id': 1,
                                        'transform': {
                                            '^o': 'AedGlobal::Structure::Transform',
                                            'location': {
                                                '^o': 'AedGlobal::Structure::Location',
                                                'x': 415,
                                                'y': 50,
                                                'z': 17.5
                                            },
                                            'rotation': {
                                                '^o': 'AedGlobal::Structure::Rotation',
                                                'x': 0,
                                                'y': 180,
                                                'z': 0
                                            }
                                        },
                                        'fixing': {
                                            '^o': 'AedGlobal::Structure::FramingNail75',
                                            'name': 'Framing Nail 75 x 3.06mm',
                                            'capacity': 1,
                                            'quantity': 1
                                        }
                                    }
                                ],
                                'component_builder': {
                                    '^o': 'AedGlobal::Structure::ComponentBuilder'
                                },
                                'design_outcomes': {
                                    '^o': 'AedGlobal::Structure::DesignOutcomes',
                                    'design_class': {
                                        '^c': 'AedGlobal::Structure::TimberDesign'
                                    },
                                    'design_outcomes': [
                                        {
                                            '^o': 'AedGlobal::Structure::TimberDesign',
                                            'grade': ':f5',
                                            'treatment': ':none',
                                            'ply': 1,
                                            'depth': 70,
                                            'width': 35,
                                            'length': 222.5,
                                            'wind_speed': ':n2'
                                        }
                                    ],
                                    'active_index': 0
                                },
                                'depth': 70,
                                'width': 35,
                                'length': 415,
                                'design_type': ':tables',
                                'component_info': {
                                    ':material': ':timber',
                                    ':type': ':nog'
                                }
                            },
                            {
                                '^o': 'AedGlobal::Structure::StandardNog',
                                'transform': {
                                    '^o': 'AedGlobal::Structure::Transform',
                                    'location': {
                                        '^o': 'AedGlobal::Structure::Location',
                                        'x': 1385,
                                        'y': 0,
                                        'z': 1202.5
                                    },
                                    'rotation': {
                                        '^o': 'AedGlobal::Structure::Rotation',
                                        'x': 0,
                                        'y': 0,
                                        'z': 0
                                    }
                                },
                                'parts': [
                                    {
                                        '^o': 'AedGlobal::Structure::TimberPart',
                                        'saw_cut_groups': [
                                            {
                                                '^o': 'AedGlobal::Structure::SawCutGroup',
                                                'position': ':at_lead',
                                                'saw_cuts': [
                                                    {
                                                        '^o': 'AedGlobal::Structure::SawCut',
                                                        'transform': {
                                                            '^o': 'AedGlobal::Structure::Transform',
                                                            'location': {
                                                                '^o': 'AedGlobal::Structure::Location',
                                                                'x': 0,
                                                                'y': 0,
                                                                'z': 0
                                                            },
                                                            'rotation': {
                                                                '^o': 'AedGlobal::Structure::Rotation',
                                                                'x': 0,
                                                                'y': 0,
                                                                'z': 0
                                                            }
                                                        },
                                                        'kerf_width': 6,
                                                        'outside_edge': true,
                                                        'length': 0
                                                    }
                                                ],
                                                'cut_type': ':single'
                                            },
                                            {
                                                '^o': 'AedGlobal::Structure::SawCutGroup',
                                                'position': ':at_end',
                                                'saw_cuts': [
                                                    {
                                                        '^o': 'AedGlobal::Structure::SawCut',
                                                        'transform': {
                                                            '^o': 'AedGlobal::Structure::Transform',
                                                            'location': {
                                                                '^o': 'AedGlobal::Structure::Location',
                                                                'x': 415,
                                                                'y': 0,
                                                                'z': 0
                                                            },
                                                            'rotation': {
                                                                '^o': 'AedGlobal::Structure::Rotation',
                                                                'x': 0,
                                                                'y': 0,
                                                                'z': 0
                                                            }
                                                        },
                                                        'kerf_width': 6,
                                                        'outside_edge': false,
                                                        'length': 70
                                                    }
                                                ],
                                                'cut_type': ':single'
                                            }
                                        ],
                                        'requires_leading_cut': false,
                                        'transform': {
                                            '^o': 'AedGlobal::Structure::Transform',
                                            'location': {
                                                '^o': 'AedGlobal::Structure::Location',
                                                'x': 0,
                                                'y': 0,
                                                'z': 0
                                            },
                                            'rotation': {
                                                '^o': 'AedGlobal::Structure::Rotation',
                                                'x': 0,
                                                'y': 0,
                                                'z': 0
                                            }
                                        },
                                        'part_id': 1,
                                        'type': ':part',
                                        'width': 35,
                                        'depth': 70,
                                        'length': 415,
                                        'dimensions_assigned': true,
                                        'grade': 'f5',
                                        'treatment': 'none',
                                        'all_assigned': true,
                                        'properties_assigned': true
                                    }
                                ],
                                'loads': [],
                                'fixing_points': [
                                    {
                                        '^o': 'AedGlobal::Structure::FixingPoint',
                                        'part_id': 1,
                                        'transform': {
                                            '^o': 'AedGlobal::Structure::Transform',
                                            'location': {
                                                '^o': 'AedGlobal::Structure::Location',
                                                'x': 0,
                                                'y': 20,
                                                'z': 17.5
                                            },
                                            'rotation': {
                                                '^o': 'AedGlobal::Structure::Rotation',
                                                'x': 0,
                                                'y': 0,
                                                'z': 0
                                            }
                                        },
                                        'fixing': {
                                            '^o': 'AedGlobal::Structure::FramingNail75',
                                            'name': 'Framing Nail 75 x 3.06mm',
                                            'capacity': 1,
                                            'quantity': 1
                                        }
                                    },
                                    {
                                        '^o': 'AedGlobal::Structure::FixingPoint',
                                        'part_id': 1,
                                        'transform': {
                                            '^o': 'AedGlobal::Structure::Transform',
                                            'location': {
                                                '^o': 'AedGlobal::Structure::Location',
                                                'x': 0,
                                                'y': 50,
                                                'z': 17.5
                                            },
                                            'rotation': {
                                                '^o': 'AedGlobal::Structure::Rotation',
                                                'x': 0,
                                                'y': 0,
                                                'z': 0
                                            }
                                        },
                                        'fixing': {
                                            '^o': 'AedGlobal::Structure::FramingNail75',
                                            'name': 'Framing Nail 75 x 3.06mm',
                                            'capacity': 1,
                                            'quantity': 1
                                        }
                                    },
                                    {
                                        '^o': 'AedGlobal::Structure::FixingPoint',
                                        'part_id': 1,
                                        'transform': {
                                            '^o': 'AedGlobal::Structure::Transform',
                                            'location': {
                                                '^o': 'AedGlobal::Structure::Location',
                                                'x': 415,
                                                'y': 20,
                                                'z': 17.5
                                            },
                                            'rotation': {
                                                '^o': 'AedGlobal::Structure::Rotation',
                                                'x': 0,
                                                'y': 180,
                                                'z': 0
                                            }
                                        },
                                        'fixing': {
                                            '^o': 'AedGlobal::Structure::FramingNail75',
                                            'name': 'Framing Nail 75 x 3.06mm',
                                            'capacity': 1,
                                            'quantity': 1
                                        }
                                    },
                                    {
                                        '^o': 'AedGlobal::Structure::FixingPoint',
                                        'part_id': 1,
                                        'transform': {
                                            '^o': 'AedGlobal::Structure::Transform',
                                            'location': {
                                                '^o': 'AedGlobal::Structure::Location',
                                                'x': 415,
                                                'y': 50,
                                                'z': 17.5
                                            },
                                            'rotation': {
                                                '^o': 'AedGlobal::Structure::Rotation',
                                                'x': 0,
                                                'y': 180,
                                                'z': 0
                                            }
                                        },
                                        'fixing': {
                                            '^o': 'AedGlobal::Structure::FramingNail75',
                                            'name': 'Framing Nail 75 x 3.06mm',
                                            'capacity': 1,
                                            'quantity': 1
                                        }
                                    }
                                ],
                                'component_builder': {
                                    '^o': 'AedGlobal::Structure::ComponentBuilder'
                                },
                                'design_outcomes': {
                                    '^o': 'AedGlobal::Structure::DesignOutcomes',
                                    'design_class': {
                                        '^c': 'AedGlobal::Structure::TimberDesign'
                                    },
                                    'design_outcomes': [
                                        {
                                            '^o': 'AedGlobal::Structure::TimberDesign',
                                            'grade': ':f5',
                                            'treatment': ':none',
                                            'ply': 1,
                                            'depth': 70,
                                            'width': 35,
                                            'length': 222.5,
                                            'wind_speed': ':n2'
                                        }
                                    ],
                                    'active_index': 0
                                },
                                'depth': 70,
                                'width': 35,
                                'length': 415,
                                'design_type': ':tables',
                                'component_info': {
                                    ':material': ':timber',
                                    ':type': ':nog'
                                }
                            },
                            {
                                '^o': 'AedGlobal::Structure::StandardNog',
                                'transform': {
                                    '^o': 'AedGlobal::Structure::Transform',
                                    'location': {
                                        '^o': 'AedGlobal::Structure::Location',
                                        'x': 1835,
                                        'y': 0,
                                        'z': 1237.5
                                    },
                                    'rotation': {
                                        '^o': 'AedGlobal::Structure::Rotation',
                                        'x': 0,
                                        'y': 0,
                                        'z': 0
                                    }
                                },
                                'parts': [
                                    {
                                        '^o': 'AedGlobal::Structure::TimberPart',
                                        'saw_cut_groups': [
                                            {
                                                '^o': 'AedGlobal::Structure::SawCutGroup',
                                                'position': ':at_lead',
                                                'saw_cuts': [
                                                    {
                                                        '^o': 'AedGlobal::Structure::SawCut',
                                                        'transform': {
                                                            '^o': 'AedGlobal::Structure::Transform',
                                                            'location': {
                                                                '^o': 'AedGlobal::Structure::Location',
                                                                'x': 0,
                                                                'y': 0,
                                                                'z': 0
                                                            },
                                                            'rotation': {
                                                                '^o': 'AedGlobal::Structure::Rotation',
                                                                'x': 0,
                                                                'y': 0,
                                                                'z': 0
                                                            }
                                                        },
                                                        'kerf_width': 6,
                                                        'outside_edge': true,
                                                        'length': 0
                                                    }
                                                ],
                                                'cut_type': ':single'
                                            },
                                            {
                                                '^o': 'AedGlobal::Structure::SawCutGroup',
                                                'position': ':at_end',
                                                'saw_cuts': [
                                                    {
                                                        '^o': 'AedGlobal::Structure::SawCut',
                                                        'transform': {
                                                            '^o': 'AedGlobal::Structure::Transform',
                                                            'location': {
                                                                '^o': 'AedGlobal::Structure::Location',
                                                                'x': 415,
                                                                'y': 0,
                                                                'z': 0
                                                            },
                                                            'rotation': {
                                                                '^o': 'AedGlobal::Structure::Rotation',
                                                                'x': 0,
                                                                'y': 0,
                                                                'z': 0
                                                            }
                                                        },
                                                        'kerf_width': 6,
                                                        'outside_edge': false,
                                                        'length': 70
                                                    }
                                                ],
                                                'cut_type': ':single'
                                            }
                                        ],
                                        'requires_leading_cut': false,
                                        'transform': {
                                            '^o': 'AedGlobal::Structure::Transform',
                                            'location': {
                                                '^o': 'AedGlobal::Structure::Location',
                                                'x': 0,
                                                'y': 0,
                                                'z': 0
                                            },
                                            'rotation': {
                                                '^o': 'AedGlobal::Structure::Rotation',
                                                'x': 0,
                                                'y': 0,
                                                'z': 0
                                            }
                                        },
                                        'part_id': 1,
                                        'type': ':part',
                                        'width': 35,
                                        'depth': 70,
                                        'length': 415,
                                        'dimensions_assigned': true,
                                        'grade': 'f5',
                                        'treatment': 'none',
                                        'all_assigned': true,
                                        'properties_assigned': true
                                    }
                                ],
                                'loads': [],
                                'fixing_points': [
                                    {
                                        '^o': 'AedGlobal::Structure::FixingPoint',
                                        'part_id': 1,
                                        'transform': {
                                            '^o': 'AedGlobal::Structure::Transform',
                                            'location': {
                                                '^o': 'AedGlobal::Structure::Location',
                                                'x': 0,
                                                'y': 20,
                                                'z': 17.5
                                            },
                                            'rotation': {
                                                '^o': 'AedGlobal::Structure::Rotation',
                                                'x': 0,
                                                'y': 0,
                                                'z': 0
                                            }
                                        },
                                        'fixing': {
                                            '^o': 'AedGlobal::Structure::FramingNail75',
                                            'name': 'Framing Nail 75 x 3.06mm',
                                            'capacity': 1,
                                            'quantity': 1
                                        }
                                    },
                                    {
                                        '^o': 'AedGlobal::Structure::FixingPoint',
                                        'part_id': 1,
                                        'transform': {
                                            '^o': 'AedGlobal::Structure::Transform',
                                            'location': {
                                                '^o': 'AedGlobal::Structure::Location',
                                                'x': 0,
                                                'y': 50,
                                                'z': 17.5
                                            },
                                            'rotation': {
                                                '^o': 'AedGlobal::Structure::Rotation',
                                                'x': 0,
                                                'y': 0,
                                                'z': 0
                                            }
                                        },
                                        'fixing': {
                                            '^o': 'AedGlobal::Structure::FramingNail75',
                                            'name': 'Framing Nail 75 x 3.06mm',
                                            'capacity': 1,
                                            'quantity': 1
                                        }
                                    },
                                    {
                                        '^o': 'AedGlobal::Structure::FixingPoint',
                                        'part_id': 1,
                                        'transform': {
                                            '^o': 'AedGlobal::Structure::Transform',
                                            'location': {
                                                '^o': 'AedGlobal::Structure::Location',
                                                'x': 415,
                                                'y': 20,
                                                'z': 17.5
                                            },
                                            'rotation': {
                                                '^o': 'AedGlobal::Structure::Rotation',
                                                'x': 0,
                                                'y': 180,
                                                'z': 0
                                            }
                                        },
                                        'fixing': {
                                            '^o': 'AedGlobal::Structure::FramingNail75',
                                            'name': 'Framing Nail 75 x 3.06mm',
                                            'capacity': 1,
                                            'quantity': 1
                                        }
                                    },
                                    {
                                        '^o': 'AedGlobal::Structure::FixingPoint',
                                        'part_id': 1,
                                        'transform': {
                                            '^o': 'AedGlobal::Structure::Transform',
                                            'location': {
                                                '^o': 'AedGlobal::Structure::Location',
                                                'x': 415,
                                                'y': 50,
                                                'z': 17.5
                                            },
                                            'rotation': {
                                                '^o': 'AedGlobal::Structure::Rotation',
                                                'x': 0,
                                                'y': 180,
                                                'z': 0
                                            }
                                        },
                                        'fixing': {
                                            '^o': 'AedGlobal::Structure::FramingNail75',
                                            'name': 'Framing Nail 75 x 3.06mm',
                                            'capacity': 1,
                                            'quantity': 1
                                        }
                                    }
                                ],
                                'component_builder': {
                                    '^o': 'AedGlobal::Structure::ComponentBuilder'
                                },
                                'design_outcomes': {
                                    '^o': 'AedGlobal::Structure::DesignOutcomes',
                                    'design_class': {
                                        '^c': 'AedGlobal::Structure::TimberDesign'
                                    },
                                    'design_outcomes': [
                                        {
                                            '^o': 'AedGlobal::Structure::TimberDesign',
                                            'grade': ':f5',
                                            'treatment': ':none',
                                            'ply': 1,
                                            'depth': 70,
                                            'width': 35,
                                            'length': 222.5,
                                            'wind_speed': ':n2'
                                        }
                                    ],
                                    'active_index': 0
                                },
                                'depth': 70,
                                'width': 35,
                                'length': 415,
                                'design_type': ':tables',
                                'component_info': {
                                    ':material': ':timber',
                                    ':type': ':nog'
                                }
                            },
                            {
                                '^o': 'AedGlobal::Structure::StandardNog',
                                'transform': {
                                    '^o': 'AedGlobal::Structure::Transform',
                                    'location': {
                                        '^o': 'AedGlobal::Structure::Location',
                                        'x': 2285,
                                        'y': 0,
                                        'z': 1202.5
                                    },
                                    'rotation': {
                                        '^o': 'AedGlobal::Structure::Rotation',
                                        'x': 0,
                                        'y': 0,
                                        'z': 0
                                    }
                                },
                                'parts': [
                                    {
                                        '^o': 'AedGlobal::Structure::TimberPart',
                                        'saw_cut_groups': [
                                            {
                                                '^o': 'AedGlobal::Structure::SawCutGroup',
                                                'position': ':at_lead',
                                                'saw_cuts': [
                                                    {
                                                        '^o': 'AedGlobal::Structure::SawCut',
                                                        'transform': {
                                                            '^o': 'AedGlobal::Structure::Transform',
                                                            'location': {
                                                                '^o': 'AedGlobal::Structure::Location',
                                                                'x': 0,
                                                                'y': 0,
                                                                'z': 0
                                                            },
                                                            'rotation': {
                                                                '^o': 'AedGlobal::Structure::Rotation',
                                                                'x': 0,
                                                                'y': 0,
                                                                'z': 0
                                                            }
                                                        },
                                                        'kerf_width': 6,
                                                        'outside_edge': true,
                                                        'length': 0
                                                    }
                                                ],
                                                'cut_type': ':single'
                                            },
                                            {
                                                '^o': 'AedGlobal::Structure::SawCutGroup',
                                                'position': ':at_end',
                                                'saw_cuts': [
                                                    {
                                                        '^o': 'AedGlobal::Structure::SawCut',
                                                        'transform': {
                                                            '^o': 'AedGlobal::Structure::Transform',
                                                            'location': {
                                                                '^o': 'AedGlobal::Structure::Location',
                                                                'x': 415,
                                                                'y': 0,
                                                                'z': 0
                                                            },
                                                            'rotation': {
                                                                '^o': 'AedGlobal::Structure::Rotation',
                                                                'x': 0,
                                                                'y': 0,
                                                                'z': 0
                                                            }
                                                        },
                                                        'kerf_width': 6,
                                                        'outside_edge': false,
                                                        'length': 70
                                                    }
                                                ],
                                                'cut_type': ':single'
                                            }
                                        ],
                                        'requires_leading_cut': false,
                                        'transform': {
                                            '^o': 'AedGlobal::Structure::Transform',
                                            'location': {
                                                '^o': 'AedGlobal::Structure::Location',
                                                'x': 0,
                                                'y': 0,
                                                'z': 0
                                            },
                                            'rotation': {
                                                '^o': 'AedGlobal::Structure::Rotation',
                                                'x': 0,
                                                'y': 0,
                                                'z': 0
                                            }
                                        },
                                        'part_id': 1,
                                        'type': ':part',
                                        'width': 35,
                                        'depth': 70,
                                        'length': 415,
                                        'dimensions_assigned': true,
                                        'grade': 'f5',
                                        'treatment': 'none',
                                        'all_assigned': true,
                                        'properties_assigned': true
                                    }
                                ],
                                'loads': [],
                                'fixing_points': [
                                    {
                                        '^o': 'AedGlobal::Structure::FixingPoint',
                                        'part_id': 1,
                                        'transform': {
                                            '^o': 'AedGlobal::Structure::Transform',
                                            'location': {
                                                '^o': 'AedGlobal::Structure::Location',
                                                'x': 0,
                                                'y': 20,
                                                'z': 17.5
                                            },
                                            'rotation': {
                                                '^o': 'AedGlobal::Structure::Rotation',
                                                'x': 0,
                                                'y': 0,
                                                'z': 0
                                            }
                                        },
                                        'fixing': {
                                            '^o': 'AedGlobal::Structure::FramingNail75',
                                            'name': 'Framing Nail 75 x 3.06mm',
                                            'capacity': 1,
                                            'quantity': 1
                                        }
                                    },
                                    {
                                        '^o': 'AedGlobal::Structure::FixingPoint',
                                        'part_id': 1,
                                        'transform': {
                                            '^o': 'AedGlobal::Structure::Transform',
                                            'location': {
                                                '^o': 'AedGlobal::Structure::Location',
                                                'x': 0,
                                                'y': 50,
                                                'z': 17.5
                                            },
                                            'rotation': {
                                                '^o': 'AedGlobal::Structure::Rotation',
                                                'x': 0,
                                                'y': 0,
                                                'z': 0
                                            }
                                        },
                                        'fixing': {
                                            '^o': 'AedGlobal::Structure::FramingNail75',
                                            'name': 'Framing Nail 75 x 3.06mm',
                                            'capacity': 1,
                                            'quantity': 1
                                        }
                                    },
                                    {
                                        '^o': 'AedGlobal::Structure::FixingPoint',
                                        'part_id': 1,
                                        'transform': {
                                            '^o': 'AedGlobal::Structure::Transform',
                                            'location': {
                                                '^o': 'AedGlobal::Structure::Location',
                                                'x': 415,
                                                'y': 20,
                                                'z': 17.5
                                            },
                                            'rotation': {
                                                '^o': 'AedGlobal::Structure::Rotation',
                                                'x': 0,
                                                'y': 180,
                                                'z': 0
                                            }
                                        },
                                        'fixing': {
                                            '^o': 'AedGlobal::Structure::FramingNail75',
                                            'name': 'Framing Nail 75 x 3.06mm',
                                            'capacity': 1,
                                            'quantity': 1
                                        }
                                    },
                                    {
                                        '^o': 'AedGlobal::Structure::FixingPoint',
                                        'part_id': 1,
                                        'transform': {
                                            '^o': 'AedGlobal::Structure::Transform',
                                            'location': {
                                                '^o': 'AedGlobal::Structure::Location',
                                                'x': 415,
                                                'y': 50,
                                                'z': 17.5
                                            },
                                            'rotation': {
                                                '^o': 'AedGlobal::Structure::Rotation',
                                                'x': 0,
                                                'y': 180,
                                                'z': 0
                                            }
                                        },
                                        'fixing': {
                                            '^o': 'AedGlobal::Structure::FramingNail75',
                                            'name': 'Framing Nail 75 x 3.06mm',
                                            'capacity': 1,
                                            'quantity': 1
                                        }
                                    }
                                ],
                                'component_builder': {
                                    '^o': 'AedGlobal::Structure::ComponentBuilder'
                                },
                                'design_outcomes': {
                                    '^o': 'AedGlobal::Structure::DesignOutcomes',
                                    'design_class': {
                                        '^c': 'AedGlobal::Structure::TimberDesign'
                                    },
                                    'design_outcomes': [
                                        {
                                            '^o': 'AedGlobal::Structure::TimberDesign',
                                            'grade': ':f5',
                                            'treatment': ':none',
                                            'ply': 1,
                                            'depth': 70,
                                            'width': 35,
                                            'length': 222.5,
                                            'wind_speed': ':n2'
                                        }
                                    ],
                                    'active_index': 0
                                },
                                'depth': 70,
                                'width': 35,
                                'length': 415,
                                'design_type': ':tables',
                                'component_info': {
                                    ':material': ':timber',
                                    ':type': ':nog'
                                }
                            },
                            {
                                '^o': 'AedGlobal::Structure::StandardNog',
                                'transform': {
                                    '^o': 'AedGlobal::Structure::Transform',
                                    'location': {
                                        '^o': 'AedGlobal::Structure::Location',
                                        'x': 2735,
                                        'y': 0,
                                        'z': 1237.5
                                    },
                                    'rotation': {
                                        '^o': 'AedGlobal::Structure::Rotation',
                                        'x': 0,
                                        'y': 0,
                                        'z': 0
                                    }
                                },
                                'parts': [
                                    {
                                        '^o': 'AedGlobal::Structure::TimberPart',
                                        'saw_cut_groups': [
                                            {
                                                '^o': 'AedGlobal::Structure::SawCutGroup',
                                                'position': ':at_lead',
                                                'saw_cuts': [
                                                    {
                                                        '^o': 'AedGlobal::Structure::SawCut',
                                                        'transform': {
                                                            '^o': 'AedGlobal::Structure::Transform',
                                                            'location': {
                                                                '^o': 'AedGlobal::Structure::Location',
                                                                'x': 0,
                                                                'y': 0,
                                                                'z': 0
                                                            },
                                                            'rotation': {
                                                                '^o': 'AedGlobal::Structure::Rotation',
                                                                'x': 0,
                                                                'y': 0,
                                                                'z': 0
                                                            }
                                                        },
                                                        'kerf_width': 6,
                                                        'outside_edge': true,
                                                        'length': 0
                                                    }
                                                ],
                                                'cut_type': ':single'
                                            },
                                            {
                                                '^o': 'AedGlobal::Structure::SawCutGroup',
                                                'position': ':at_end',
                                                'saw_cuts': [
                                                    {
                                                        '^o': 'AedGlobal::Structure::SawCut',
                                                        'transform': {
                                                            '^o': 'AedGlobal::Structure::Transform',
                                                            'location': {
                                                                '^o': 'AedGlobal::Structure::Location',
                                                                'x': 415,
                                                                'y': 0,
                                                                'z': 0
                                                            },
                                                            'rotation': {
                                                                '^o': 'AedGlobal::Structure::Rotation',
                                                                'x': 0,
                                                                'y': 0,
                                                                'z': 0
                                                            }
                                                        },
                                                        'kerf_width': 6,
                                                        'outside_edge': false,
                                                        'length': 70
                                                    }
                                                ],
                                                'cut_type': ':single'
                                            }
                                        ],
                                        'requires_leading_cut': false,
                                        'transform': {
                                            '^o': 'AedGlobal::Structure::Transform',
                                            'location': {
                                                '^o': 'AedGlobal::Structure::Location',
                                                'x': 0,
                                                'y': 0,
                                                'z': 0
                                            },
                                            'rotation': {
                                                '^o': 'AedGlobal::Structure::Rotation',
                                                'x': 0,
                                                'y': 0,
                                                'z': 0
                                            }
                                        },
                                        'part_id': 1,
                                        'type': ':part',
                                        'width': 35,
                                        'depth': 70,
                                        'length': 415,
                                        'dimensions_assigned': true,
                                        'grade': 'f5',
                                        'treatment': 'none',
                                        'all_assigned': true,
                                        'properties_assigned': true
                                    }
                                ],
                                'loads': [],
                                'fixing_points': [
                                    {
                                        '^o': 'AedGlobal::Structure::FixingPoint',
                                        'part_id': 1,
                                        'transform': {
                                            '^o': 'AedGlobal::Structure::Transform',
                                            'location': {
                                                '^o': 'AedGlobal::Structure::Location',
                                                'x': 0,
                                                'y': 20,
                                                'z': 17.5
                                            },
                                            'rotation': {
                                                '^o': 'AedGlobal::Structure::Rotation',
                                                'x': 0,
                                                'y': 0,
                                                'z': 0
                                            }
                                        },
                                        'fixing': {
                                            '^o': 'AedGlobal::Structure::FramingNail75',
                                            'name': 'Framing Nail 75 x 3.06mm',
                                            'capacity': 1,
                                            'quantity': 1
                                        }
                                    },
                                    {
                                        '^o': 'AedGlobal::Structure::FixingPoint',
                                        'part_id': 1,
                                        'transform': {
                                            '^o': 'AedGlobal::Structure::Transform',
                                            'location': {
                                                '^o': 'AedGlobal::Structure::Location',
                                                'x': 0,
                                                'y': 50,
                                                'z': 17.5
                                            },
                                            'rotation': {
                                                '^o': 'AedGlobal::Structure::Rotation',
                                                'x': 0,
                                                'y': 0,
                                                'z': 0
                                            }
                                        },
                                        'fixing': {
                                            '^o': 'AedGlobal::Structure::FramingNail75',
                                            'name': 'Framing Nail 75 x 3.06mm',
                                            'capacity': 1,
                                            'quantity': 1
                                        }
                                    },
                                    {
                                        '^o': 'AedGlobal::Structure::FixingPoint',
                                        'part_id': 1,
                                        'transform': {
                                            '^o': 'AedGlobal::Structure::Transform',
                                            'location': {
                                                '^o': 'AedGlobal::Structure::Location',
                                                'x': 415,
                                                'y': 20,
                                                'z': 17.5
                                            },
                                            'rotation': {
                                                '^o': 'AedGlobal::Structure::Rotation',
                                                'x': 0,
                                                'y': 180,
                                                'z': 0
                                            }
                                        },
                                        'fixing': {
                                            '^o': 'AedGlobal::Structure::FramingNail75',
                                            'name': 'Framing Nail 75 x 3.06mm',
                                            'capacity': 1,
                                            'quantity': 1
                                        }
                                    },
                                    {
                                        '^o': 'AedGlobal::Structure::FixingPoint',
                                        'part_id': 1,
                                        'transform': {
                                            '^o': 'AedGlobal::Structure::Transform',
                                            'location': {
                                                '^o': 'AedGlobal::Structure::Location',
                                                'x': 415,
                                                'y': 50,
                                                'z': 17.5
                                            },
                                            'rotation': {
                                                '^o': 'AedGlobal::Structure::Rotation',
                                                'x': 0,
                                                'y': 180,
                                                'z': 0
                                            }
                                        },
                                        'fixing': {
                                            '^o': 'AedGlobal::Structure::FramingNail75',
                                            'name': 'Framing Nail 75 x 3.06mm',
                                            'capacity': 1,
                                            'quantity': 1
                                        }
                                    }
                                ],
                                'component_builder': {
                                    '^o': 'AedGlobal::Structure::ComponentBuilder'
                                },
                                'design_outcomes': {
                                    '^o': 'AedGlobal::Structure::DesignOutcomes',
                                    'design_class': {
                                        '^c': 'AedGlobal::Structure::TimberDesign'
                                    },
                                    'design_outcomes': [
                                        {
                                            '^o': 'AedGlobal::Structure::TimberDesign',
                                            'grade': ':f5',
                                            'treatment': ':none',
                                            'ply': 1,
                                            'depth': 70,
                                            'width': 35,
                                            'length': 222.5,
                                            'wind_speed': ':n2'
                                        }
                                    ],
                                    'active_index': 0
                                },
                                'depth': 70,
                                'width': 35,
                                'length': 415,
                                'design_type': ':tables',
                                'component_info': {
                                    ':material': ':timber',
                                    ':type': ':nog'
                                }
                            },
                            {
                                '^o': 'AedGlobal::Structure::StandardNog',
                                'transform': {
                                    '^o': 'AedGlobal::Structure::Transform',
                                    'location': {
                                        '^o': 'AedGlobal::Structure::Location',
                                        'x': 3185,
                                        'y': 0,
                                        'z': 1202.5
                                    },
                                    'rotation': {
                                        '^o': 'AedGlobal::Structure::Rotation',
                                        'x': 0,
                                        'y': 0,
                                        'z': 0
                                    }
                                },
                                'parts': [
                                    {
                                        '^o': 'AedGlobal::Structure::TimberPart',
                                        'saw_cut_groups': [
                                            {
                                                '^o': 'AedGlobal::Structure::SawCutGroup',
                                                'position': ':at_lead',
                                                'saw_cuts': [
                                                    {
                                                        '^o': 'AedGlobal::Structure::SawCut',
                                                        'transform': {
                                                            '^o': 'AedGlobal::Structure::Transform',
                                                            'location': {
                                                                '^o': 'AedGlobal::Structure::Location',
                                                                'x': 0,
                                                                'y': 0,
                                                                'z': 0
                                                            },
                                                            'rotation': {
                                                                '^o': 'AedGlobal::Structure::Rotation',
                                                                'x': 0,
                                                                'y': 0,
                                                                'z': 0
                                                            }
                                                        },
                                                        'kerf_width': 6,
                                                        'outside_edge': true,
                                                        'length': 0
                                                    }
                                                ],
                                                'cut_type': ':single'
                                            },
                                            {
                                                '^o': 'AedGlobal::Structure::SawCutGroup',
                                                'position': ':at_end',
                                                'saw_cuts': [
                                                    {
                                                        '^o': 'AedGlobal::Structure::SawCut',
                                                        'transform': {
                                                            '^o': 'AedGlobal::Structure::Transform',
                                                            'location': {
                                                                '^o': 'AedGlobal::Structure::Location',
                                                                'x': 222.5,
                                                                'y': 0,
                                                                'z': 0
                                                            },
                                                            'rotation': {
                                                                '^o': 'AedGlobal::Structure::Rotation',
                                                                'x': 0,
                                                                'y': 0,
                                                                'z': 0
                                                            }
                                                        },
                                                        'kerf_width': 6,
                                                        'outside_edge': false,
                                                        'length': 70
                                                    }
                                                ],
                                                'cut_type': ':single'
                                            }
                                        ],
                                        'requires_leading_cut': false,
                                        'transform': {
                                            '^o': 'AedGlobal::Structure::Transform',
                                            'location': {
                                                '^o': 'AedGlobal::Structure::Location',
                                                'x': 0,
                                                'y': 0,
                                                'z': 0
                                            },
                                            'rotation': {
                                                '^o': 'AedGlobal::Structure::Rotation',
                                                'x': 0,
                                                'y': 0,
                                                'z': 0
                                            }
                                        },
                                        'part_id': 1,
                                        'type': ':part',
                                        'width': 35,
                                        'depth': 70,
                                        'length': 222.5,
                                        'dimensions_assigned': true,
                                        'grade': 'f5',
                                        'treatment': 'none',
                                        'all_assigned': true,
                                        'properties_assigned': true
                                    }
                                ],
                                'loads': [],
                                'fixing_points': [
                                    {
                                        '^o': 'AedGlobal::Structure::FixingPoint',
                                        'part_id': 1,
                                        'transform': {
                                            '^o': 'AedGlobal::Structure::Transform',
                                            'location': {
                                                '^o': 'AedGlobal::Structure::Location',
                                                'x': 0,
                                                'y': 20,
                                                'z': 17.5
                                            },
                                            'rotation': {
                                                '^o': 'AedGlobal::Structure::Rotation',
                                                'x': 0,
                                                'y': 0,
                                                'z': 0
                                            }
                                        },
                                        'fixing': {
                                            '^o': 'AedGlobal::Structure::FramingNail75',
                                            'name': 'Framing Nail 75 x 3.06mm',
                                            'capacity': 1,
                                            'quantity': 1
                                        }
                                    },
                                    {
                                        '^o': 'AedGlobal::Structure::FixingPoint',
                                        'part_id': 1,
                                        'transform': {
                                            '^o': 'AedGlobal::Structure::Transform',
                                            'location': {
                                                '^o': 'AedGlobal::Structure::Location',
                                                'x': 0,
                                                'y': 50,
                                                'z': 17.5
                                            },
                                            'rotation': {
                                                '^o': 'AedGlobal::Structure::Rotation',
                                                'x': 0,
                                                'y': 0,
                                                'z': 0
                                            }
                                        },
                                        'fixing': {
                                            '^o': 'AedGlobal::Structure::FramingNail75',
                                            'name': 'Framing Nail 75 x 3.06mm',
                                            'capacity': 1,
                                            'quantity': 1
                                        }
                                    },
                                    {
                                        '^o': 'AedGlobal::Structure::FixingPoint',
                                        'part_id': 1,
                                        'transform': {
                                            '^o': 'AedGlobal::Structure::Transform',
                                            'location': {
                                                '^o': 'AedGlobal::Structure::Location',
                                                'x': 222.5,
                                                'y': 20,
                                                'z': 17.5
                                            },
                                            'rotation': {
                                                '^o': 'AedGlobal::Structure::Rotation',
                                                'x': 0,
                                                'y': 180,
                                                'z': 0
                                            }
                                        },
                                        'fixing': {
                                            '^o': 'AedGlobal::Structure::FramingNail75',
                                            'name': 'Framing Nail 75 x 3.06mm',
                                            'capacity': 1,
                                            'quantity': 1
                                        }
                                    },
                                    {
                                        '^o': 'AedGlobal::Structure::FixingPoint',
                                        'part_id': 1,
                                        'transform': {
                                            '^o': 'AedGlobal::Structure::Transform',
                                            'location': {
                                                '^o': 'AedGlobal::Structure::Location',
                                                'x': 222.5,
                                                'y': 50,
                                                'z': 17.5
                                            },
                                            'rotation': {
                                                '^o': 'AedGlobal::Structure::Rotation',
                                                'x': 0,
                                                'y': 180,
                                                'z': 0
                                            }
                                        },
                                        'fixing': {
                                            '^o': 'AedGlobal::Structure::FramingNail75',
                                            'name': 'Framing Nail 75 x 3.06mm',
                                            'capacity': 1,
                                            'quantity': 1
                                        }
                                    }
                                ],
                                'component_builder': {
                                    '^o': 'AedGlobal::Structure::ComponentBuilder'
                                },
                                'design_outcomes': {
                                    '^o': 'AedGlobal::Structure::DesignOutcomes',
                                    'design_class': {
                                        '^c': 'AedGlobal::Structure::TimberDesign'
                                    },
                                    'design_outcomes': [
                                        {
                                            '^o': 'AedGlobal::Structure::TimberDesign',
                                            'grade': ':f5',
                                            'treatment': ':none',
                                            'ply': 1,
                                            'depth': 70,
                                            'width': 35,
                                            'length': 222.5,
                                            'wind_speed': ':n2'
                                        }
                                    ],
                                    'active_index': 0
                                },
                                'depth': 70,
                                'width': 35,
                                'length': 222.5,
                                'design_type': ':tables',
                                'component_info': {
                                    ':material': ':timber',
                                    ':type': ':nog'
                                }
                            },
                            {
                                '^o': 'AedGlobal::Structure::StandardNog',
                                'transform': {
                                    '^o': 'AedGlobal::Structure::Transform',
                                    'location': {
                                        '^o': 'AedGlobal::Structure::Location',
                                        'x': 3442.5,
                                        'y': 0,
                                        'z': 1237.5
                                    },
                                    'rotation': {
                                        '^o': 'AedGlobal::Structure::Rotation',
                                        'x': 0,
                                        'y': 0,
                                        'z': 0
                                    }
                                },
                                'parts': [
                                    {
                                        '^o': 'AedGlobal::Structure::TimberPart',
                                        'saw_cut_groups': [
                                            {
                                                '^o': 'AedGlobal::Structure::SawCutGroup',
                                                'position': ':at_lead',
                                                'saw_cuts': [
                                                    {
                                                        '^o': 'AedGlobal::Structure::SawCut',
                                                        'transform': {
                                                            '^o': 'AedGlobal::Structure::Transform',
                                                            'location': {
                                                                '^o': 'AedGlobal::Structure::Location',
                                                                'x': 0,
                                                                'y': 0,
                                                                'z': 0
                                                            },
                                                            'rotation': {
                                                                '^o': 'AedGlobal::Structure::Rotation',
                                                                'x': 0,
                                                                'y': 0,
                                                                'z': 0
                                                            }
                                                        },
                                                        'kerf_width': 6,
                                                        'outside_edge': true,
                                                        'length': 0
                                                    }
                                                ],
                                                'cut_type': ':single'
                                            },
                                            {
                                                '^o': 'AedGlobal::Structure::SawCutGroup',
                                                'position': ':at_end',
                                                'saw_cuts': [
                                                    {
                                                        '^o': 'AedGlobal::Structure::SawCut',
                                                        'transform': {
                                                            '^o': 'AedGlobal::Structure::Transform',
                                                            'location': {
                                                                '^o': 'AedGlobal::Structure::Location',
                                                                'x': 222.5,
                                                                'y': 0,
                                                                'z': 0
                                                            },
                                                            'rotation': {
                                                                '^o': 'AedGlobal::Structure::Rotation',
                                                                'x': 0,
                                                                'y': 0,
                                                                'z': 0
                                                            }
                                                        },
                                                        'kerf_width': 6,
                                                        'outside_edge': false,
                                                        'length': 70
                                                    }
                                                ],
                                                'cut_type': ':single'
                                            }
                                        ],
                                        'requires_leading_cut': false,
                                        'transform': {
                                            '^o': 'AedGlobal::Structure::Transform',
                                            'location': {
                                                '^o': 'AedGlobal::Structure::Location',
                                                'x': 0,
                                                'y': 0,
                                                'z': 0
                                            },
                                            'rotation': {
                                                '^o': 'AedGlobal::Structure::Rotation',
                                                'x': 0,
                                                'y': 0,
                                                'z': 0
                                            }
                                        },
                                        'part_id': 1,
                                        'type': ':part',
                                        'width': 35,
                                        'depth': 70,
                                        'length': 222.5,
                                        'dimensions_assigned': true,
                                        'grade': 'f5',
                                        'treatment': 'none',
                                        'all_assigned': true,
                                        'properties_assigned': true
                                    }
                                ],
                                'loads': [],
                                'fixing_points': [
                                    {
                                        '^o': 'AedGlobal::Structure::FixingPoint',
                                        'part_id': 1,
                                        'transform': {
                                            '^o': 'AedGlobal::Structure::Transform',
                                            'location': {
                                                '^o': 'AedGlobal::Structure::Location',
                                                'x': 0,
                                                'y': 20,
                                                'z': 17.5
                                            },
                                            'rotation': {
                                                '^o': 'AedGlobal::Structure::Rotation',
                                                'x': 0,
                                                'y': 0,
                                                'z': 0
                                            }
                                        },
                                        'fixing': {
                                            '^o': 'AedGlobal::Structure::FramingNail75',
                                            'name': 'Framing Nail 75 x 3.06mm',
                                            'capacity': 1,
                                            'quantity': 1
                                        }
                                    },
                                    {
                                        '^o': 'AedGlobal::Structure::FixingPoint',
                                        'part_id': 1,
                                        'transform': {
                                            '^o': 'AedGlobal::Structure::Transform',
                                            'location': {
                                                '^o': 'AedGlobal::Structure::Location',
                                                'x': 0,
                                                'y': 50,
                                                'z': 17.5
                                            },
                                            'rotation': {
                                                '^o': 'AedGlobal::Structure::Rotation',
                                                'x': 0,
                                                'y': 0,
                                                'z': 0
                                            }
                                        },
                                        'fixing': {
                                            '^o': 'AedGlobal::Structure::FramingNail75',
                                            'name': 'Framing Nail 75 x 3.06mm',
                                            'capacity': 1,
                                            'quantity': 1
                                        }
                                    },
                                    {
                                        '^o': 'AedGlobal::Structure::FixingPoint',
                                        'part_id': 1,
                                        'transform': {
                                            '^o': 'AedGlobal::Structure::Transform',
                                            'location': {
                                                '^o': 'AedGlobal::Structure::Location',
                                                'x': 222.5,
                                                'y': 20,
                                                'z': 17.5
                                            },
                                            'rotation': {
                                                '^o': 'AedGlobal::Structure::Rotation',
                                                'x': 0,
                                                'y': 180,
                                                'z': 0
                                            }
                                        },
                                        'fixing': {
                                            '^o': 'AedGlobal::Structure::FramingNail75',
                                            'name': 'Framing Nail 75 x 3.06mm',
                                            'capacity': 1,
                                            'quantity': 1
                                        }
                                    },
                                    {
                                        '^o': 'AedGlobal::Structure::FixingPoint',
                                        'part_id': 1,
                                        'transform': {
                                            '^o': 'AedGlobal::Structure::Transform',
                                            'location': {
                                                '^o': 'AedGlobal::Structure::Location',
                                                'x': 222.5,
                                                'y': 50,
                                                'z': 17.5
                                            },
                                            'rotation': {
                                                '^o': 'AedGlobal::Structure::Rotation',
                                                'x': 0,
                                                'y': 180,
                                                'z': 0
                                            }
                                        },
                                        'fixing': {
                                            '^o': 'AedGlobal::Structure::FramingNail75',
                                            'name': 'Framing Nail 75 x 3.06mm',
                                            'capacity': 1,
                                            'quantity': 1
                                        }
                                    }
                                ],
                                'component_builder': {
                                    '^o': 'AedGlobal::Structure::ComponentBuilder'
                                },
                                'design_outcomes': {
                                    '^o': 'AedGlobal::Structure::DesignOutcomes',
                                    'design_class': {
                                        '^c': 'AedGlobal::Structure::TimberDesign'
                                    },
                                    'design_outcomes': [
                                        {
                                            '^o': 'AedGlobal::Structure::TimberDesign',
                                            'grade': ':f5',
                                            'treatment': ':none',
                                            'ply': 1,
                                            'depth': 70,
                                            'width': 35,
                                            'length': 222.5,
                                            'wind_speed': ':n2'
                                        }
                                    ],
                                    'active_index': 0
                                },
                                'depth': 70,
                                'width': 35,
                                'length': 222.5,
                                'design_type': ':tables',
                                'component_info': {
                                    ':material': ':timber',
                                    ':type': ':nog'
                                }
                            }
                        ],
                        'junction_blocks': [],
                        'length': 3700,
                        'height': 2440,
                        'width': 70,
                        'mitre_left': 0,
                        'mitre_right': 0,
                        'external': true,
                        'load_bearing': false
                    }
                ],
                'incoming_loads': [
                    {
                        '^o': 'AedGlobal::Structure::WallStripLoad',
                        'start_location': 0,
                        'end_location': 3700,
                        'load': {
                            '^o': 'AedGlobal::Structure::Rlw',
                            'type': ':strip',
                            'value': 1500,
                            'truss_spacing': 600,
                            'roof_material': ':sheet'
                        },
                        'face_index': 0
                    }
                ],
                'outgoing_loads': [],
                'junctions': [],
                'openings': [],
                'is_head_panel': false,
                'design_type': ':tables',
                'material': ':timber',
                'treatment': ':none',
                'stud_spacing': 450,
                'tiedown_spacing': 0,
                'load_bearing': false,
                'nog_orientation': ':flat',
                'stud_notch_depth': 0,
                'external': true,
                'design_status': ':ok',
                'design_message': ''
            }
        ]
    ],
    'active_level': 1
};
