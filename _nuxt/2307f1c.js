(window.webpackJsonp = window.webpackJsonp || []).push([
  [4],
  {
    310: function (e, t, o) {
      var content = o(322);
      content.__esModule && (content = content.default),
        'string' == typeof content && (content = [[e.i, content, '']]),
        content.locals && (e.exports = content.locals);
      (0, o(30).default)('4bb7ae92', content, !0, { sourceMap: !1 });
    },
    320: function (e, t, o) {
      e.exports = o.p + 'img/default.1926c11.jpg';
    },
    321: function (e, t, o) {
      'use strict';
      o(310);
    },
    322: function (e, t, o) {
      var r = o(29)(!1);
      r.push([
        e.i,
        '.movies{padding:2rem 1rem}.movies .movies-grid{display:grid;grid-column-gap:2rem;-moz-column-gap:2rem;column-gap:2rem;grid-row-gap:4rem;row-gap:4rem;grid-template-columns:1fr}@media(min-width:31.25rem){.movies .movies-grid{grid-template-columns:repeat(2,1fr)}}@media(min-width:46.875rem){.movies .movies-grid{grid-template-columns:repeat(3,1fr)}}@media(min-width:68.75rem){.movies .movies-grid{grid-template-columns:repeat(4,1fr)}}.movies .movies-grid .movie{position:relative;display:flex;flex-direction:column}.movies .movies-grid .movie .movie-img{position:relative;overflow:hidden}.movies .movies-grid .movie .movie-img:hover .overview{transform:translateY(0)}.movies .movies-grid .movie .movie-img img{display:block;width:100%;height:100%}.movies .movies-grid .movie .movie-img .default{display:block;-o-object-fit:fill;object-fit:fill;width:15.25rem;height:22.875rem}.movies .movies-grid .movie .movie-img .review{position:absolute;top:0;left:0;display:flex;justify-content:center;align-items:center;width:2.5rem;height:2.5rem;background-color:#c92502;color:#fff;border-radius:0 0 1rem 0;box-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -1px rgba(0,0,0,.06)}.movies .movies-grid .movie .movie-img .overview{line-height:1.5;position:absolute;bottom:0;background-color:rgba(201,38,2,.9);padding:12px;color:#fff;transform:translateY(100%);transition:all .3s ease-in-out}.movies .movies-grid .movie .info{margin-top:auto}.movies .movies-grid .movie .info .title{margin-top:.5rem;color:#fff;font-size:20px}.movies .movies-grid .movie .info .release{margin-top:.5rem;color:#c9c9c9}.movies .movies-grid .movie .info .button{margin-top:.5rem}',
        '',
      ]),
        (e.exports = r);
    },
    330: function (e, t, o) {
      'use strict';
      o.r(t);
      o(21), o(19), o(20), o(31), o(18), o(32);
      var r = o(9),
        n = (o(42), o(55), o(48), o(0)),
        m = o(64);
      function v(object, e) {
        var t = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(object);
          e &&
            (o = o.filter(function (e) {
              return Object.getOwnPropertyDescriptor(object, e).enumerable;
            })),
            t.push.apply(t, o);
        }
        return t;
      }
      function c(e) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2
            ? v(Object(source), !0).forEach(function (t) {
                Object(r.a)(e, t, source[t]);
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
      var l = n.a.extend({
          computed: c(
            c({}, Object(m.c)(['movies', 'searchMovies'])),
            {},
            {
              moviesGrid: function () {
                return this.searchMovies.length
                  ? this.searchMovies
                  : this.movies;
              },
            }
          ),
          name: 'MovieGrid',
          filters: {
            cutsExtraOverview: function (e) {
              return e.length > 200
                ? e.slice(0, 200).replace(/(^(\s+)|(\s+)$)/g, function (e) {
                    return e.replace(/\s/g, '') + '...';
                  })
                : e.slice(0).replace(/\.$/gm, '');
            },
            cutTitle: function (e) {
              return e.length > 20
                ? ''.concat(e.slice(0, 20).replace(/(^\s+|\s+$)/g, ''), '...')
                : e;
            },
          },
        }),
        d = (o(321), o(3)),
        component = Object(d.a)(
          l,
          function () {
            var e = this,
              t = e.$createElement,
              r = e._self._c || t;
            return r('section', { staticClass: 'container movies' }, [
              r(
                'div',
                { staticClass: 'movies-grid', attrs: { id: 'movie-grid' } },
                e._l(e.moviesGrid, function (t, n) {
                  return r('div', { key: n, staticClass: 'movie' }, [
                    r('div', { staticClass: 'movie-img' }, [
                      t.poster_path
                        ? r('img', {
                            attrs: {
                              src:
                                'https://image.tmdb.org/t/p/w500/' +
                                t.poster_path,
                              alt: 'poster',
                            },
                          })
                        : r('img', {
                            staticClass: 'default',
                            attrs: { src: o(320), alt: 'default poster' },
                          }),
                      e._v(' '),
                      r('p', { staticClass: 'review' }, [
                        e._v(e._s(t.vote_average)),
                      ]),
                      e._v(' '),
                      t.overview
                        ? r('p', { staticClass: 'overview' }, [
                            e._v(
                              '\n          ' +
                                e._s(e._f('cutsExtraOverview')(t.overview)) +
                                '\n        '
                            ),
                          ])
                        : r('p', { staticClass: 'overview' }, [
                            e._v('There is not overview do display'),
                          ]),
                    ]),
                    e._v(' '),
                    r(
                      'div',
                      { staticClass: 'info' },
                      [
                        r('p', { staticClass: 'title' }, [
                          e._v(
                            '\n          ' +
                              e._s(e._f('cutTitle')(t.title)) +
                              '\n        '
                          ),
                        ]),
                        e._v(' '),
                        r('p', { staticClass: 'release' }, [
                          e._v(
                            '\n          Released:\n          ' +
                              e._s(
                                new Date(t.release_date).toLocaleString(
                                  'en-us',
                                  {
                                    month: 'long',
                                    day: 'numeric',
                                    year: 'numeric',
                                  }
                                )
                              ) +
                              '\n        '
                          ),
                        ]),
                        e._v(' '),
                        r(
                          'NuxtLink',
                          {
                            staticClass: 'button button-light',
                            attrs: {
                              to: {
                                name: 'movies-movieid',
                                params: { movieid: t.id },
                              },
                            },
                          },
                          [e._v('Get More Info')]
                        ),
                      ],
                      1
                    ),
                  ]);
                }),
                0
              ),
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
