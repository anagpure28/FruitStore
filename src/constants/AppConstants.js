import { Dimensions} from 'react-native';
export const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get
  ('window');

  export const DESIGN_WIDTH = 375;

  export  function pixelNormalize(value) {
    return (SCREEN_WIDTH * value) / DESIGN_WIDTH;
  }
