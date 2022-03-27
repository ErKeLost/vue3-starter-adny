!(function () {
  var n = document.createElement('style')
  ;(n.innerHTML = '#--unocss-hash--{content:"a1aa8549"}\n'),
    document.head.appendChild(n),
    System.register(['./vendor-legacy-283d0166.js'], function (n) {
      'use strict'
      var e, t, u, r, c
      return {
        setters: [
          function (n) {
            ;(e = n.p), (t = n.f), (u = n.o), (r = n.q), (c = n.W)
          }
        ],
        execute: function () {
          n(
            'default',
            e({
              setup: function (n) {
                var e = t('not found')
                return function (n, t) {
                  return u(), r('div', null, c(e.value), 1)
                }
              }
            })
          )
        }
      }
    })
})()
