import { NgCheatcodeConfig, CheatKey } from './ng-cheatcodes-config-token';

export const konamiCheatcode: NgCheatcodeConfig = {
  name: 'konami',
  cheatCode: [
    CheatKey.up,
    CheatKey.up,
    CheatKey.down,
    CheatKey.down,
    CheatKey.left,
    CheatKey.right,
    CheatKey.left,
    CheatKey.right,
    CheatKey.b,
    CheatKey.a]
};

export const defaultCheatcodes = [
  konamiCheatcode
];
