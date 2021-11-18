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

/**
 * Boolean theme interface
 */
export interface ThemeProp {
  isLight: boolean;
}

/**
 * Void function type
 */
export type VoidFunction = () => void;

/**
 * Void function interface
 */
export interface VoidFunctionProp {
  handleTheme: VoidFunction;
}

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
 * Time type - state for TimerButton
 */

export interface TimeType {
  start: number;
  stop: number;
  current: number;
}
