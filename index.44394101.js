function e(e,n,t,s){Object.defineProperty(e,n,{get:t,set:s,enumerable:!0,configurable:!0})}function n(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},s={},r={},a=t.parcelRequirebb86;null==a&&((a=function(e){if(e in s)return s[e].exports;if(e in r){var n=r[e];delete r[e];var t={id:e,exports:{}};return s[e]=t,n.call(t.exports,t,t.exports),t.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,n){r[e]=n},t.parcelRequirebb86=a),a.register("kyEFX",(function(n,t){var s,r;e(n.exports,"register",(function(){return s}),(function(e){return s=e})),e(n.exports,"resolve",(function(){return r}),(function(e){return r=e}));var a={};s=function(e){for(var n=Object.keys(e),t=0;t<n.length;t++)a[n[t]]=e[n[t]]},r=function(e){var n=a[e];if(null==n)throw new Error("Could not resolve bundle with id "+e);return n}})),a("kyEFX").register(JSON.parse('{"5ZPII":"index.44394101.js","jAg1J":"blue_brain.dc6e3056.png","3eYLp":"loader.3abc50f0.png","9g7hS":"call.2aa63eab.png","g8vy3":"qu_people.2040f240.png","3y2hD":"qu_snack.ae8b2495.png","4y0Iy":"qu_star.bfb9e203.png"}'));document.querySelector(".footer__year").innerHTML=(new Date).getFullYear();var i;i=new URL(a("kyEFX").resolve("jAg1J"),import.meta.url).toString();var l;l=new URL(a("kyEFX").resolve("3eYLp"),import.meta.url).toString();var c;function o(){return'\n<div class="question__container">\n    <progress class="question__progress" max="0" value="0"></progress>\n        <div class="question">\n            <p class="question__text"></p>\n        </div>\n       <span class="line"></span>\n        <ul class="answer__list">\n            <li class="answer__ell">\n            <button type="button">\n                <span class="answer__radioBtn"></span>\n                <span class="span answer__text"></span>\n                </button>\n            </li>\n            <li class="answer__ell">\n                <span class="answer__radioBtn"></span>\n                <span class="span answer__text">Женщина</span>\n            </li>\n        </ul>\n    <button type="button" class="btn btn--no-active a btn--next">\n        <p class="btn-text">далее</p>\n    </button>\n</div>'}c=new URL(a("kyEFX").resolve("9g7hS"),import.meta.url).toString();const u=`  <div class="header__box">\n  <img src="${n(i)}" alt="blue_brain" class="header__pic" width="48" height="47">\n  <p class="header__title">тест на определение IQ\n</p>\n</div>`,_=`<div class="loading__container"><p class="loading__title">Обработка </br> результатов</p>\n    <img class="loading__img" src=${n(l)} alt="loader" width="65" heigth="68">\n<p class="loading__text">Определение стиля мышления...........</br>\n..........................................................</p></div>`,p=` <p class="result--title">Ваш результат рассчитан:</p>\n<p class="result">Вы относитесь к 3% респондентов, чей уровень интеллекта более чем на \n15 пунктов отличается от среднего в большую или меньшую сторону! </p>\n<p class="result--appeal">Скорее получите свой результат!</p>\n<p class="result--info">\n  В целях защиты персональных данных результат теста, их подробная интерпретация\n  и рекомендации доступны в виде голосового сообщения по звонку с вашего\n  мобильного телефона\n</p>\n<p class="result--callTimer">Звоните скорее, запись доступна всего </br> \n<span class="min">10</span>\n:\n<span class="sec">00</span>\nминут</p>\n<button type="button" class="result--callBox">\n<img class="result--svg" src=${n(c)} alt="call" width="29" height="29">\n<p class="result--call">Позвонить и прослушать </br>результат</p>\n</button>`;const d=document.querySelector(".main"),w=document.querySelector(".menu"),b=document.querySelector(".header__btn"),m=document.querySelector(".menu__btn-close"),g=document.querySelector(".menu__list"),h=()=>{w.classList.toggle("invisible")};b.addEventListener("click",h),m.addEventListener("click",h),g.addEventListener("click",(()=>{if(document.querySelector(".main-page__hero"))h();else{d.innerHTML='<section>\n  <div id="main" class="main-page__hero">\n\n    <p class="main-page__text">Пройдите точный и быстрый</p>\n\n    <h1 class="main-page__title">\n      тест на <br />\n      определение <br />\n      IQ\n    </h1>\n    <button class="btn btn__start">пРойти тест</button>\n    <p class="main-page__text">\n      и получите рекомендации <br />по развитию своего интеллекта\n    </p>\n    <p class="main-page__text main-page__text--yellow">\n      и улучшению финансового <br />благосостояния и личной жизни\n    </p>\n    <a class="main-page__btn" href="#info">\n      <svg class="main-page__btn-arrow" width="16" height="16">\n        <use href="./images/sprite.svg#icon-arrow"></use>\n      </svg>\n      <p class="main-page__btn-text">Подробнее</p>\n    </a>\n  </div>\n\n  <div id="info" class="main-page__discription">\n    <svg class="main-page__quotation-mark" width="23" height="22">\n      <use href="./images/sprite.svg#icon-quotation-mark"></use>\n    </svg>\n    <p class="main-page__discription-text">\n      Профессиональный <br />IQ-тест позволяет не <br />только определить\n      <br />коэффициент вашего <br />интеллекта,<br />\n      но и выработать список <br />рекомендаций для <br />повышения этого\n      <br />показателя.\n    </p>\n    <svg class="main-page__quotation-mark--reverse" width="23" height="22">\n      <use href="./images/sprite.svg#icon-quotation-mark"></use>\n    </svg>\n  </div>\n\n  <div class="main-page__details">\n    <p class="main-page__details-text">\n      Также по результатам теста<br />\n      <span class="main-page__details-text--upper">вы получите</span>\n      подробные<br />\n      <span class="main-page__details-text--upper">советы</span> по определению\n      наиболее <br />\n      перспективной\n      <span class="main-page__details-text--upper">для вашего <br />типа</span>\n      <span class="main-page__details-text--weight">интеллекта</span>\n      <span class="main-page__details-text--upper"\n        >сферы <br />деятельности,<br\n      /></span>\n      которая принесет вам скорейший <br />финансовый результат.\n    </p>\n    <img src="./images/brain.png" alt="brain" class="main-page__img-brain" />\n    <button class="btn btn__start">\n      <p class="btn-text">пройти тест</p>\n    </button>\n  </div>\n\n  <div id="test" class="main-page__brief">\n    <img src="./images/lightning(1).png" alt="lightning" class="main-page__brief-img1">\n    <img src="./images/lightning(2).png" alt="lightning" class="main-page__brief-img2">\n    <p class="main-page__details-text--white">\n      Прохождение теста займет у <br />вас не более\n      <span class="main-page__details-text--yellow">12 минут,</span> а его\n      <br /><span class="main-page__details-text--weight">результаты</span> вы\n      сможете <br /><span class="main-page__details-text--yellow"\n        >использовать всю жизнь.</span\n      >\n    </p>\n    <p class="main-page__details-text main-page__text-box">Профессиональная <br />интерпретация и детально <br /><span class="main-page__details-text--weight">проработанные <br />рекомендации</span> позволят вам <br />качественно <span class="main-page__details-text--weight"></span>изменить все <br />аспекты своей\n    жизни:</span> от <br />финансового до любовного.</p>\n    <button class="btn btn--black btn__start">\n      <p class="btn-text">пройти тест</p>\n    </button>\n  </div>\n</section>\n';document.querySelector(".header__box").innerHTML="",h()}}));let v=6e5;function f(){let e=setInterval((function(){v-=1e3;const{minutes:n,seconds:t}=function(e){const n=1e3,t=60*n,s=Math.floor(e/t),r=Math.floor(e%t/n);return{minutes:s,seconds:r}}(v);!function({minutes:e,seconds:n}){const t=document.querySelector(".min"),s=document.querySelector(".sec");t.textContent=x(e),s.textContent=x(n)}({minutes:n,seconds:t}),0!==v||clearInterval(e)}),1e3)}function x(e){return String(e).length<=1?String(e).padStart(2,"0"):`${e}`}var L;L=new URL(a("kyEFX").resolve("g8vy3"),import.meta.url).toString();var q;q=new URL(a("kyEFX").resolve("3y2hD"),import.meta.url).toString();var y;function S(){const e=document.querySelector(".result--callBox");fetch("https://swapi.dev/api/people/1/?format=json").then((e=>e.json())).then((n=>{var t;e.insertAdjacentHTML("afterend",`<div class="card"> \n  <p class="card__name">${(t=n).name}</p>\n  <ul class="card__list">\n    <li class="card__item">🧍‍♂/🧍‍♀: ${t.gender}</li>\n    <li class="card__item">📏: ${t.height}</li>\n    <li class="card__item">⚖️: ${t.mass}</li>\n    <li class="card__item">👁: ${t.skin_color}</li>\n  </ul>\n  </div>`)}))}y=new URL(a("kyEFX").resolve("4y0Iy"),import.meta.url).toString();const E=document.querySelector(".header"),A=document.querySelector(".main"),k=document.querySelectorAll(".btn__start");class H{Click(e){return this.answers[e].value}constructor(e,n,t,s){this.type=e,this.text=n,this.picture=t,this.answers=s}}class T{constructor(e,n){this.text=e,this.value=n}}class I{Check(e){return this.value<=e}constructor(e,n){this.text=e,this.value=n}}const F=[new I("Вы относитесь к 3% респондентов, чей уровень интеллекта более чем на 15 пунктов отличается от среднего в большую или меньшую сторону!",0),new I("Вы относитесь к 3% респондентов, чей уровень интеллекта более чем на 15 пунктов отличается от среднего в большую или меньшую сторону!",30)],M=[new H("text","Ваш пол:",0,[new T("Мужчина",1),new T("Женщина",2)]),new H("text","Укажите ваш возраст:",0,[new T("До 18",1),new T("От 18 до 28",2),new T("От 29 до 35",3),new T("От 36",4)]),new H("text","Выберите лишнее:",0,[new T("Дом",1),new T("Шалаш",2),new T("Бунгало",3),new T("Скамейка",4),new T("Хижина",5)]),new H("text","Продолжите числовой ряд: </br> 18  20  24  32  ",0,[new T("62",1),new T("48",2),new T("74",3),new T("57",4),new T("60",5),new T("77",6)]),new H("color","Выберите цвет, который </br>сейчас наиболее Вам </br>приятен:",0,[new T("A8A8A8",1),new T("0000A9",2),new T("00A701",3),new T("F60100",4),new T("FDFF19",5),new T("A95403",4),new T("000000",5),new T("850068",6),new T("46B2AC",7)]),new H("color","Отдохните пару секунд, еще </br>раз Выберите цвет, который </br>сейчас наиболее Вам </br>приятен:",0,[new T("A8A8A8",1),new T("46B2AC",2),new T("A95403",3),new T("00A701",4),new T("000000",5),new T("F60100",6),new T("850068",7),new T("FDFF19",8),new T("0000A9",9)]),new H("text","Какой из городов</br> лишний?",0,[new T("Вашингтон",1),new T("Лондон ",2),new T("Париж",3),new T("Нью-Йорк",4),new T("Москва",5),new T("Оттава",6)]),new H("numbers","Выберите правильную фигуру</br> из четырёх пронумерованных.",n(L),[new T("1",1),new T("2",2),new T("3",3),new T("4",4)]),new H("text","Вам привычнее и важнее:",0,[new T("Наслаждаться </br>каждой минутой </br>проведенного времени",1),new T("Быть устремленными </br>мыслями в будущее",2),new T("Учитывать в ежедневной</br> практике прошлый опыт",3)]),new H("text","Какое определение, по-Вашему, больше подходит к этому геометрическому изображению: ",n(q),[new T("Оно остроконечное",1),new T("Оно устойчиво",2),new T("Оно находится в </br>состоянии равновесия",3)]),new H("numbers&line","Вставьте подходящее число",n(y),[new T("34",1),new T("36",2),new T("53",3),new T("44",4),new T("66",5),new T("53",6)])],Q=new class{Click(e){let n=this.questions[this.currentQuestion].Click(e);this.score+=n;let t=-1;if(n>=1)t=e;else for(let e=0;e<this.questions[this.currentQuestion].answers.length;e+=1)if(this.questions[this.currentQuestion].answers[e].value>=1){t=e;break}return this.Next(),t}Next(){this.currentQuestion+=1,this.currentQuestion>=this.questions.length&&this.End()}End(){for(let e=0;e<this.results.length;e+=1)this.results[e].Check(this.score)&&(this.result=e)}constructor(e,n){this.questions=e,this.results=F,this.result=0,this.score=0,this.currentQuestion=0}}(M,F);for(let e=0;e<k.length;e+=1)k[e].addEventListener("click",R);function R(){E.insertAdjacentHTML("afterbegin",u),A.innerHTML=o,C();const e=document.querySelector(".btn");e.addEventListener("click",(()=>{e.classList.contains("btn--no-active")||C()}))}function C(){const e=document.querySelector(".question__container"),n=document.querySelector(".header__title"),t=document.querySelector(".header__box"),s=document.querySelector(".footer"),r=document.querySelector(".btn"),a=document.querySelector(".question__progress"),i=document.querySelector(".question"),l=document.querySelector(".answer__list"),c=document.querySelector(".line");if(a.setAttribute("max",Q.questions.length),Q.currentQuestion<Q.questions.length){a.setAttribute("value",Q.currentQuestion),s.innerHTML="",0!==Q.questions[Q.currentQuestion].picture?i.innerHTML=`<p class="question__text">\n      ${Q.questions[Q.currentQuestion].text}\n      </p>\n      <img class="question__img" src=${Q.questions[Q.currentQuestion].picture} alt="pic">`:i.innerHTML=`<p class="question__text">${Q.questions[Q.currentQuestion].text}</p>`,l.innerHTML="";for(let e=0;e<Q.questions[Q.currentQuestion].answers.length;e+=1)switch(Q.questions[Q.currentQuestion].type){case"text":l.classList.remove("answer__list--color"),l.classList.remove("answer__list--numbers"),l.insertAdjacentHTML("beforeend",`<li class="answer__ell ell">\n            <span class="answer__radioBtn"></span>\n                <span class="span answer__text">${Q.questions[Q.currentQuestion].answers[e].text}</span>\n            </li>`);break;case"color":l.classList.add("answer__list--color"),l.classList.remove("answer__list--numbers"),l.insertAdjacentHTML("beforeend",`<li class="answer__colorEll ell" style="background:#${Q.questions[Q.currentQuestion].answers[e].text}"><button class="btn--answer"type="button"></button></li>`);break;case"numbers":l.classList.remove("answer__list--color"),l.classList.add("answer__list--numbers"),l.insertAdjacentHTML("beforeend",`<li class="answer__numPic ell">${Q.questions[Q.currentQuestion].answers[e].text}</li>`);break;case"numbers&line":c.classList.add("line--active"),l.classList.add("answer__list--numbers"),l.classList.remove("answer__list--color"),l.insertAdjacentHTML("beforeend",`<li class="answer__numPic ell">${Q.questions[Q.currentQuestion].answers[e].text}</li>`)}r.classList.add("btn--no-active"),function(){let e=document.querySelectorAll(".ell");for(let n=0;n<e.length;n+=1)e[n].addEventListener("click",(function(t){if(e[n].classList.contains("answer__ell")){for(let n=0;n<e.length;n+=1)e[n].classList.contains("answer__ell--active")&&e[n].classList.remove("answer__ell--active");e[n].classList.add("answer__ell--active")}if(e[n].classList.contains("answer__colorEll")){for(let n=0;n<e.length;n+=1)e[n].classList.contains("answer__colorEll--active")&&e[n].classList.remove("answer__colorEll--active");e[n].classList.add("answer__colorEll--active")}if(e[n].classList.contains("answer__numPic")){for(let n=0;n<e.length;n+=1)e[n].classList.contains("answer__numPic--active")&&e[n].classList.remove("answer__numPic--active");e[n].classList.add("answer__numPic--active")}r.classList.remove("btn--no-active"),o(n)}))}()}else{e.innerHTML=_;(()=>{setTimeout((()=>{e.innerHTML=p;document.querySelector(".result").innerHTML=Q.results[Q.result].text,n.innerHTML="Готово!",t.classList.add("header__box--result"),e.classList.add("result__container"),s.innerHTML='<p class="footer__text">TERMENI SI CONDITII: ACESTA ESTE UN SERVICIU DE DIVERTISMENT. PRIN FOLOSIREA LUI DECLARATI CA AVETI 18 ANI IMPLINITI, </p>';const r=document.querySelector(".footer__text");window.addEventListener("scroll",(()=>r.classList.add("footer__text--scroll"))),f();document.querySelector(".result--callBox").addEventListener("click",S)}),1e3)})()}function o(e){Q.Click(e)}}
//# sourceMappingURL=index.44394101.js.map
