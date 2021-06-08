/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { ThemeProps } from './theme';

type Resolver<T> = (props: ThemeProps) => T;

type OmitThemeProps<Args extends unknown[]> = Args[1] extends ThemeProps
  ? [Args[0]]
  : [Args[0]];

export const createSelector = <T extends (...args: any) => any>(getter: T) => {
  function select(
    ...args: OmitThemeProps<Parameters<T>>
  ): Resolver<ReturnType<T>>;

  function select(...args: Parameters<T>): ReturnType<T>;

  function select(...args: any): any {
    if (args.length === getter.length) {
      return getter(...args);
    }

    return (props: ThemeProps) => getter(...args, props);
  }

  return select;
};

export const createPartialGetter = <T extends (...args: any) => any>(
  getter: T,
  props: ThemeProps
) => {
  return function omit(...args: OmitThemeProps<Parameters<T>>): ReturnType<T> {
    return getter(...args, props);
  };
};
