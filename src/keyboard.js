import keyEn from './key-en';
import keyRu from './key-ru';

export default class VirtualKeyboard {
  constructor() {
    this.capsLock = false;
    this.keyLang = keyRu;
    this.monitor = null;
    this.shift = false;
    this.shiftClick = false;
  }

  init() {
    this.createKeyboard();
    this.setMonitor();
    this.pressKeyBoard();
    this.clickKeyBoard();
    this.upShift();
    this.downShift();
  }

  createKeyboard() {
    const title = document.createElement('h1');
    title.classList.add('title');
    title.innerHTML = 'RSS Виртуальная клавиатура';
    const keyboard = document.createElement('div');
    keyboard.classList.add('keyboard');
    const keyboardKeys = document.createElement('div');
    keyboardKeys.classList.add('keyboard-keys');
    keyboardKeys.innerHTML = this.createKeys();
    keyboard.append(keyboardKeys);
    const monitor = document.createElement('textarea');
    monitor.classList.add('monitor');
    monitor.placeholder = 'You can type anything here...';
    const description = document.createElement('div');
    description.innerHTML = `Клавиатура создана в операционной 
    системе Windows. Для переключения языка используйте левыe <strong>Ctrl + Alt</strong>`;
    description.classList.add('description');
    document.body.append(title);
    document.body.append(monitor);
    document.body.append(keyboard);
    document.body.append(description);
  }

  createKeys() {
    let printKeys = '';
    this.keyLang = localStorage.getItem('lang') === 'Ru' ? keyRu : keyEn;
    this.keyLang.forEach((e) => {
      const letter = this.capsLock && e.uppercase !== false ? e.uppercase : e.lowercase;
      printKeys += `<div class="key" data-code="${e.code}"><span class="key-sub" data-shift="${e.shift}">${letter}</span></div>`;
    });
    return printKeys;
  }

  setMonitor() {
    this.monitor = document.querySelector('.monitor');
    this.monitor.addEventListener('keypress', (e) => {
      e.preventDefault();
    });
  }

  switchContent() {
    this.keys.forEach(
      (e) => {
        this.keyLang.forEach((val) => {
          if (val.code === e.getAttribute('data-code')) {
            const letter = this.capsLock && val.uppercase !== false ? val.uppercase : val.lowercase;
            e.firstChild.textContent = letter;
            e.firstChild.setAttribute('data-shift', val.shift);
          }
        });
      },
    );
  }

  switchShift(eventShift) {
    this.keys.forEach(
      (e) => {
        this.keyLang.forEach((val) => {
          if (val.code === e.getAttribute('data-code')) {
            this.shift = (this.capsLock && !eventShift) || (!this.capsLock && eventShift);
            const letter = this.shift && val.uppercase !== false ? val.uppercase : val.lowercase;
            e.firstChild.textContent = letter;
            e.firstChild.setAttribute('data-shift', val.shift);
          }
        });
      },
    );
  }

  pressKeyBoard() {
    document.addEventListener('keyup', (e) => {
      e.preventDefault();
      const key = document.querySelector(`.key[data-code = "${e.code}"]`);
      if (!key) {
        return;
      }
      if (e.code !== 'CapsLock') {
        key.classList.remove('active');
        this.switchShift(e.shiftKey);
      } else {
        key.classList[this.capsLock ? 'add' : 'remove']('active');
        key.classList[this.capsLock ? 'remove' : 'add']('inactive');
      }
    });

    document.addEventListener('keydown', (e) => {
      e.preventDefault();
      const key = document.querySelector(`.key[data-code = "${e.code}"]`);
      const monitor = document.querySelector('.monitor');
      monitor.focus();
      if (!key) {
        return;
      }
      if ((e.ctrlKey && e.altKey)) {
        this.keyLang = this.keyLang === keyRu ? keyEn : keyRu;
        if (this.keyLang === keyRu) {
          localStorage.setItem('lang', 'Ru');
        } else {
          localStorage.setItem('lang', 'En');
        }
        this.switchContent();
      } else if (e.code === 'CapsLock' && !e.repeat) {
        this.capsLock = !this.capsLock;
        key.classList[this.capsLock ? 'add' : 'remove']('active');
        key.classList[this.capsLock ? 'remove' : 'add']('inactive');
        monitor.value += '';
        this.switchContent();
      } else if ((e.code === 'ShiftLeft' || e.code === 'ShiftRight') && !e.repeat) {
        this.switchShift(e.shiftKey);
      } else if (['AltLeft', 'ControlRight', 'AltRight', 'ControlLeft', 'MetaLeft', 'ShiftLeft', 'ShiftRight', 'CapsLock'].includes(e.code)) {
        monitor.value += '';
      } else if (e.code === 'Tab') {
        this.pressTab();
      } else if (e.code === 'Enter') {
        this.pressEnter();
      } else if (e.code === 'Space') {
        this.pressSpace();
      } else if (e.code === 'Backspace') {
        this.pressBack();
      } else if (e.code === 'Delete') {
        this.pressDel();
      } else if (e.code === 'ArrowUp') {
        VirtualKeyboard.arrowUp();
      } else if (e.code === 'ArrowDown') {
        VirtualKeyboard.arrowDown();
      } else if (e.code === 'ArrowLeft') {
        VirtualKeyboard.arrowLeft();
      } else if (e.code === 'ArrowRight') {
        VirtualKeyboard.arrowRight();
      } else if ((e.shiftKey || this.shiftClick) && key.firstChild.getAttribute('data-shift')) {
        this.insertChars(key.firstChild.getAttribute('data-shift'));
      } else if ((this.shiftClick && this.capsLock)) {
        this.insertChars(key.firstChild.textContent.toLowerCase());
      } else if ((this.shiftClick && !this.capsLock)) {
        this.insertChars(key.firstChild.textContent.toUpperCase());
      } else this.insertChars(key.firstChild.textContent);
      key.classList.add('active');
    });
  }

