const keyEn = [
  {
    lowercase: '`', uppercase: '`', shift: '~', code: 'Backquote',
  },
  {
    lowercase: '1', uppercase: '1', shift: '!', code: 'Digit1',
  },
  {
    lowercase: '2', uppercase: '2', shift: '@', code: 'Digit2',
  },
  {
    lowercase: '3', uppercase: '3', shift: '#', code: 'Digit3',
  },
  {
    lowercase: '4', uppercase: '4', shift: '$', code: 'Digit4',
  },
  {
    lowercase: '5', uppercase: '5', shift: '%', code: 'Digit5',
  },
  {
    lowercase: '6', uppercase: '6', shift: '^', code: 'Digit6',
  },
  {
    lowercase: '7', uppercase: '7', shift: '&', code: 'Digit7',
  },
  {
    lowercase: '8', uppercase: '8', shift: '*', code: 'Digit8',
  },
  {
    lowercase: '9', uppercase: '9', shift: '(', code: 'Digit9',
  },
  {
    lowercase: '0', uppercase: '0', shift: ')', code: 'Digit0',
  },
  {
    lowercase: '-', uppercase: '-', shift: '_', code: 'Minus',
  },
  {
    lowercase: '=', uppercase: '=', shift: '+', code: 'Equal',
  },
  {
    lowercase: 'Backspace', uppercase: 'Backspace', shift: '', code: 'Backspace',
  },
  {
    lowercase: 'Tab', uppercase: false, shift: '', code: 'Tab',
  },
  {
    lowercase: 'q', uppercase: 'Q', shift: '', code: 'KeyQ',
  },
  {
    lowercase: 'w', uppercase: 'W', shift: '', code: 'KeyW',
  },
  {
    lowercase: 'e', uppercase: 'E', shift: '', code: 'KeyE',
  },
  {
    lowercase: 'r', uppercase: 'R', shift: '', code: 'KeyR',
  },
  {
    lowercase: 't', uppercase: 'T', shift: '', code: 'KeyT',
  },
  {
    lowercase: 'y', uppercase: 'Y', shift: '', code: 'KeyY',
  },
  {
    lowercase: 'u', uppercase: 'U', shift: '', code: 'KeyU',
  },
  {
    lowercase: 'i', uppercase: 'I', shift: '', code: 'KeyI',
  },
  {
    lowercase: 'o', uppercase: 'O', shift: '', code: 'KeyO',
  },
  {
    lowercase: 'p', uppercase: 'P', shift: '', code: 'KeyP',
  },
  {
    lowercase: '[', uppercase: '[', shift: '{', code: 'BracketLeft',
  },
  {
    lowercase: ']', uppercase: ']', shift: '}', code: 'BracketRight',
  },
  {
    lowercase: '\\', uppercase: '\\', shift: '|', code: 'Backslash',
  },
  {
    lowercase: 'Del', uppercase: false, shift: '', code: 'Delete',
  },
  {
    lowercase: 'CapsLock', uppercase: false, shift: '', code: 'CapsLock',
  },
  {
    lowercase: 'a', uppercase: 'A', shift: '', code: 'KeyA',
  },
  {
    lowercase: 's', uppercase: 'S', shift: '', code: 'KeyS',
  },
  {
    lowercase: 'd', uppercase: 'D', shift: '', code: 'KeyD',
  },
  {
    lowercase: 'f', uppercase: 'F', shift: '', code: 'KeyF',
  },
  {
    lowercase: 'g', uppercase: 'G', shift: '', code: 'KeyG',
  },
  {
    lowercase: 'h', uppercase: 'H', shift: '', code: 'KeyH',
  },
  {
    lowercase: 'j', uppercase: 'J', shift: '', code: 'KeyJ',
  },
  {
    lowercase: 'k', uppercase: 'K', shift: '', code: 'KeyK',
  },
  {
    lowercase: 'l', uppercase: 'L', shift: '', code: 'KeyL',
  },
  {
    lowercase: ';', uppercase: ';', shift: ':', code: 'Semicolon',
  },
  {
    lowercase: "'", uppercase: "'", shift: '"', code: 'Quote',
  },
  {
    lowercase: 'Enter', uppercase: false, shift: '', code: 'Enter',
  },
  {
    lowercase: 'Shift', uppercase: false, shift: '', code: 'ShiftLeft',
  },
  {
    lowercase: 'z', uppercase: 'Z', shift: '', code: 'KeyZ',
  },
  {
    lowercase: 'x', uppercase: 'X', shift: '', code: 'KeyX',
  },
  {
    lowercase: 'c', uppercase: 'C', shift: '', code: 'KeyC',
  },
  {
    lowercase: 'v', uppercase: 'V', shift: '', code: 'KeyV',
  },
  {
    lowercase: 'b', uppercase: 'B', shift: '', code: 'KeyB',
  },
  {
    lowercase: 'n', uppercase: 'N', shift: '', code: 'KeyN',
  },
  {
    lowercase: 'm', uppercase: 'M', shift: '', code: 'KeyM',
  },
  {
    lowercase: ',', uppercase: ',', shift: '<', code: 'Comma',
  },
  {
    lowercase: '.', uppercase: '.', shift: '>', code: 'Period',
  },
  {
    lowercase: '/', uppercase: '/', shift: '?', code: 'Slash',
  },
  {
    lowercase: '⮝', uppercase: false, shift: '', code: 'ArrowUp',
  },
  {
    lowercase: 'Shift', uppercase: false, shift: '', code: 'ShiftRight',
  },
  {
    lowercase: 'Ctrl', uppercase: false, shift: '', code: 'ControlLeft',
  },
  {
    lowercase: 'Win', uppercase: false, shift: '', code: 'MetaLeft',
  },
  {
    lowercase: 'Alt', uppercase: false, shift: '', code: 'AltLeft',
  },
  {
    lowercase: ' ', uppercase: false, shift: '', code: 'Space',
  },
  {
    lowercase: 'Alt', uppercase: false, shift: '', code: 'AltRight',
  },
  {
    lowercase: '⮜', uppercase: false, shift: '', code: 'ArrowLeft',
  },
  {
    lowercase: '⮟', uppercase: false, shift: '', code: 'ArrowDown',
  },
  {
    lowercase: '⮞', uppercase: false, shift: '', code: 'ArrowRight',
  },
  {
    lowercase: 'Ctrl', uppercase: false, shift: '', code: 'ControlRight',
  },
];
export default keyEn;
