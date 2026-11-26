(() => {
  'use strict';

  const { STR, SUBJECTS, BADGES } = window.SEEDHI;
  const PASS = 2; // stars needed for a step to count as done
  const KEY = 'seedhi.v1';

  /* ---------- saved state (this device only) ---------- */

  const defaults = {
    onboarded: false, name: '', lang: 'en', subject: null,
    size: 'm', contrast: false,
    done: {},            // "subject/lesson" -> best stars (0-3)
    streak: 0, bestStreak: 0, lastDay: null
  };

  function load() {
    try { return { ...defaults, ...JSON.parse(localStorage.getItem(KEY) || '{}') }; }
    catch { return { ...defaults }; }
  }
  function save() {
    try { localStorage.setItem(KEY, JSON.stringify(state)); } catch { /* private mode: keep going in memory */ }
  }

  let state = load();
  let quiz = null;        // { key, i, correct, picked, finished }
  let draftName = '';     // name typed on the welcome screen before it is saved
  let draftSubject = null;

  /* ---------- small helpers ---------- */

  const $ = id => document.getElementById(id);
  const main = $('main');
  const t = key => STR[state.lang][key] ?? STR.en[key] ?? key;
  const tx = v => (Array.isArray(v) ? (state.lang === 'hi' ? v[1] : v[0]) : v);
  const fmt = (s, vars) => s.replace(/\{(\w+)\}/g, (_, k) => vars[k]);
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const subj = id => SUBJECTS.find(s => s.id === id);
  const starsFor = (s, l) => state.done[`${s.id}/${l.id}`];
  const isDone = (s, l) => (starsFor(s, l) || 0) >= PASS;
  const doneCount = s => s.lessons.filter(l => isDone(s, l)).length;
  const nextLesson = s => s.lessons.find(l => !isDone(s, l)) || null;
  const announce = msg => { $('live').textContent = ''; setTimeout(() => { $('live').textContent = msg; }, 50); };

  function dayString(offset = 0) {
    const d = new Date(); d.setDate(d.getDate() + offset);
    return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
  }

  function stats() {
    const s = { stars: 0, lessons: 0, subjectsTouched: 0, subjectsDone: 0, perfect: false, bestStreak: state.bestStreak };
    for (const sub of SUBJECTS) {
      const c = doneCount(sub);
      s.lessons += c;
      if (c) s.subjectsTouched++;
      if (c === sub.lessons.length) s.subjectsDone++;
      for (const l of sub.lessons) {
        const st = starsFor(sub, l) || 0;
        s.stars += st;
        if (st === 3) s.perfect = true;
      }
    }
    // A streak only counts if the learner was active today or yesterday.
    s.streak = (state.lastDay === dayString() || state.lastDay === dayString(-1)) ? state.streak : 0;
    return s;
  }

  function recordResult(key, stars) {
    state.done[key] = Math.max(state.done[key] || 0, stars);
    const today = dayString();
    if (state.lastDay !== today) {
      state.streak = state.lastDay === dayString(-1) ? state.streak + 1 : 1;
      state.lastDay = today;
      state.bestStreak = Math.max(state.bestStreak, state.streak);
    }
    save();
  }

  /* ---------- read aloud ---------- */

  const canSpeak = 'speechSynthesis' in window && 'SpeechSynthesisUtterance' in window;
  let speakingBtn = null;

  function stopSpeaking() {
    if (!canSpeak) return;
    speechSynthesis.cancel();
    if (speakingBtn) {
      speakingBtn.setAttribute('aria-pressed', 'false');
      speakingBtn.querySelector('.lbl').textContent = t('listen');
      speakingBtn = null;
    }
  }

  function speak(btn, text) {
    const wasThis = speakingBtn === btn;
    stopSpeaking();
    if (wasThis) return;
    const u = new SpeechSynthesisUtterance(text);
    u.lang = state.lang === 'hi' ? 'hi-IN' : 'en-IN';
    u.rate = 0.9;
    u.onend = u.onerror = () => { if (speakingBtn === btn) stopSpeaking(); };
    speakingBtn = btn;
    btn.setAttribute('aria-pressed', 'true');
    btn.querySelector('.lbl').textContent = t('stop');
    speechSynthesis.speak(u);
  }

  /* ---------- shared pieces of UI ---------- */

  const starText = n => '★'.repeat(n) + '☆'.repeat(3 - n);
  const starBadge = n => `<span class="stars" role="img" aria-label="${esc(fmt(t('starsOf'), { n }))}">${starText(n)}</span>`;

  function bar(s) {
    const c = doneCount(s), n = s.lessons.length;
    const label = fmt(t('doneOf'), { c, n });
    return `<div class="bar" role="progressbar" aria-valuemin="0" aria-valuemax="${n}" aria-valuenow="${c}" aria-label="${esc(label)}"><span style="width:${(c / n) * 100}%"></span></div>
      <p class="small">${label}</p>`;
  }

  function lessonList(s) {
    return `<ol class="steps">${s.lessons.map((l, i) => {
      const st = starsFor(s, l);
      return `<li><a class="step ${isDone(s, l) ? 'is-done' : ''}" href="#/lesson/${s.id}/${l.id}" style="--c:${s.color}">
        <span class="num" aria-hidden="true">${isDone(s, l) ? '✓' : i + 1}</span>
        <span class="step-text">
          <span class="sr-only">${fmt(t('step'), { n: i + 1 })}: </span>
          <strong>${tx(l.title)}</strong>
          <span class="small">${fmt(t('minutes'), { n: l.minutes })} · ${st === undefined ? t('notStarted') : starBadge(st)}</span>
        </span>
        <span class="chev" aria-hidden="true">›</span>
      </a></li>`;
    }).join('')}</ol>`;
  }

  function statRow(st) {
    return `<ul class="stat-row">
      <li><span class="stat-num"><span aria-hidden="true">🔥</span> ${st.streak}</span><span class="small">${t('dayStreak')}</span></li>
      <li><span class="stat-num"><span aria-hidden="true">★</span> ${st.stars}</span><span class="small">${t('stars')}</span></li>
      <li><span class="stat-num"><span aria-hidden="true">✓</span> ${st.lessons}</span><span class="small">${t('lessonsDone')}</span></li>
    </ul>`;
  }

  const backLink = (href, label = t('back')) => `<a class="back" href="${href}"><span aria-hidden="true">‹</span> ${label}</a>`;

  /* ---------- screens ---------- */

  function viewWelcome() {
    return `
      <h1>${t('welcomeTitle')}</h1>
      <p class="lead">${t('welcomeBody')}</p>
      <form id="welcomeForm" class="stack">
        <fieldset>
          <legend>${t('chooseLang')}</legend>
          <div class="seg">
            <button type="button" data-action="set-lang" data-lang="en" aria-pressed="${state.lang === 'en'}" lang="en">English</button>
            <button type="button" data-action="set-lang" data-lang="hi" aria-pressed="${state.lang === 'hi'}" lang="hi">हिन्दी</button>
          </div>
        </fieldset>
        <div>
          <label for="name">${t('yourName')}</label>
          <input id="name" name="name" type="text" maxlength="30" autocomplete="given-name" value="${esc(draftName)}" aria-describedby="nameHint">
          <p class="small" id="nameHint">${t('nameHint')}</p>
        </div>
        <fieldset>
          <legend>${t('chooseSubject')}</legend>
          <p class="small">${t('chooseSubjectHint')}</p>
          <div class="pick-grid">
            ${SUBJECTS.map(s => `<label class="pick" style="--c:${s.color}">
              <input type="radio" name="subject" value="${s.id}" required ${draftSubject === s.id ? 'checked' : ''}>
              <span class="pick-body"><span class="pick-icon" aria-hidden="true">${s.icon}</span>
                <strong>${tx(s.name)}</strong><span class="small">${tx(s.tagline)}</span></span>
            </label>`).join('')}
          </div>
        </fieldset>
        <button class="btn primary big" type="submit">${t('start')}</button>
      </form>`;
  }

  function viewHome() {
    const s = subj(state.subject) || SUBJECTS[0];
    const nx = nextLesson(s);
    return `
      <h1>${state.name ? esc(fmt(t('hello'), { name: state.name })) : t('helloNoName')}</h1>
      ${statRow(stats())}
      <section class="card hero" style="--c:${s.color}" aria-labelledby="heroTitle">
        <p class="eyebrow">${t('mySubject')}</p>
        <h2 id="heroTitle"><span aria-hidden="true">${s.icon}</span> ${tx(s.name)}</h2>
        ${bar(s)}
        ${nx
          ? `<p>${t('nextUp')}: <strong>${tx(nx.title)}</strong></p>
             <a class="btn primary big" href="#/lesson/${s.id}/${nx.id}">${t('continue')}</a>`
          : `<p>${t('allDone')}</p>`}
      </section>
      <h2>${t('steps')}</h2>
      ${lessonList(s)}
      <p><a class="btn" href="#/subjects">${t('otherSubjects')}</a></p>`;
  }

  function viewSubjects() {
    return `
      <h1>${t('allSubjects')}</h1>
      <ul class="subject-grid">
        ${SUBJECTS.map(s => `<li><a class="card subject" href="#/subject/${s.id}" style="--c:${s.color}">
          <span class="pick-icon" aria-hidden="true">${s.icon}</span>
          <strong>${tx(s.name)}</strong>
          <span class="small">${tx(s.tagline)}</span>
          ${bar(s)}
          ${s.id === state.subject ? `<span class="tag">${t('mySubject')}</span>` : ''}
        </a></li>`).join('')}
      </ul>`;
  }

  function viewSubject(s) {
    return `
      ${backLink('#/subjects', t('allSubjects'))}
      <h1><span aria-hidden="true">${s.icon}</span> ${tx(s.name)}</h1>
      <p class="lead">${tx(s.tagline)}</p>
      ${bar(s)}
      <h2>${t('steps')}</h2>
      ${lessonList(s)}
      ${s.id === state.subject
        ? `<p class="small">✓ ${t('isMain')}</p>`
        : `<p><button class="btn" type="button" data-action="make-main" data-id="${s.id}">${t('makeMain')}</button></p>`}`;
  }

  function viewLesson(s, l) {
    const n = s.lessons.indexOf(l) + 1;
    return `
      ${backLink(`#/subject/${s.id}`, tx(s.name))}
      <p class="eyebrow" style="--c:${s.color}">${fmt(t('step'), { n })} · ${fmt(t('minutes'), { n: l.minutes })}</p>
      <h1>${tx(l.title)}</h1>
      <ol class="cards">
        ${l.cards.map((c, i) => `<li class="card lesson-card" style="--c:${s.color}">
          <p>${esc(tx(c))}</p>
          ${canSpeak ? `<button class="btn small-btn" type="button" data-action="speak" data-i="${i}" aria-pressed="false"><span aria-hidden="true">🔊</span> <span class="lbl">${t('listen')}</span></button>` : ''}
        </li>`).join('')}
      </ol>
      <a class="btn primary big" href="#/quiz/${s.id}/${l.id}">${t('startPractice')}</a>`;
  }

  function viewQuiz(s, l) {
    const key = `${s.id}/${l.id}`;
    if (!quiz || quiz.key !== key) quiz = { key, i: 0, correct: 0, picked: null, finished: false };
    if (quiz.finished) return viewResult(s, l);

    const q = l.quiz[quiz.i];
    const answered = quiz.picked !== null;
    const right = quiz.picked === q.a;
    const last = quiz.i === l.quiz.length - 1;

    return `
      ${backLink(`#/lesson/${s.id}/${l.id}`, tx(l.title))}
      <p class="eyebrow" style="--c:${s.color}">${fmt(t('questionOf'), { i: quiz.i + 1, n: l.quiz.length })}</p>
      <h1 class="question">${esc(tx(q.q))}</h1>
      <ul class="options">
        ${q.o.map((o, i) => {
          let cls = '', mark = '';
          if (answered && i === q.a) { cls = 'right'; mark = `<span class="mark"><span aria-hidden="true">✓</span><span class="sr-only"> (${t('rightMark')})</span></span>`; }
          else if (answered && i === quiz.picked) { cls = 'wrong'; mark = `<span class="mark"><span aria-hidden="true">✗</span><span class="sr-only"> (${t('yourAnswer')})</span></span>`; }
          return `<li><button class="option ${cls}" type="button" data-action="answer" data-i="${i}" ${answered ? 'disabled' : ''}>
            <span>${esc(tx(o))}</span>${mark}</button></li>`;
        }).join('')}
      </ul>
      ${answered ? `<div class="feedback ${right ? 'good' : 'bad'}">
          <p><strong>${right ? t('correct') : t('notQuite')}</strong>
          ${right ? '' : esc(fmt(t('rightAnswer'), { a: tx(q.o[q.a]) }))}</p>
          <p>${esc(tx(q.why))}</p>
        </div>
        <button class="btn primary big" id="nextBtn" type="button" data-action="next">${last ? t('seeResult') : t('next')}</button>` : ''}`;
  }

  function viewResult(s, l) {
    const n = l.quiz.length;
    const stars = Math.round((quiz.correct / n) * 3);
    const passed = stars >= PASS;
    const idx = s.lessons.indexOf(l);
    const nx = s.lessons[idx + 1];
    const msg = stars === 3 ? t('resultGreat') : passed ? t('resultGood') : t('resultTry');
    return `
      <div class="result">
        <p class="big-stars" role="img" aria-label="${esc(fmt(t('starsOf'), { n: stars }))}">${starText(stars)}</p>
        <h1>${msg}</h1>
        <p class="lead">${fmt(t('youGot'), { c: quiz.correct, n })}</p>
        <div class="stack">
          ${passed && nx ? `<a class="btn primary big" href="#/lesson/${s.id}/${nx.id}">${t('nextLesson')}</a>` : ''}
          ${!passed ? `<a class="btn primary big" href="#/lesson/${s.id}/${l.id}">${t('readAgain')}</a>` : ''}
          ${stars < 3 ? `<button class="btn big" type="button" data-action="retry">${t('tryAgain')}</button>` : ''}
          <a class="btn big" href="#/subject/${s.id}">${t('backToSubject')}</a>
        </div>
      </div>`;
  }

  function viewProgress() {
    const st = stats();
    return `
      <h1>${t('progressTitle')}</h1>
      ${statRow(st)}
      <ul class="plain stack">
        ${SUBJECTS.map(s => `<li class="card" style="--c:${s.color}">
          <h2 class="h3"><span aria-hidden="true">${s.icon}</span> <a href="#/subject/${s.id}">${tx(s.name)}</a></h2>
          ${bar(s)}
        </li>`).join('')}
      </ul>
      <h2>${t('badges')}</h2>
      <ul class="badge-grid">
        ${BADGES.map(b => {
          const got = b.test(st);
          return `<li class="badge ${got ? 'got' : ''}">
            <span class="badge-icon" aria-hidden="true">${got ? b.icon : '🔒'}</span>
            <strong>${tx(b.name)}</strong>
            <span class="small">${tx(b.desc)}</span>
            <span class="tag">${got ? t('earned') : t('locked')}</span>
          </li>`;
        }).join('')}
      </ul>`;
  }

  function viewSettings() {
    const seg = (action, attr, current, opts) => `<div class="seg">${opts.map(([v, label, lang]) =>
      `<button type="button" data-action="${action}" data-${attr}="${v}" aria-pressed="${current === v}" ${lang ? `lang="${lang}"` : ''}>${label}</button>`).join('')}</div>`;
    return `
      <h1>${t('settingsTitle')}</h1>
      <div class="stack">
        <fieldset><legend>${t('language')}</legend>
          ${seg('set-lang', 'lang', state.lang, [['en', 'English', 'en'], ['hi', 'हिन्दी', 'hi']])}
        </fieldset>
        <fieldset><legend>${t('textSize')}</legend>
          ${seg('set-size', 'size', state.size, [['m', t('sizeM')], ['l', t('sizeL')], ['xl', t('sizeXL')]])}
        </fieldset>
        <label class="switch">
          <input type="checkbox" id="contrast" ${state.contrast ? 'checked' : ''}>
          <span>${t('contrast')}</span>
        </label>
        <form id="nameForm">
          <label for="name">${t('yourName')}</label>
          <div class="row">
            <input id="name" name="name" type="text" maxlength="30" autocomplete="given-name" value="${esc(state.name)}">
            <button class="btn" type="submit">${t('save')}</button>
          </div>
          <p class="small">${t('nameHint')}</p>
        </form>
        <section class="card">
          <h2 class="h3">${t('about')}</h2>
          <p>${t('aboutBody')}</p>
        </section>
        <p><button class="btn danger" type="button" data-action="reset">${t('reset')}</button></p>
      </div>`;
  }

  const viewNotFound = () => `<h1>${t('notFound')}</h1><p><a class="btn primary" href="#/">${t('goHome')}</a></p>`;

  /* ---------- router ---------- */

  function currentLesson() {
    const [, , sid, lid] = location.hash.split('/');
    const s = subj(sid);
    return { s, l: s && s.lessons.find(x => x.id === lid) };
  }

  function render({ focus = false } = {}) {
    stopSpeaking();
    const [, route = '', a] = location.hash.split('/');
    if (route !== 'quiz') quiz = null;

    let html, tab = null;
    if (!state.onboarded) html = viewWelcome();
    else if (route === '') { html = viewHome(); tab = 'home'; }
    else if (route === 'subjects') { html = viewSubjects(); tab = 'subjects'; }
    else if (route === 'subject' && subj(a)) { html = viewSubject(subj(a)); tab = 'subjects'; }
    else if (route === 'lesson' || route === 'quiz') {
      const { s, l } = currentLesson();
      html = !l ? viewNotFound() : route === 'lesson' ? viewLesson(s, l) : viewQuiz(s, l);
      tab = 'subjects';
    }
    else if (route === 'progress') { html = viewProgress(); tab = 'progress'; }
    else if (route === 'settings') { html = viewSettings(); tab = 'settings'; }
    else html = viewNotFound();

    main.innerHTML = html;
    renderChrome(tab);

    const h1 = main.querySelector('h1');
    document.title = h1 ? `${h1.textContent.trim()} · Seedhi` : 'Seedhi';
    if (focus && h1) { h1.tabIndex = -1; h1.focus({ preventScroll: true }); window.scrollTo(0, 0); }
  }

  function renderChrome(tab) {
    const root = document.documentElement;
    root.lang = state.lang;
    root.dataset.size = state.size;
    root.dataset.contrast = state.contrast ? 'high' : 'normal';

    $('skip').textContent = t('skip');
    const other = state.lang === 'en' ? ['hi', 'हिन्दी'] : ['en', 'English'];
    const lb = $('langBtn');
    lb.textContent = other[1]; lb.lang = other[0];

    const off = $('offline');
    off.hidden = navigator.onLine;
    off.textContent = t('offline');

    const tabs = $('tabs');
    tabs.hidden = !state.onboarded;
    tabs.innerHTML = [
      ['home', '#/', '🏠', t('navHome')],
      ['subjects', '#/subjects', '📚', t('navSubjects')],
      ['progress', '#/progress', '⭐', t('navProgress')],
      ['settings', '#/settings', '⚙️', t('navSettings')]
    ].map(([id, href, icon, label]) =>
      `<a href="${href}" ${tab === id ? 'aria-current="page"' : ''}><span aria-hidden="true">${icon}</span>${label}</a>`).join('');
  }

  /* ---------- events ---------- */

  const actions = {
    'toggle-lang': () => setLang(state.lang === 'en' ? 'hi' : 'en'),
    'set-lang': el => setLang(el.dataset.lang, el),
    'set-size': el => { state.size = el.dataset.size; save(); rerenderKeepingFocus(el); },
    'make-main': el => { state.subject = el.dataset.id; save(); render(); announce(t('isMain')); },
    speak: el => { const { l } = currentLesson(); if (l) speak(el, tx(l.cards[+el.dataset.i])); },
    answer: el => {
      const { l } = currentLesson();
      if (!l || !quiz || quiz.picked !== null) return;
      quiz.picked = +el.dataset.i;
      const q = l.quiz[quiz.i];
      const right = quiz.picked === q.a;
      if (right) quiz.correct++;
      render();
      announce(`${right ? t('correct') : `${t('notQuite')} ${fmt(t('rightAnswer'), { a: tx(q.o[q.a]) })}`} ${tx(q.why)}`);
      $('nextBtn').focus();
    },
    next: () => {
      const { l } = currentLesson();
      if (!l || !quiz) return;
      quiz.i++; quiz.picked = null;
      if (quiz.i >= l.quiz.length) {
        quiz.finished = true;
        recordResult(quiz.key, Math.round((quiz.correct / l.quiz.length) * 3));
      }
      render({ focus: true });
    },
    retry: () => { quiz = null; render({ focus: true }); },
    reset: () => {
      if (!confirm(t('resetConfirm'))) return;
      const keep = { lang: state.lang, size: state.size, contrast: state.contrast };
      state = { ...defaults, ...keep };
      draftName = ''; draftSubject = null;
      save();
      if (location.hash && location.hash !== '#/') location.hash = '#/'; else render({ focus: true });
    }
  };

  function setLang(lang, el) {
    state.lang = lang; save();
    if (el) rerenderKeepingFocus(el); else render();
  }

  // Re-render, then put keyboard focus back on the same control.
  function rerenderKeepingFocus(el) {
    const sel = `[data-action="${el.dataset.action}"]` + Object.entries(el.dataset)
      .filter(([k]) => k !== 'action').map(([k, v]) => `[data-${k}="${v}"]`).join('');
    render();
    const again = main.querySelector(sel);
    if (again) again.focus();
  }

  document.addEventListener('click', e => {
    const el = e.target.closest('[data-action]');
    if (el && actions[el.dataset.action]) actions[el.dataset.action](el);
  });

  document.addEventListener('input', e => {
    if (!state.onboarded && e.target.id === 'name') draftName = e.target.value;
  });

  document.addEventListener('change', e => {
    if (e.target.name === 'subject') draftSubject = e.target.value;
    if (e.target.id === 'contrast') {
      state.contrast = e.target.checked; save(); render();
      $('contrast').focus();
    }
  });

  document.addEventListener('submit', e => {
    e.preventDefault();
    const data = new FormData(e.target);
    const name = String(data.get('name') || '').trim().slice(0, 30);
    if (e.target.id === 'welcomeForm') {
      state.name = name;
      state.subject = data.get('subject');
      state.onboarded = true;
      save();
      if (location.hash && location.hash !== '#/') location.hash = '#/'; else render({ focus: true });
    } else if (e.target.id === 'nameForm') {
      state.name = name; save();
      announce(t('saved'));
    }
  });

  window.addEventListener('hashchange', () => render({ focus: true }));
  window.addEventListener('online', () => { $('offline').hidden = true; });
  window.addEventListener('offline', () => { $('offline').hidden = false; });

  render();

  if ('serviceWorker' in navigator && location.protocol.startsWith('http')) {
    window.addEventListener('load', () => navigator.serviceWorker.register('sw.js').catch(() => {}));
  }
})();
