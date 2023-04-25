import './style.scss';
import VirtualKeyboard from './keyboard';

const keyboard = new VirtualKeyboard();

window.addEventListener('DOMContentLoaded', () => {
  keyboard.init();
});
