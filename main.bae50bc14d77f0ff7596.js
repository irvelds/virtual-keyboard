(()=>{"use strict";const e=[{lowercase:"`",uppercase:"`",shift:"~",code:"Backquote"},{lowercase:"1",uppercase:"1",shift:"!",code:"Digit1"},{lowercase:"2",uppercase:"2",shift:"@",code:"Digit2"},{lowercase:"3",uppercase:"3",shift:"#",code:"Digit3"},{lowercase:"4",uppercase:"4",shift:"$",code:"Digit4"},{lowercase:"5",uppercase:"5",shift:"%",code:"Digit5"},{lowercase:"6",uppercase:"6",shift:"^",code:"Digit6"},{lowercase:"7",uppercase:"7",shift:"&",code:"Digit7"},{lowercase:"8",uppercase:"8",shift:"*",code:"Digit8"},{lowercase:"9",uppercase:"9",shift:"(",code:"Digit9"},{lowercase:"0",uppercase:"0",shift:")",code:"Digit0"},{lowercase:"-",uppercase:"-",shift:"_",code:"Minus"},{lowercase:"=",uppercase:"=",shift:"+",code:"Equal"},{lowercase:"Backspace",uppercase:"Backspace",shift:"",code:"Backspace"},{lowercase:"Tab",uppercase:!1,shift:"",code:"Tab"},{lowercase:"q",uppercase:"Q",shift:"",code:"KeyQ"},{lowercase:"w",uppercase:"W",shift:"",code:"KeyW"},{lowercase:"e",uppercase:"E",shift:"",code:"KeyE"},{lowercase:"r",uppercase:"R",shift:"",code:"KeyR"},{lowercase:"t",uppercase:"T",shift:"",code:"KeyT"},{lowercase:"y",uppercase:"Y",shift:"",code:"KeyY"},{lowercase:"u",uppercase:"U",shift:"",code:"KeyU"},{lowercase:"i",uppercase:"I",shift:"",code:"KeyI"},{lowercase:"o",uppercase:"O",shift:"",code:"KeyO"},{lowercase:"p",uppercase:"P",shift:"",code:"KeyP"},{lowercase:"[",uppercase:"[",shift:"{",code:"BracketLeft"},{lowercase:"]",uppercase:"]",shift:"}",code:"BracketRight"},{lowercase:"\\",uppercase:"\\",shift:"|",code:"Backslash"},{lowercase:"Del",uppercase:!1,shift:"",code:"Delete"},{lowercase:"CapsLock",uppercase:!1,shift:"",code:"CapsLock"},{lowercase:"a",uppercase:"A",shift:"",code:"KeyA"},{lowercase:"s",uppercase:"S",shift:"",code:"KeyS"},{lowercase:"d",uppercase:"D",shift:"",code:"KeyD"},{lowercase:"f",uppercase:"F",shift:"",code:"KeyF"},{lowercase:"g",uppercase:"G",shift:"",code:"KeyG"},{lowercase:"h",uppercase:"H",shift:"",code:"KeyH"},{lowercase:"j",uppercase:"J",shift:"",code:"KeyJ"},{lowercase:"k",uppercase:"K",shift:"",code:"KeyK"},{lowercase:"l",uppercase:"L",shift:"",code:"KeyL"},{lowercase:";",uppercase:";",shift:":",code:"Semicolon"},{lowercase:"'",uppercase:"'",shift:'"',code:"Quote"},{lowercase:"Enter",uppercase:!1,shift:"",code:"Enter"},{lowercase:"Shift",uppercase:!1,shift:"",code:"ShiftLeft"},{lowercase:"z",uppercase:"Z",shift:"",code:"KeyZ"},{lowercase:"x",uppercase:"X",shift:"",code:"KeyX"},{lowercase:"c",uppercase:"C",shift:"",code:"KeyC"},{lowercase:"v",uppercase:"V",shift:"",code:"KeyV"},{lowercase:"b",uppercase:"B",shift:"",code:"KeyB"},{lowercase:"n",uppercase:"N",shift:"",code:"KeyN"},{lowercase:"m",uppercase:"M",shift:"",code:"KeyM"},{lowercase:",",uppercase:",",shift:"<",code:"Comma"},{lowercase:".",uppercase:".",shift:">",code:"Period"},{lowercase:"/",uppercase:"/",shift:"?",code:"Slash"},{lowercase:"⮝",uppercase:!1,shift:"",code:"ArrowUp"},{lowercase:"Shift",uppercase:!1,shift:"",code:"ShiftRight"},{lowercase:"Ctrl",uppercase:!1,shift:"",code:"ControlLeft"},{lowercase:"Win",uppercase:!1,shift:"",code:"MetaLeft"},{lowercase:"Alt",uppercase:!1,shift:"",code:"AltLeft"},{lowercase:" ",uppercase:!1,shift:"",code:"Space"},{lowercase:"Alt",uppercase:!1,shift:"",code:"AltRight"},{lowercase:"⮜",uppercase:!1,shift:"",code:"ArrowLeft"},{lowercase:"⮟",uppercase:!1,shift:"",code:"ArrowDown"},{lowercase:"⮞",uppercase:!1,shift:"",code:"ArrowRight"},{lowercase:"Ctrl",uppercase:!1,shift:"",code:"ControlRight"}],t=[{lowercase:"ё",uppercase:"Ё",shift:"~",code:"Backquote"},{lowercase:"1",uppercase:"1",shift:"!",code:"Digit1"},{lowercase:"2",uppercase:"2",shift:'"',code:"Digit2"},{lowercase:"3",uppercase:"3",shift:"№",code:"Digit3"},{lowercase:"4",uppercase:"4",shift:";",code:"Digit4"},{lowercase:"5",uppercase:"5",shift:"%",code:"Digit5"},{lowercase:"6",uppercase:"6",shift:":",code:"Digit6"},{lowercase:"7",uppercase:"7",shift:"?",code:"Digit7"},{lowercase:"8",uppercase:"8",shift:"*",code:"Digit8"},{lowercase:"9",uppercase:"9",shift:"(",code:"Digit9"},{lowercase:"0",uppercase:"0",shift:")",code:"Digit0"},{lowercase:"-",uppercase:"-",shift:"_",code:"Minus"},{lowercase:"=",uppercase:"=",shift:"+",code:"Equal"},{lowercase:"Backspace",uppercase:"Backspace",shift:"",code:"Backspace"},{lowercase:"Tab",uppercase:!1,shift:"",code:"Tab"},{lowercase:"й",uppercase:"Й",shift:"",code:"KeyQ"},{lowercase:"ц",uppercase:"Ц",shift:"",code:"KeyW"},{lowercase:"у",uppercase:"У",shift:"",code:"KeyE"},{lowercase:"к",uppercase:"К",shift:"",code:"KeyR"},{lowercase:"е",uppercase:"Е",shift:"",code:"KeyT"},{lowercase:"н",uppercase:"Н",shift:"",code:"KeyY"},{lowercase:"г",uppercase:"Г",shift:"",code:"KeyU"},{lowercase:"ш",uppercase:"Ш",shift:"",code:"KeyI"},{lowercase:"щ",uppercase:"Щ",shift:"",code:"KeyO"},{lowercase:"з",uppercase:"З",shift:"",code:"KeyP"},{lowercase:"х",uppercase:"Х",shift:"",code:"BracketLeft"},{lowercase:"ъ",uppercase:"Ъ",shift:"",code:"BracketRight"},{lowercase:"\\",uppercase:"\\",shift:"/",code:"Backslash"},{lowercase:"Del",uppercase:!1,shift:"",code:"Delete"},{lowercase:"CapsLock",uppercase:!1,shift:"",code:"CapsLock"},{lowercase:"ф",uppercase:"Ф",shift:"",code:"KeyA"},{lowercase:"ы",uppercase:"Ы",shift:"",code:"KeyS"},{lowercase:"в",uppercase:"В",shift:"",code:"KeyD"},{lowercase:"а",uppercase:"А",shift:"",code:"KeyF"},{lowercase:"п",uppercase:"П",shift:"",code:"KeyG"},{lowercase:"р",uppercase:"Р",shift:"",code:"KeyH"},{lowercase:"о",uppercase:"О",shift:"",code:"KeyJ"},{lowercase:"л",uppercase:"Л",shift:"",code:"KeyK"},{lowercase:"д",uppercase:"Д",shift:"",code:"KeyL"},{lowercase:"ж",uppercase:"Ж",shift:"",code:"Semicolon"},{lowercase:"э",uppercase:"Э",shift:"",code:"Quote"},{lowercase:"Enter",uppercase:!1,shift:"",code:"Enter"},{lowercase:"Shift",uppercase:!1,shift:"",code:"ShiftLeft"},{lowercase:"я",uppercase:"Я",shift:"",code:"KeyZ"},{lowercase:"ч",uppercase:"Ч",shift:"",code:"KeyX"},{lowercase:"с",uppercase:"С",shift:"",code:"KeyC"},{lowercase:"м",uppercase:"М",shift:"",code:"KeyV"},{lowercase:"и",uppercase:"И",shift:"",code:"KeyB"},{lowercase:"т",uppercase:"Т",shift:"",code:"KeyN"},{lowercase:"ь",uppercase:"Ь",shift:"",code:"KeyM"},{lowercase:"б",uppercase:"Б",shift:"",code:"Comma"},{lowercase:"ю",uppercase:"Ю",shift:"",code:"Period"},{lowercase:".",uppercase:".",shift:",",code:"Slash"},{lowercase:"⮝",uppercase:!1,shift:"",code:"ArrowUp"},{lowercase:"Shift",uppercase:!1,shift:"",code:"ShiftRight"},{lowercase:"Ctrl",uppercase:!1,shift:"",code:"ControlLeft"},{lowercase:"Win",uppercase:!1,shift:"",code:"MetaLeft"},{lowercase:"Alt",uppercase:!1,shift:"",code:"AltLeft"},{lowercase:" ",uppercase:!1,shift:"",code:"Space"},{lowercase:"Alt",uppercase:!1,shift:"",code:"AltRight"},{lowercase:"⮜",uppercase:!1,shift:"",code:"ArrowLeft"},{lowercase:"⮟",uppercase:!1,shift:"",code:"ArrowDown"},{lowercase:"⮞",uppercase:!1,shift:"",code:"ArrowRight"},{lowercase:"Ctrl",uppercase:!1,shift:"",code:"ControlRight"}];function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function s(e){return function(e){if(Array.isArray(e))return c(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return c(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(e):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?c(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,s=new Array(t);o<t;o++)s[o]=e[o];return s}function r(e,t){for(var s=0;s<t.length;s++){var c=t[s];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(e,(void 0,r=function(e,t){if("object"!==o(e)||null===e)return e;var s=e[Symbol.toPrimitive];if(void 0!==s){var c=s.call(e,"string");if("object"!==o(c))return c;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(c.key),"symbol"===o(r)?r:String(r)),c)}var r}var a=function(){function o(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),this.capsLock=!1,this.keyLang=t,this.monitor=null,this.shift=!1,this.shiftClick=!1}var c,a,i;return c=o,a=[{key:"init",value:function(){this.createKeyboard(),this.setMonitor(),this.pressKeyBoard(),this.clickKeyBoard(),this.upShift(),this.downShift()}},{key:"createKeyboard",value:function(){var e=document.createElement("h1");e.classList.add("title"),e.innerHTML="RSS Виртуальная клавиатура";var t=document.createElement("div");t.classList.add("keyboard");var o=document.createElement("div");o.classList.add("keyboard-keys"),o.innerHTML=this.createKeys(),t.append(o);var s=document.createElement("textarea");s.classList.add("monitor"),s.placeholder="You can type anything here...";var c=document.createElement("div");c.innerHTML="Клавиатура создана в операционной \n    системе Windows. Для переключения языка используйте левыe <strong>Ctrl + Alt</strong>",c.classList.add("description"),document.body.append(e),document.body.append(s),document.body.append(t),document.body.append(c)}},{key:"createKeys",value:function(){var o=this,s="";return this.keyLang="Ru"===localStorage.getItem("lang")?t:e,this.keyLang.forEach((function(e){var t=o.capsLock&&!1!==e.uppercase?e.uppercase:e.lowercase;s+='<div class="key" data-code="'.concat(e.code,'"><span class="key-sub" data-shift="').concat(e.shift,'">').concat(t,"</span></div>")})),s}},{key:"setMonitor",value:function(){this.monitor=document.querySelector(".monitor"),this.monitor.addEventListener("keypress",(function(e){e.preventDefault()}))}},{key:"switchContent",value:function(){var e=this;this.keys.forEach((function(t){e.keyLang.forEach((function(o){if(o.code===t.getAttribute("data-code")){var s=e.capsLock&&!1!==o.uppercase?o.uppercase:o.lowercase;t.firstChild.textContent=s,t.firstChild.setAttribute("data-shift",o.shift)}}))}))}},{key:"switchShift",value:function(e){var t=this;this.keys.forEach((function(o){t.keyLang.forEach((function(s){if(s.code===o.getAttribute("data-code")){t.shift=t.capsLock&&!e||!t.capsLock&&e;var c=t.shift&&!1!==s.uppercase?s.uppercase:s.lowercase;o.firstChild.textContent=c,o.firstChild.setAttribute("data-shift",s.shift)}}))}))}},{key:"pressKeyBoard",value:function(){var s=this;document.addEventListener("keyup",(function(e){e.preventDefault();var t=document.querySelector('.key[data-code = "'.concat(e.code,'"]'));t&&("CapsLock"!==e.code?(t.classList.remove("active"),s.switchShift(e.shiftKey)):(t.classList[s.capsLock?"add":"remove"]("active"),t.classList[s.capsLock?"remove":"add"]("inactive")))})),document.addEventListener("keydown",(function(c){c.preventDefault();var r=document.querySelector('.key[data-code = "'.concat(c.code,'"]'));s.monitor.focus(),s.keys.forEach((function(e){"CapsLock"!==e.getAttribute("data-code")&&e.classList.remove("active")})),r&&(c.ctrlKey&&c.altKey?(s.keyLang=s.keyLang===t?e:t,s.keyLang===t?localStorage.setItem("lang","Ru"):localStorage.setItem("lang","En"),s.switchContent()):"CapsLock"!==c.code||c.repeat?"ShiftLeft"!==c.code&&"ShiftRight"!==c.code||c.repeat?["AltLeft","ControlRight","AltRight","ControlLeft","MetaLeft","ShiftLeft","ShiftRight","CapsLock"].includes(c.code)?s.monitor.value+="":"Tab"===c.code?s.pressTab():"Enter"===c.code?s.pressEnter():"Space"===c.code?s.pressSpace():"Backspace"===c.code?s.pressBack():"Delete"===c.code?s.pressDel():"ArrowUp"===c.code?o.arrowUp():"ArrowDown"===c.code?o.arrowDown():"ArrowLeft"===c.code?o.arrowLeft():"ArrowRight"===c.code?o.arrowRight():(c.shiftKey||s.shiftClick)&&r.firstChild.getAttribute("data-shift")?s.insertChars(r.firstChild.getAttribute("data-shift")):s.shiftClick&&s.capsLock?s.insertChars(r.firstChild.textContent.toLowerCase()):s.shiftClick&&!s.capsLock?s.insertChars(r.firstChild.textContent.toUpperCase()):s.insertChars(r.firstChild.textContent):s.switchShift(c.shiftKey):(s.capsLock=!s.capsLock,r.classList[s.capsLock?"add":"remove"]("active"),r.classList[s.capsLock?"remove":"add"]("inactive"),s.monitor.value+="",s.switchContent()),r.classList.add("active"))}))}},{key:"clickKeyBoard",value:function(){var e=this;this.keys=document.querySelectorAll(".key"),this.keys.forEach((function(t){t.addEventListener("click",(function(t){t.preventDefault(),e.monitor.focus(),e.keys.forEach((function(e){"CapsLock"!==e.getAttribute("data-code")&&e.classList.remove("active")}));var s=t.target.closest(".key").getAttribute("data-code"),c=t.target.closest(".key").firstChild.getAttribute("data-shift");["AltLeft","ControlRight","AltRight","ControlLeft","MetaLeft"].includes(s)?e.monitor.value+="":"CapsLock"===s?(e.capsLock=!e.capsLock,t.target.closest(".key").classList[e.capsLock?"add":"remove"]("active"),t.target.closest(".key").classList[e.capsLock?"remove":"add"]("inactive"),e.monitor.value+="",e.switchContent()):"Tab"===s||"Enter"===s?e.pressTab():"Space"===s?e.pressSpace():"Backspace"===s?e.pressBack():"Delete"===s?e.pressDel():"ArrowUp"===s?o.arrowUp():"ArrowDown"===s?o.arrowDown():"ArrowLeft"===s?o.arrowLeft():"ArrowRight"===s?o.arrowRight():"ShiftLeft"===s||"ShiftRight"===s?e.monitor.value+="":e.shift&&c?e.insertChars(c):e.insertChars(t.target.closest(".key").firstChild.textContent)}))}))}},{key:"downShift",value:function(){var e=this;this.keys.forEach((function(t){t.addEventListener("mousedown",(function(t){"Shift"===t.target.innerText&&(e.shiftClick=!0,e.switchShift(e.shiftClick))}))}))}},{key:"upShift",value:function(){var e=this;this.keys.forEach((function(t){t.addEventListener("mouseup",(function(t){"Shift"===t.target.innerText&&(e.shiftClick=!1,e.switchShift(e.shiftClick))}))}))}},{key:"insertChars",value:function(e){var t=this.monitor.selectionStart;this.monitor.value="".concat(this.monitor.value.slice(0,t)).concat(e).concat(this.monitor.value.slice(this.monitor.selectionEnd)),this.monitor.setSelectionRange(t+e.length,t+e.length)}},{key:"pressSpace",value:function(){var e=this.monitor.selectionStart;this.monitor.value="".concat(this.monitor.value.slice(0,e)," ").concat(this.monitor.value.slice(e)),this.monitor.setSelectionRange(e+1,e+1)}},{key:"pressTab",value:function(){var e=this.monitor.selectionStart;this.monitor.value="".concat(this.monitor.value.slice(0,e),"\t").concat(this.monitor.value.slice(this.monitor.selectionEnd)),this.monitor.setSelectionRange(e+1,e+1)}},{key:"pressEnter",value:function(){var e=this.monitor.selectionStart;this.monitor.value="".concat(this.monitor.value.slice(0,e),"\n").concat(this.monitor.value.slice(this.monitor.selectionEnd)),this.monitor.setSelectionRange(e+1,e+1)}},{key:"pressDel",value:function(){if(this.monitor.selectionStart===this.monitor.selectionEnd){var e=this.monitor.selectionStart;this.monitor.value=s(this.monitor.value).slice(0,e).concat(s(this.monitor.value.slice(e,-1))).join(""),this.monitor.setSelectionRange(e,e)}else{var t=this.monitor.selectionStart;this.monitor.value=s(this.monitor.value).slice(0,t).concat(s(this.monitor.value.slice(this.monitor.selectionEnd))).join(""),this.monitor.setSelectionRange(t,t)}}},{key:"pressBack",value:function(){if(this.monitor.selectionStart===this.monitor.selectionEnd){var e=Math.max(0,this.monitor.selectionStart-1);this.monitor.value=s(this.monitor.value).slice(0,e).concat(s(this.monitor.value.slice(this.monitor.selectionEnd))).join(""),this.monitor.setSelectionRange(e,e)}else{var t=this.monitor.selectionStart;this.monitor.value=s(this.monitor.value).slice(0,t).concat(s(this.monitor.value.slice(t))).join(""),this.monitor.setSelectionRange(t,t)}}}],i=[{key:"arrowUp",value:function(){window.getSelection().modify("move","left","line")}},{key:"arrowDown",value:function(){window.getSelection().modify("move","right","line")}},{key:"arrowLeft",value:function(){window.getSelection().modify("move","left","character")}},{key:"arrowRight",value:function(){window.getSelection().modify("move","right","character")}}],a&&r(c.prototype,a),i&&r(c,i),Object.defineProperty(c,"prototype",{writable:!1}),o}(),i=new a;window.addEventListener("DOMContentLoaded",(function(){localStorage.lang||localStorage.setItem("lang","Ru"),i.init()}))})();