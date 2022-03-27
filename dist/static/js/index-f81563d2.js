export function __vite_legacy_guard() {
  import('data:text/javascript,')
}
import {
  r as e,
  o as r,
  c as t,
  a as o,
  b as n,
  N as s,
  d as i,
  e as c
} from './vendor-366ed904.js'
!(function () {
  const e = document.createElement('link').relList
  if (!(e && e.supports && e.supports('modulepreload'))) {
    for (const e of document.querySelectorAll('link[rel="modulepreload"]')) r(e)
    new MutationObserver((e) => {
      for (const t of e)
        if ('childList' === t.type)
          for (const e of t.addedNodes)
            'LINK' === e.tagName && 'modulepreload' === e.rel && r(e)
    }).observe(document, { childList: !0, subtree: !0 })
  }
  function r(e) {
    if (e.ep) return
    e.ep = !0
    const r = (function (e) {
      const r = {}
      return (
        e.integrity && (r.integrity = e.integrity),
        e.referrerpolicy && (r.referrerPolicy = e.referrerpolicy),
        'use-credentials' === e.crossorigin
          ? (r.credentials = 'include')
          : 'anonymous' === e.crossorigin
          ? (r.credentials = 'omit')
          : (r.credentials = 'same-origin'),
        r
      )
    })(e)
    fetch(e.href, r)
  }
})()
var a = (e, r) => {
  const t = e.__vccOpts || e
  for (const [o, n] of r) t[o] = n
  return t
}
var d = a({}, [
  [
    'render',
    function (o, n) {
      const s = e('router-view')
      return r(), t(s)
    }
  ]
])
const l = {},
  u = function (e, r) {
    return r && 0 !== r.length
      ? Promise.all(
          r.map((e) => {
            if ((e = `./${e}`) in l) return
            l[e] = !0
            const r = e.endsWith('.css'),
              t = r ? '[rel="stylesheet"]' : ''
            if (document.querySelector(`link[href="${e}"]${t}`)) return
            const o = document.createElement('link')
            return (
              (o.rel = r ? 'stylesheet' : 'modulepreload'),
              r || ((o.as = 'script'), (o.crossOrigin = '')),
              (o.href = e),
              document.head.appendChild(o),
              r
                ? new Promise((r, t) => {
                    o.addEventListener('load', r),
                      o.addEventListener('error', () =>
                        t(new Error(`Unable to preload CSS for ${e}`))
                      )
                  })
                : void 0
            )
          })
        ).then(() => e())
      : e()
  },
  p = o({
    routes: [
      {
        path: '/',
        component: () =>
          u(
            () => import('./index-096ba317.js'),
            [
              'static/js/index-096ba317.js',
              'static/css/index-d48b3df9.css',
              'static/js/vendor-366ed904.js'
            ]
          )
      },
      {
        path: '/:pathMatch(.*)*',
        component: () =>
          u(
            () => import('./not-found-bc134e0a.js'),
            [
              'static/js/not-found-bc134e0a.js',
              'static/css/not-found-044ef125.css',
              'static/js/vendor-366ed904.js'
            ]
          )
      }
    ],
    history: n()
  })
p.beforeEach(() => {
  s.isStarted() || s.start()
}),
  p.afterEach(() => {
    s.done()
  })
const f = i()
const m = c(d)
m.use(p), m.use(f), m.mount('#app')
export { a as _ }
