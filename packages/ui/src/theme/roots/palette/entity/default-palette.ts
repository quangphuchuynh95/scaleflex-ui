import { Color } from '../../../../utils/types/palette';

import type { ColorsMap } from './colors-map';

// export const darkPalette = {
//   [Color.TextPrimary]: 'rgba(249,250,251,1)',
//   [Color.TextPrimaryInvert]: 'rgba(0,0,0,1)',
//   [Color.TextSecondary]: 'rgba(190,195,199,1)',
//   [Color.TextSecondaryInvert]: 'rgba(91,92,92,1)',
//   [Color.TextPlaceholder]: 'rgba(181,188,190,1)',

//   [Color.AccentPrimary]: 'rgba(104,121,235,1)',
//   [Color.AccentPrimaryHover]: 'rgba(96,111,209,1)',
//   [Color.AccentPrimaryActive]: 'rgba(73,88,188,1)',
//   [Color.AccentPrimaryDisabled]: '#E9EEF2',

//   [Color.BackgroundPrimary]: 'rgba(37,50,55,1)',
//   [Color.BackgroundPrimaryHover]: 'rgba(46,61,69,1)',
//   [Color.BackgroundPrimaryActive]: 'rgba(181,188,190,1)',
//   [Color.BackgroundPrimary_0_5_Opacity]: 'rgba(240,248,255,0.600)',
//   [Color.BackgroundSecondary]: 'rgba(30,39,43,1)',

//   [Color.IconsPrimary]: 'rgba(201,212,220,1)',
//   [Color.IconsPrimaryOpacity_0_6]: 'rgba(0,0,0,0.500)',
//   [Color.IconsSecondary]: 'rgba(170,170,170,1)',

//   [Color.ButtonPrimaryText]: 'rgba(255,255,255,1)',

//   [Color.LinkPrimary]: '#5D6D7E',
//   [Color.LinkHover]: '#768A9F',
//   [Color.LinkActive]: '#92A6BC',

//   [Color.BordersPrimary]: 'rgba(30,39,43,1)',
//   [Color.BordersSecondary]: 'rgba(37,50,55,1)',
//   [Color.BordersStrong]: 'rgba(52,68,76,1)',
//   [Color.BordersInvert]: 'rgba(164,170,171,1)',

//   [Color.Tag]: '#889AAC',

//   [Color.Error]: 'rgba(232,91,70,1)',
//   [Color.Success]: 'rgba(62,207,139,1)',
//   [Color.Warning]: 'rgba(255,172,74,1)',
//   [Color.Info]: 'rgba(110,123,178,1)',

//   [Color.LightShadow]: 'rgba(77, 78, 78, 0.25)',
// };
export const lightPalette = {
  [Color.TextPrimary]: 'rgba(55,65,75,1)', // #37414b
  [Color.TextPrimaryInvert]: 'rgba(255,255,255,1)', // #ffffff
  [Color.TextSecondary]: 'rgba(118,129,132,1)', // #768184
  [Color.TextSecondaryInvert]: 'rgba(213,216,220,1)', // #d5d8dc
  [Color.TextPlaceholder]: 'rgba(181,188,190,1)', // #b5bcbe

  [Color.AccentPrimary]: '#6879EB',
  [Color.AccentPrimaryHover]: '#606FD1',
  [Color.AccentPrimaryActive]: '#4958BC',
  [Color.AccentPrimaryDisabled]: 'rgba(104, 121, 235, 0.12)', // #6879eb
  [Color.AccentStateless]: '#6879EB',

  [Color.BackgroundPrimary]: 'rgba(248,250,251,1)', // #f8fafb
  [Color.BackgroundPrimaryHover]: 'rgba(239,243,246,1)', // #eff3f6
  [Color.BackgroundPrimaryActive]: 'rgba(93,109,126,1)', // #5d6d7e
  [Color.BackgroundPrimary_0_5_Opacity]: 'rgba(255,255,255,0.500)',
  [Color.BackgroundSecondary]: 'rgba(255,255,255,1)', // #ffffff
  [Color.BackgroundHover]: '#f9fbfc',
  [Color.BackgroundActive]: '#F3F7FA',

  [Color.IconsPrimary]: '#6879EB',
  [Color.IconsPrimaryOpacity_0_6]: 'rgba(93,109,126,0.600)',
  [Color.IconsSecondary]: '#959DA8',
  [Color.IconsPlaceholder]: '#DEE6ED',
  [Color.IconsPrimaryHover]: '#4F6276',

  [Color.ButtonPrimaryText]: '#FFFFFF',
  [Color.ButtonDisabledText]: 'rgba(73, 88, 188, 0.4)', // #4958bc66

  [Color.LinkPrimary]: '#768A9F',
  [Color.LinkHover]: '#606FD1',
  [Color.LinkActive]: '#37414b',

  [Color.BordersPrimary]: 'rgba(223,231,237,1)', // #dfe7ed
  [Color.BordersSecondary]: 'rgba(223,231,237,1)', // #dfe7ed
  [Color.BordersStrong]: 'rgba(223,231,237,1)', // #dfe7ed
  [Color.BordersInvert]: 'rgba(85,99,115,1)', // #556373
  [Color.BorderActiveBottom]: '#6879EB',

  [Color.ActiveSecondary]: '#FFFFFF',
  [Color.ActiveSecondaryHover]: 'rgba(104, 121, 235, 0.05)', // #6879eb0d
  [Color.ActiveSecondaryActive]: 'rgba(104, 121, 235, 0.12)', // #6879eb1f

  [Color.Tag]: '#889AAC',

  [Color.Error]: 'rgba(232,91,70,1)', // #e85b46
  [Color.Success]: 'rgba(62,207,139,1)', // #3ecf8b
  [Color.Warning]: 'rgba(255,172,74,1)', // #ffac4a
  [Color.Info]: 'rgba(110,123,178,1)', // #6e7bb2

  [Color.LightShadow]: 'rgba(77, 78, 78, 0.25)', // #4d4e4e40
};

export const defaultPalette: ColorsMap = lightPalette;
