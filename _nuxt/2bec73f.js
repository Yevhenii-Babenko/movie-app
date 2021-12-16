(window.webpackJsonp = window.webpackJsonp || []).push([
  [11, 3, 7],
  {
    304: function (e, t, n) {
      var content = n(306);
      content.__esModule && (content = content.default),
        'string' == typeof content && (content = [[e.i, content, '']]),
        content.locals && (e.exports = content.locals);
      (0, n(30).default)('2d8fd6e2', content, !0, { sourceMap: !1 });
    },
    305: function (e, t, n) {
      'use strict';
      n(304);
    },
    306: function (e, t, n) {
      var o = n(29)(!1);
      o.push([
        e.i,
        '.loading[data-v-54d1585f]{height:100vh;width:100%;display:flex;justify-content:center;align-items:center}@-webkit-keyframes circle-loading-data-v-54d1585f{to{transform:rotate(1turn)}}@keyframes circle-loading-data-v-54d1585f{to{transform:rotate(1turn)}}.loading span[data-v-54d1585f]{display:block;width:4.375rem;height:4.375rem;border-radius:50%;border:.125rem solid transparent;border-top-color:#fff;-webkit-animation:circle-loading-data-v-54d1585f 1.2s ease infinite;animation:circle-loading-data-v-54d1585f 1.2s ease infinite}',
        '',
      ]),
        (e.exports = o);
    },
    307: function (e, t, n) {
      var content = n(314);
      content.__esModule && (content = content.default),
        'string' == typeof content && (content = [[e.i, content, '']]),
        content.locals && (e.exports = content.locals);
      (0, n(30).default)('299dd651', content, !0, { sourceMap: !1 });
    },
    312: function (e, t, n) {
      'use strict';
      n.r(t);
      var o = { name: 'Loading' },
        r = (n(305), n(3)),
        component = Object(r.a)(
          o,
          function () {
            var e = this,
              t = e.$createElement;
            e._self._c;
            return e._m(0);
          },
          [
            function () {
              var e = this.$createElement,
                t = this._self._c || e;
              return t('div', { staticClass: 'loading' }, [t('span')]);
            },
          ],
          !1,
          null,
          '54d1585f',
          null
        );
      t.default = component.exports;
    },
    313: function (e, t, n) {
      'use strict';
      n(307);
    },
    314: function (e, t, n) {
      var o = n(29)(!1);
      o.push([
        e.i,
        '.movie-info{display:flex;flex-direction:column;align-items:center;grid-gap:2rem;gap:2rem;color:#fff}@media(min-width:50rem){.movie-info{flex-direction:row;align-items:flex-start}}.movie-info .movie-img img{max-height:31.25rem;width:100%}@media(min-width:50rem){.movie-info .movie-img img{max-height:43.75rem;width:auto}}.movie-info .movie-content h1{font-size:3.5rem;font-weight:400}.movie-info .movie-content .movie-fact{margin-top:12px;font-size:1.25rem;line-height:1.5}.movie-info .movie-content .movie-fact span{font-weight:600;text-decoration:underline}.movie-info .movie-content .tagline{font-style:italic}.movie-info .movie-content .tagline span{font-style:normal}',
        '',
      ]),
        (e.exports = o);
    },
    326: function (e, t, n) {
      var content = n(339);
      content.__esModule && (content = content.default),
        'string' == typeof content && (content = [[e.i, content, '']]),
        content.locals && (e.exports = content.locals);
      (0, n(30).default)('4f257390', content, !0, { sourceMap: !1 });
    },
    327: function (e, t, n) {
      'use strict';
      n.r(t);
      n(21), n(19), n(20), n(31), n(18), n(32);
      var o = n(9),
        r = n(0),
        c = n(64);
      function l(object, e) {
        var t = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(object);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(object, e).enumerable;
            })),
            t.push.apply(t, n);
        }
        return t;
      }
      function f(e) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2
            ? l(Object(source), !0).forEach(function (t) {
                Object(o.a)(e, t, source[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(
                e,
                Object.getOwnPropertyDescriptors(source)
              )
            : l(Object(source)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(source, t)
                );
              });
        }
        return e;
      }
      var v = r.a.extend({
          name: 'single-movie-by-id',
          computed: f(
            f({}, Object(c.c)(['movie', 'isLoading'])),
            {},
            {
              revenue: function () {
                var e;
                return (
                  null === (e = this.movie) || void 0 === e ? void 0 : e.revenue
                )
                  ? this.movie.revenue.toLocaleString('en-us', {
                      style: 'currency',
                      currency: 'USD',
                    })
                  : 0;
              },
              released: function () {
                return new Date(this.movie.release_date).toLocaleString(
                  'en-us',
                  { month: 'long', day: 'numeric', year: 'numeric' }
                );
              },
            }
          ),
        }),
        m = (n(313), n(3)),
        component = Object(m.a)(
          v,
          function () {
            var e = this,
              t = e.$createElement,
              n = e._self._c || t;
            return n('div', { staticClass: 'movie-info' }, [
              n('div', { staticClass: 'movie-img' }, [
                n('img', {
                  attrs: {
                    src:
                      'https://image.tmdb.org/t/p/w500/' + e.movie.poster_path,
                    alt: 'poster',
                  },
                }),
              ]),
              e._v(' '),
              n('div', { staticClass: 'movie-content' }, [
                n('h1', [e._v('Title: ' + e._s(e.movie.title))]),
                e._v(' '),
                n('p', { staticClass: 'movie-fact tagline' }, [
                  n('span', [e._v('Tagline:')]),
                  e._v(' ' + e._s(e.movie.tagline) + '\n    '),
                ]),
                e._v(' '),
                n('p', { staticClass: 'movie-fact' }, [
                  n('span', [e._v('Released:')]),
                  e._v('\n      ' + e._s(e.released) + '\n    '),
                ]),
                e._v(' '),
                n('p', { staticClass: 'movie-fact' }, [
                  n('span', [e._v('Duration:')]),
                  e._v(' ' + e._s(e.movie.runtime)),
                ]),
                e._v(' '),
                n('p', { staticClass: 'movie-fact' }, [
                  n('span', [e._v('Revenue:')]),
                  e._v('\n      ' + e._s(e.revenue) + '\n    '),
                ]),
                e._v(' '),
                n('p', { staticClass: 'movie-fact' }, [
                  n('span', [e._v('Overview:')]),
                  e._v(' ' + e._s(e.movie.overview)),
                ]),
              ]),
            ]);
          },
          [],
          !1,
          null,
          null,
          null
        );
      t.default = component.exports;
    },
    338: function (e, t, n) {
      'use strict';
      n(326);
    },
    339: function (e, t, n) {
      var o = n(29)(!1);
      o.push([
        e.i,
        '.single-movie[data-v-103cb892]{color:#fff;min-height:100vh;display:flex;flex-direction:column;justify-content:center;padding:32px 16px}.single-movie .button[data-v-103cb892]{align-self:flex-start;margin-bottom:32px}',
        '',
      ]),
        (e.exports = o);
    },
    349: function (e, t, n) {
      'use strict';
      n.r(t);
      var o = n(7),
        r = (n(41), n(0)),
        c = n(64),
        l = r.a.extend({
          name: 'single-movie',
          mounted: function () {
            var e = this;
            return Object(o.a)(
              regeneratorRuntime.mark(function t() {
                return regeneratorRuntime.wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (t.next = 2),
                          e.$store.dispatch(
                            'fetchSingleMovieById',
                            e.$route.params.movieid
                          )
                        );
                      case 2:
                      case 'end':
                        return t.stop();
                    }
                }, t);
              })
            )();
          },
          computed: Object(c.c)(['movie', 'isLoading']),
        }),
        f = (n(338), n(3)),
        component = Object(f.a)(
          l,
          function () {
            var e = this,
              t = e.$createElement,
              n = e._self._c || t;
            return n(
              'div',
              { staticClass: 'container single-movie' },
              [
                n(
                  'NuxtLink',
                  { staticClass: 'button', attrs: { to: { name: 'index' } } },
                  [e._v('Back')]
                ),
                e._v(' '),
                e.isLoading ? n('Loading') : n('SingleMovie'),
              ],
              1
            );
          },
          [],
          !1,
          null,
          '103cb892',
          null
        );
      t.default = component.exports;
      installComponents(component, {
        Loading: n(312).default,
        SingleMovie: n(327).default,
      });
    },
  },
]);
