import { InjectionToken } from '@angular/core';

export enum CheatKey {
  left = 'ArrowLeft',
  up = 'ArrowUp',
  right = 'ArrowRight',
  down = 'ArrowDown',
  a = 'a',
  b = 'b',
  c = 'c',
  d = 'd',
  e = 'e',
  f = 'f',
  g = 'g',
  h = 'h',
  i = 'i',
  j = 'j',
  k = 'k',
  l = 'l',
  m = 'm',
  n = 'n',
  o = 'o',
  p = 'p',
  q = 'q',
  r = 'r',
  s = 's',
  t = 't',
  u = 'u',
  v = 'v',
  w = 'w',
  x = 'x',
  y = 'y',
  z = 'z'
}

export interface NgCheatcodeConfig {
  name: string;
  cheatCode: CheatKey[];
  isActive?: boolean;
}

export const NgCheatcodeConfigToken = new InjectionToken<NgCheatcodeConfig[]>('NgCheatcodeConfig');
