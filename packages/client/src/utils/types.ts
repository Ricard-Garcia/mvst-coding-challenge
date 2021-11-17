/**
 * State type
 */

export interface State {
  isLight: boolean;
  totalTime: number | boolean;
}

/**
 * Reducer type
 */

export interface Reducer {
  type: string;
  payload: boolean | number;
}

// Components

/**
 * Header prop types
 *
 * handleTheme changes the current theme (light/dark)
 * isLight - boolean to filter theme
 */

export interface HeaderProps extends ThemeProp {
  handleTheme: () => void;
}

/**
 * Light prop type
 */

export interface ThemeProp {
  isLight: boolean;
}
