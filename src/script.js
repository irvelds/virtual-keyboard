import './style.scss';
import VirtualKeyboard from './keyboard';

const keyboard = new VirtualKeyboard();

window.addEventListener('DOMContentLoaded', () => {
  if (!localStorage.lang) {
    localStorage.setItem('lang', 'Ru');
  }
  keyboard.init();
});
