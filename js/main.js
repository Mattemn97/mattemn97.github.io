/* Matteo Filippini · sito personale */
(function () {
  'use strict';

  // logger condiviso (js/mf-log.js); se manca, i log vengono ignorati
  var noop = function () {};
  var log = window.MFLog || { debug: noop, info: noop, warn: noop, error: noop, time: function () { return noop; } };

  var GH_USER = 'Mattemn97';
  var SELF_REPO = 'mattemn97.github.io';
  var CAREER_START = new Date(2019, 7, 1); // tirocinio Iveco Defence, ago 2019

  var LANG_COLORS = {
    'Python': '#3572A5', 'JavaScript': '#f1e05a', 'TypeScript': '#3178c6', 'HTML': '#e34c26',
    'CSS': '#663399', 'C++': '#f34b7d', 'C': '#555555', 'Vue': '#41b883', 'Batchfile': '#C1F12E',
    'Shell': '#89e051', 'PowerShell': '#012456', 'Java': '#b07219', 'C#': '#178600', 'Go': '#00ADD8',
    'Rust': '#dea584', 'PHP': '#4F5D95', 'Inno Setup': '#264b99', 'MATLAB': '#e16737'
  };
  var langColor = function (l) { return LANG_COLORS[l] || '#8b8fa8'; };

  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  $('#year').textContent = new Date().getFullYear();

  /* ---------------- Tema ---------------- */
  $('#themeToggle').addEventListener('click', function () {
    var root = document.documentElement;
    var current = root.getAttribute('data-theme') ||
      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    var next = current === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch (e) {}
  });

  /* ---------------- Testo che si scrive ---------------- */
  var roles = [
    'sviluppatore software embedded',
    'firmware per centraline ECU',
    'test EMC su veicoli',
    'maker di side project su GitHub',
    'autore di "Da zero a Cento"'
  ];
  var typed = $('#typed');
  if (reduceMotion) {
    typed.textContent = roles[0];
  } else {
    (function typeLoop(i, pos, deleting) {
      var word = roles[i];
      typed.textContent = word.slice(0, pos);
      var delay = deleting ? 35 : 70;
      if (!deleting && pos === word.length) { deleting = true; delay = 1800; }
      else if (deleting && pos === 0) { deleting = false; i = (i + 1) % roles.length; delay = 350; }
      setTimeout(function () { typeLoop(i, deleting ? pos - 1 : pos + 1, deleting); }, delay);
    })(0, 0, false);
  }

  /* ---------------- Reveal on scroll ---------------- */
  var io = 'IntersectionObserver' in window ? new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { threshold: 0.12 }) : null;

  function observeReveals(scope) {
    $$('.reveal:not(.in)', scope).forEach(function (el, idx) {
      el.style.transitionDelay = Math.min(idx * 70, 420) + 'ms';
      if (io) io.observe(el); else el.classList.add('in');
    });
    // rete di sicurezza: nessun contenuto deve restare invisibile
    setTimeout(function () { $$('.reveal:not(.in)', scope).forEach(function (el) { el.classList.add('in'); }); }, 1500);
  }

  /* ---------------- Alone che segue il mouse ---------------- */
  document.addEventListener('pointermove', function (e) {
    var card = e.target.closest && e.target.closest('.glow');
    if (!card) return;
    var r = card.getBoundingClientRect();
    card.style.setProperty('--mx', (e.clientX - r.left) + 'px');
    card.style.setProperty('--my', (e.clientY - r.top) + 'px');
  });

  /* ---------------- Schede ---------------- */
  var tabs = $$('.tabs [data-tab]');
  var indicator = $('.tab-indicator');
  var tabNames = tabs.map(function (t) { return t.dataset.tab; });

  function moveIndicator(btn) {
    if (!btn) return;
    indicator.style.width = btn.offsetWidth + 'px';
    indicator.style.transform = 'translateX(' + btn.offsetLeft + 'px)';
  }

  function showTab(name, scroll) {
    if (tabNames.indexOf(name) === -1) {
      if (name) log.warn('schede', 'Scheda "' + name + '" inesistente, mostro il profilo');
      name = 'profilo';
    }
    log.debug('schede', 'Apro la scheda ' + name);
    tabs.forEach(function (t) {
      var on = t.dataset.tab === name;
      t.setAttribute('aria-selected', on);
      t.tabIndex = on ? 0 : -1;
      if (on) {
        moveIndicator(t);
        var bar = t.parentNode;
        bar.scrollTo({ left: t.offsetLeft - (bar.clientWidth - t.offsetWidth) / 2, behavior: reduceMotion ? 'auto' : 'smooth' });
      }
    });
    $$('[data-panel]').forEach(function (p) {
      var on = p.dataset.panel === name;
      p.hidden = !on;
      if (on) observeReveals(p);
    });
    if (name === 'progetti') loadProjects();
    if (name === 'competenze') animateLangBars();
    if (scroll) {
      var top = $('.tabs').getBoundingClientRect().top + window.scrollY - 70;
      if (window.scrollY > top) window.scrollTo({ top: top, behavior: reduceMotion ? 'auto' : 'smooth' });
    }
  }

  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () { location.hash = t.dataset.tab; });
    t.addEventListener('keydown', function (e) {
      var d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
      if (!d) return;
      var next = tabs[(i + d + tabs.length) % tabs.length];
      next.focus(); location.hash = next.dataset.tab;
    });
  });
  $$('[data-tab-link]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      e.preventDefault();
      if (location.hash === '#' + a.dataset.tabLink) showTab(a.dataset.tabLink, true);
      else location.hash = a.dataset.tabLink;
    });
  });
  window.addEventListener('hashchange', function () { showTab(location.hash.slice(1), true); });
  var refreshIndicator = function () {
    var t = $('.tabs [aria-selected="true"]');
    if (!t) return;
    moveIndicator(t);
    t.parentNode.scrollLeft = t.offsetLeft - (t.parentNode.clientWidth - t.offsetWidth) / 2;
  };
  window.addEventListener('resize', refreshIndicator);
  window.addEventListener('load', refreshIndicator);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(refreshIndicator);

  /* ---------------- Contatori ---------------- */
  function countTo(el, target) {
    if (reduceMotion) { el.textContent = target; return; }
    var start = performance.now(), dur = 1200;
    (function step(now) {
      var p = Math.min((now - start) / dur, 1);
      el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3)));
      if (p < 1) requestAnimationFrame(step);
    })(start);
  }
  function setStat(key, value) {
    var el = $('[data-count="' + key + '"]');
    if (el) countTo(el, value);
  }
  var years = Math.floor((Date.now() - CAREER_START) / (365.25 * 24 * 3600 * 1000));
  setStat('years', years);
  setStat('hack', 4);

  /* ---------------- Dati GitHub ---------------- */
  var repos = null;
  var reposPromise = null;

  function normalize(list) {
    return list
      .filter(function (r) { return r.name.toLowerCase() !== SELF_REPO; })
      .map(function (r) {
        var site = (r.homepage || '').trim();
        if (!site && r.has_pages) site = 'https://' + GH_USER.toLowerCase() + '.github.io/' + r.name + '/';
        return {
          name: r.name,
          description: r.description || '',
          url: r.html_url,
          site: site,
          language: r.language,
          stars: r.stargazers_count || 0,
          forks: r.forks_count || 0,
          fork: !!r.fork,
          archived: !!r.archived,
          topics: r.topics || [],
          pushed: r.pushed_at,
          created: r.created_at
        };
      });
  }

  function getRepos() {
    if (reposPromise) return reposPromise;
    // Prima la copia locale (immediata), poi aggiornamento dalle API di GitHub
    var endLocal = log.time('progetti', 'Lettura copia locale data/repos.json');
    reposPromise = fetch('data/repos.json')
      .then(function (r) {
        if (!r.ok) throw new Error('HTTP ' + r.status);
        return r.json();
      })
      .catch(function (err) {
        log.warn('progetti', 'Copia locale delle repo non disponibile: ' + err.message);
        return [];
      })
      .then(function (local) {
        repos = normalize(local);
        endLocal({ repo: repos.length });
        onReposChanged('snapshot');
        var endLive = log.time('progetti', 'Aggiornamento repo dalle API di GitHub');
        return fetch('https://api.github.com/users/' + GH_USER + '/repos?per_page=100&type=owner')
          .then(function (r) {
            if (!r.ok) {
              var reset = r.headers.get('x-ratelimit-reset');
              throw new Error('HTTP ' + r.status + (r.status === 403 && reset
                ? ' (limite di 60 richieste/ora raggiunto, si sblocca alle ' + new Date(reset * 1000).toLocaleTimeString('it-IT') + ')' : ''));
            }
            return r.json();
          })
          .then(function (live) {
            repos = normalize(live);
            endLive({ repo: repos.length, conSito: repos.filter(function (x) { return x.site; }).length });
            onReposChanged('live');
          })
          .catch(function (err) {
            log.warn('progetti', 'API GitHub non raggiungibile, uso la copia locale (' + repos.length + ' repo): ' + err.message);
          });
      });
    return reposPromise;
  }

  var dataSource = 'snapshot';
  function onReposChanged(source) {
    dataSource = source;
    var langs = {};
    repos.forEach(function (r) { if (r.language) langs[r.language] = (langs[r.language] || 0) + 1; });
    setStat('repos', repos.length);
    setStat('langs', Object.keys(langs).length);
    renderLangBars(langs);
    if (projectsInit) { renderLangFilters(); renderProjects(); }
  }

  /* ---------------- Barre linguaggi ---------------- */
  var langBarsShown = false;
  function renderLangBars(langs) {
    var box = $('#langBars');
    var entries = Object.keys(langs).map(function (k) { return [k, langs[k]]; })
      .sort(function (a, b) { return b[1] - a[1]; });
    var max = entries.length ? entries[0][1] : 1;
    box.innerHTML = entries.map(function (e) {
      return '<div class="lang-bar-row"><span>' + esc(e[0]) + '</span>' +
        '<div class="lang-bar-track"><div class="lang-bar-fill" data-w="' + (e[1] / max * 100) +
        '" style="background:' + langColor(e[0]) + '"></div></div><span class="n">' + e[1] + '</span></div>';
    }).join('');
    if (langBarsShown) animateLangBars();
  }
  function animateLangBars() {
    langBarsShown = true;
    requestAnimationFrame(function () {
      $$('.lang-bar-fill').forEach(function (b) { b.style.width = b.dataset.w + '%'; });
    });
  }

  /* ---------------- Scheda progetti ---------------- */
  var projectsInit = false;
  var state = { q: '', lang: 'all', onlySites: false, sort: 'pushed' };

  function loadProjects() {
    if (projectsInit) return;
    projectsInit = true;
    var grid = $('#projGrid');
    if (!repos) grid.innerHTML = new Array(7).join('<div class="skeleton"></div>');

    $('#projSearch').addEventListener('input', function (e) { state.q = e.target.value.trim().toLowerCase(); renderProjects(); });
    $('#onlySites').addEventListener('change', function (e) { state.onlySites = e.target.checked; renderProjects(); });
    $('#projSort').addEventListener('change', function (e) { state.sort = e.target.value; renderProjects(); });
    grid.addEventListener('click', function (e) {
      var t = e.target.closest('[data-topic]');
      if (!t) return;
      $('#projSearch').value = t.dataset.topic;
      state.q = t.dataset.topic.toLowerCase();
      renderProjects();
    });

    if (repos) { renderLangFilters(); renderProjects(); }
    getRepos();
  }

  function renderLangFilters() {
    var counts = {};
    repos.forEach(function (r) { var l = r.language || 'Altro'; counts[l] = (counts[l] || 0) + 1; });
    var langs = Object.keys(counts).sort(function (a, b) { return counts[b] - counts[a]; });
    var html = '<button data-lang="all">Tutti <span class="muted">' + repos.length + '</span></button>' +
      langs.map(function (l) {
        return '<button data-lang="' + esc(l) + '"><span class="dot" style="background:' + langColor(l) + '"></span>' +
          esc(l) + ' <span class="muted">' + counts[l] + '</span></button>';
      }).join('');
    var box = $('#langFilters');
    box.innerHTML = html;
    $$('button', box).forEach(function (b) {
      b.classList.toggle('active', b.dataset.lang === state.lang);
      b.addEventListener('click', function () {
        state.lang = b.dataset.lang;
        $$('button', box).forEach(function (x) { x.classList.toggle('active', x === b); });
        renderProjects();
      });
    });
  }

  function renderProjects() {
    var list = repos.filter(function (r) {
      if (state.lang !== 'all' && (r.language || 'Altro') !== state.lang) return false;
      if (state.onlySites && !r.site) return false;
      if (state.q) {
        var hay = (r.name + ' ' + r.description + ' ' + r.topics.join(' ')).toLowerCase();
        if (hay.indexOf(state.q) === -1) return false;
      }
      return true;
    });
    list.sort(function (a, b) {
      if (state.sort === 'name') return a.name.localeCompare(b.name, 'it', { sensitivity: 'base' });
      if (state.sort === 'stars') return b.stars - a.stars || (b.pushed > a.pushed ? 1 : -1);
      if (state.sort === 'created') return b.created > a.created ? 1 : -1;
      return b.pushed > a.pushed ? 1 : -1;
    });

    var withSite = repos.filter(function (r) { return r.site; }).length;
    $('#projInfo').textContent = list.length + ' di ' + repos.length + ' progetti · ' + withSite +
      ' con sito online' + (dataSource === 'live' ? ' · aggiornato ora da GitHub' : '');

    var grid = $('#projGrid');
    if (!list.length) {
      grid.innerHTML = '<div class="empty-state"><i class="fa-regular fa-face-meh fa-2x"></i><p>Nessun progetto corrisponde ai filtri.</p></div>';
      return;
    }
    grid.innerHTML = list.map(card).join('');
  }

  var dateFmt = new Intl.DateTimeFormat('it-IT', { month: 'short', year: 'numeric' });

  function card(r, i) {
    var badges = '';
    if (r.site) badges += '<span class="badge live">live</span>';
    if (r.fork) badges += '<span class="badge">fork</span>';
    if (r.archived) badges += '<span class="badge">archiviato</span>';
    var topics = r.topics.slice(0, 6).map(function (t) {
      return '<span data-topic="' + esc(t) + '" title="Filtra per ' + esc(t) + '">#' + esc(t) + '</span>';
    }).join('');
    var meta = [];
    if (r.language) meta.push('<span><span class="lang-dot" style="background:' + langColor(r.language) + '"></span>' + esc(r.language) + '</span>');
    if (r.stars) meta.push('<span><i class="fa-regular fa-star"></i> ' + r.stars + '</span>');
    if (r.forks) meta.push('<span><i class="fa-solid fa-code-fork"></i> ' + r.forks + '</span>');
    if (r.pushed) meta.push('<span title="Ultimo aggiornamento"><i class="fa-regular fa-clock"></i> ' + dateFmt.format(new Date(r.pushed)) + '</span>');

    return '<article class="card glow proj" style="--i:' + i + '">' +
      '<div class="proj-head"><i class="fa-regular fa-folder-open"></i>' +
      '<h3><a href="' + esc(r.url) + '" target="_blank" rel="noopener">' + esc(r.name) + '</a></h3>' +
      '<div class="proj-badges">' + badges + '</div></div>' +
      '<p class="proj-desc' + (r.description ? '' : ' empty') + '">' +
      (r.description ? esc(r.description) : 'Nessuna descrizione: apri la repository per scoprire di cosa si tratta.') + '</p>' +
      (topics ? '<div class="topics">' + topics + '</div>' : '') +
      '<div class="proj-meta">' + meta.join('') + '</div>' +
      '<div class="proj-links">' +
      (r.site ? '<a class="site" href="' + esc(r.site) + '" target="_blank" rel="noopener"><i class="fa-solid fa-globe"></i> Apri il sito</a>' : '') +
      '<a href="' + esc(r.url) + '" target="_blank" rel="noopener"><i class="fa-brands fa-github"></i> Repository</a>' +
      '</div></article>';
  }

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  /* ---------------- Avvio ---------------- */
  observeReveals(document.querySelector('.hero'));
  showTab(location.hash.slice(1) || 'profilo', false);
  getRepos();
})();
