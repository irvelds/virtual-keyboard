import keyEn from './key-en';

export default class VirtualKeyboard {
  constructor() {
    this.capsLock = true;
  }

  init() {
    this.createKeyboard();
  }

  createKeyboard() {
    const keyboard = document.createElement('div');
    keyboard.classList.add('keyboard');
    const keyboardKeys = document.createElement('div');
    keyboardKeys.classList.add('keyboard-keys');
    keyboardKeys.innerHTML = this.createKeys();
    keyboard.append(keyboardKeys);
    document.body.append(keyboard);
  }

  createKeys() {
    let printKeys = '';
    const keyLang = keyEn;
    keyLang.forEach((e) => {
      const letter = this.capsLock && e.uppercase !== false ? e.uppercase : e.lowercase;
      printKeys += `<div class="key" data-code="${e.code}"><span class="key-sub" data-shift="${e.shift}">${letter}</span></div>`;
    });
    return printKeys;
  }
}