  clickKeyBoard() {
    this.keys = document.querySelectorAll('.key');
    const monitor = document.querySelector('.monitor');
    this.keys.forEach((k) => {
      k.addEventListener('click', (e) => {
        e.preventDefault();
        monitor.focus();
        const key = e.target.closest('.key').getAttribute('data-code');
        const dataShift = e.target.closest('.key').firstChild.getAttribute('data-shift');
        if (['AltLeft', 'ControlRight', 'AltRight', 'ControlLeft', 'MetaLeft'].includes(key)) {
          monitor.value += '';
        } else if (key === 'CapsLock') {
          this.capsLock = !this.capsLock;
          e.target.closest('.key').classList[this.capsLock ? 'add' : 'remove']('active');
          e.target.closest('.key').classList[this.capsLock ? 'remove' : 'add']('inactive');
          monitor.value += '';
          this.switchContent();
        } else if (key === 'Tab') {
          this.pressTab();
        } else if (key === 'Enter') {
          this.pressTab();
        } else if (key === 'Space') {
          this.pressSpace();
        } else if (key === 'Backspace') {
          this.pressBack();
        } else if (key === 'Delete') {
          this.pressDel();
        } else if (key === 'ArrowUp') {
          VirtualKeyboard.arrowUp();
        } else if (key === 'ArrowDown') {
          VirtualKeyboard.arrowDown();
        } else if (key === 'ArrowLeft') {
          VirtualKeyboard.arrowLeft();
        } else if (key === 'ArrowRight') {
          VirtualKeyboard.arrowRight();
        } else if ((key === 'ShiftLeft' || key === 'ShiftRight')) {
          monitor.value += '';
        } else if ((this.shift && dataShift)) {
          this.insertChars(dataShift);
        } else this.insertChars(e.target.closest('.key').firstChild.textContent);
      });
    });
  }

  downShift() {
    this.keys.forEach((k) => {
      k.addEventListener('mousedown', (e) => {
        if (e.target.innerText === 'Shift') {
          this.shiftClick = true;
          this.switchShift(this.shiftClick);
        }
      });
    });
  }

  upShift() {
    this.keys.forEach((k) => {
      k.addEventListener('mouseup', (e) => {
        if (e.target.innerText === 'Shift') {
          this.shiftClick = false;
          this.switchShift(this.shiftClick);
        }
      });
    });
  }

  insertChars(char) {
    const position = this.monitor.selectionStart;
    this.monitor.value = `${this.monitor.value.slice(0, position)}${char}${this.monitor.value.slice(this.monitor.selectionEnd)}`;
    this.monitor.setSelectionRange(position + char.length, position + char.length);
  }

  pressSpace() {
    const position = this.monitor.selectionStart;
    this.monitor.value = `${this.monitor.value.slice(0, position)} ${this.monitor.value.slice(position)}`;
    this.monitor.setSelectionRange(position + 1, position + 1);
  }

  pressTab() {
    const position = this.monitor.selectionStart;
    this.monitor.value = `${this.monitor.value.slice(0, position)}\t${this.monitor.value.slice(this.monitor.selectionEnd)}`;
    this.monitor.setSelectionRange(position + 1, position + 1);
  }

  pressEnter() {
    const position = this.monitor.selectionStart;
    this.monitor.value = `${this.monitor.value.slice(0, position)}\n${this.monitor.value.slice(this.monitor.selectionEnd)}`;
    this.monitor.setSelectionRange(position + 1, position + 1);
  }

  pressDel() {
    if (this.monitor.selectionStart === this.monitor.selectionEnd) {
      const position = this.monitor.selectionStart;
      this.monitor.value = ([...this.monitor.value].slice(0, position).concat([...this.monitor.value.slice(position, -1)])).join('');
      this.monitor.setSelectionRange(position, position);
    } else {
      const position = this.monitor.selectionStart;
      this.monitor.value = ([...this.monitor.value].slice(0, position).concat([...this.monitor.value.slice(this.monitor.selectionEnd)])).join('');
      this.monitor.setSelectionRange(position, position);
    }
  }

  pressBack() {
    if (this.monitor.selectionStart === this.monitor.selectionEnd) {
      const position = Math.max(0, this.monitor.selectionStart - 1);
      this.monitor.value = ([...this.monitor.value].slice(0, position).concat([...this.monitor.value.slice(this.monitor.selectionEnd)])).join('');
      this.monitor.setSelectionRange(position, position);
    } else {
      const position = this.monitor.selectionStart;
      this.monitor.value = ([...this.monitor.value].slice(0, position).concat([...this.monitor.value.slice(position)])).join('');
      this.monitor.setSelectionRange(position, position);
    }
  }

  static arrowUp() {
    window.getSelection().modify('move', 'left', 'line');
  }

  static arrowDown() {
    window.getSelection().modify('move', 'right', 'line');
  }

  static arrowLeft() {
    window.getSelection().modify('move', 'left', 'character');
  }

  static arrowRight() {
    window.getSelection().modify('move', 'right', 'character');
  }
}
