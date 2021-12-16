(window.webpackJsonp = window.webpackJsonp || []).push([
  [7],
  {
    307: function (e, t, n) {
      var content = n(314);
      content.__esModule && (content = content.default),
        'string' == typeof content && (content = [[e.i, content, '']]),
        content.locals && (e.exports = content.locals);
      (0, n(30).default)('299dd651', content, !0, { sourceMap: !1 });
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
    327: function (e, t, n) {
      'use strict';
      n.r(t);
      n(21), n(19), n(20), n(31), n(18), n(32);
      var o = n(9),
        r = n(0),
        c = n(64);
      function v(object, e) {
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
      function m(e) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2
            ? v(Object(source), !0).forEach(function (t) {
                Object(o.a)(e, t, source[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(
                e,
                Object.getOwnPropertyDescriptors(source)
              )
            : v(Object(source)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(source, t)
                );
              });
        }
        return e;
      }
      var l = r.a.extend({
          name: 'single-movie-by-id',
          computed: m(
            m({}, Object(c.c)(['movie', 'isLoading'])),
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
        f = (n(313), n(3)),
        component = Object(f.a)(
          l,
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
  },
]);
