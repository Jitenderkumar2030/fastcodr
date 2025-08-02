import { ITheme } from 'xterm';

export function getTerminalTheme(): any {
  return {
    background: '#23235b', // fastcodr blue/purple
    foreground: '#d4d4d4',
    cursor: '#d4d4d4',
    selection: '#264f78',
    black: '#000000',
    red: '#cd3131',
    green: '#0dbc79',
    yellow: '#e5e510',
    blue: '#7b8cff', // fastcodr accent blue
    magenta: '#a259f7', // fastcodr purple
    cyan: '#11a8cd',
    white: '#e5e5e5',
    brightBlack: '#666666',
    brightRed: '#f14c4c',
    brightGreen: '#23d18b',
    brightYellow: '#f5f543',
    brightBlue: '#a259f7', // fastcodr bright purple
    brightMagenta: '#d670d6',
    brightCyan: '#29b8db',
    brightWhite: '#ffffff',
  };
}