import keyEn from './key-en';
import keyRu from './key-ru';

export default class VirtualKeyboard {
  constructor() {
    this.capsLock = false;
    this.keyLang = keyRu;
    this.shift = false;
    this.monitor = null;
  }

  init() {
    this.createKeyboard();
    this.setMonitor();
    this.pressKeyBoard();
    this.clickKeyBoard();
  }

  createKeyboard() {
    const keyboard = document.createElement('div');
    keyboard.classList.add('keyboard');
    const keyboardKeys = document.createElement('div');
    keyboardKeys.classList.add('keyboard-keys');
    keyboardKeys.innerHTML = this.createKeys();
    keyboard.append(keyboardKeys);
    const monitor = document.createElement('textarea');
    monitor.classList.add('monitor');
    monitor.placeholder = 'You can type anything here...';
    document.body.append(monitor);
    document.body.append(keyboard);
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

  switchShift(shiftKey) {
    this.keys.forEach(
      (e) => {
        this.keyLang.forEach((val) => {
          if (val.code === e.getAttribute('data-code')) {
            this.shift = (this.capsLock && !shiftKey) || (!this.capsLock && shiftKey);
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
      console.log(this.shift, this.capsLock);
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
        monitor.value += '';
        this.switchShift(e.shiftKey);
      } else if ((e.code === 'ShiftLeft' || e.code === 'ShiftRight' || e.code === 'CapsLock') && e.repeat) {
        monitor.value += '';
      } else if (['AltLeft', 'ControlRight', 'AltRight', 'ControlLeft'].includes(e.code)) {
        monitor.value += '';
        // return
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
      } else if (e.shiftKey && key.firstChild.getAttribute('data-shift')) {
        this.insertChars(key.firstChild.getAttribute('data-shift'));
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
        console.log(e.target);
        const dataShift = e.target.closest('.key').firstChild.getAttribute('data-shift');
        if (['AltLeft', 'ControlRight', 'AltRight', 'ControlLeft', 'MetaLeft'].includes(key)) {
          monitor.value += '';
          // return
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
        } else if ((key === 'ShiftLeft' || key === 'ShiftRight')) {
          monitor.value += '';
        } else if (this.shift && dataShift) {
          this.insertChars(dataShift);
        } else this.insertChars(e.target.closest('.key').firstChild.textContent);
        // else if (this.shift && this.capsLock && dataShift){
        //   this.insertChars(monitor, dataShift);
        // }
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
}
