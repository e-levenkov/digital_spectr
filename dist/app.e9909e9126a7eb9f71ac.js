!function(e){function t(t){for(var r,c,a=t[0],i=t[1],l=t[2],s=0,p=[];s<a.length;s++)c=a[s],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&p.push(o[c][0]),o[c]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);for(f&&f(t);p.length;)p.shift()();return u.push.apply(u,l||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,a=1;a<n.length;a++){var i=n[a];0!==o[i]&&(r=!1)}r&&(u.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={0:0},u=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="";var a=window.webpackJsonp=window.webpackJsonp||[],i=a.push.bind(a);a.push=t,a=a.slice();for(var l=0;l<a.length;l++)t(a[l]);var f=i;u.push([121,1]),n()}({121:function(e,t,n){n(122),e.exports=n(308)},308:function(e,t,n){"use strict";n.r(t);n(309),n(310);var r=document.querySelector(".feedback-form"),o=document.querySelector(".feedback-form__input_name"),u=document.querySelector(".feedback-form__input_tel"),c=document.querySelector(".feedback-form__input_email"),a=[];function i(e,t){var n=e.parentElement,r=n.querySelector("small");n.className="form-control error",r.innerText=t,a.push("Error: ".concat(t))}function l(e){e.parentElement.className="form-control success"}r.addEventListener("submit",(function(e){var t,n,r;if(e.preventDefault(),t=o.value.trim(),n=u.value.trim(),r=c.value.trim(),""===t?i(o,"Данное поле не может быть пустым"):function(e){return/^([А-ЯA-Z]|[А-ЯA-Z][\x27а-яa-z]{1,}|[А-ЯA-Z][\x27а-яa-z]{1,}\-([А-ЯA-Z][\x27а-яa-z]{1,}|(оглы)|(кызы)))\040[А-ЯA-Z][\x27а-яa-z]{1,}(\040[А-ЯA-Z][\x27а-яa-z]{1,})?$/.test(e)}(t)?l(o):i(o,"Доступны только русские буквы, пробелы, тире"),""===n?i(u,"Данное поле не может быть пустым"):function(e){return/(^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$)/.test(e)}(n)?l(u):i(u,"Введено некоректное значение"),""===r?i(c,"Данное поле не может быть пустым"):function(e){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)}(r)?l(c):i(c,"Введено некоректное значени"),0==a.length){console.log("request send");var f=new FormData(this);(function(e){fetch("https://digital-spectr.com/ac/academy.php",{method:"POST",mode:"no-cors",body:JSON.stringify(e),headers:{"Content-type":"application/json; charset=UTF-8"}}).then((function(e){return e.text()})).then((function(e){return console.log(e)})).catch((function(e){console.log(e)}))})(f=Object.fromEntries(f)),this.reset()}else console.log("request not send"),a.splice(0,a.length)}))},309:function(e,t,n){},310:function(e,t,n){}});