(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    133: function (t, e, n) {
      'use strict';
      var r = n(0),
        o = { props: ['blok'] },
        l = n(3),
        c = Object(l.a)(
          o,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n(
              'div',
              {
                directives: [
                  {
                    name: 'editable',
                    rawName: 'v-editable',
                    value: t.blok,
                    expression: 'blok',
                  },
                ],
                staticClass: 'page',
              },
              t._l(t.blok.body, function (t) {
                return n(t.component, {
                  key: t._uid,
                  tag: 'component',
                  attrs: { blok: t },
                });
              }),
              1
            );
          },
          [],
          !1,
          null,
          null,
          null
        ).exports,
        _ = { props: ['blok'] },
        f =
          (n(294),
          Object(l.a)(
            _,
            function () {
              var t = this,
                e = t.$createElement,
                n = t._self._c || e;
              return n(
                'div',
                {
                  directives: [
                    {
                      name: 'editable',
                      rawName: 'v-editable',
                      value: t.blok,
                      expression: 'blok',
                    },
                  ],
                  staticClass: 'teaser',
                },
                [n('img', { attrs: { src: t.blok.image.filename, alt: '' } })]
              );
            },
            [],
            !1,
            null,
            null,
            null
          ).exports),
        d = { props: ['blok'] },
        v = Object(l.a)(
          d,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n(
              'div',
              {
                directives: [
                  {
                    name: 'editable',
                    rawName: 'v-editable',
                    value: t.blok,
                    expression: 'blok',
                  },
                ],
                staticStyle: {
                  display: 'flex',
                  'justify-content': 'space-around',
                },
              },
              t._l(t.blok.columns, function (t) {
                return n(t.component, {
                  key: t._uid,
                  tag: 'component',
                  attrs: { blok: t },
                });
              }),
              1
            );
          },
          [],
          !1,
          null,
          null,
          null
        ).exports,
        m =
          (n(42),
          n(55),
          {
            computed: {
              resizedIcon: function () {
                return void 0 !== this.blok.icon
                  ? '//img2.storyblok.com/80x80' +
                      this.blok.icon.replace('//a.storyblok.com', '')
                  : null;
              },
            },
            props: ['blok'],
          }),
        h =
          (n(296),
          Object(l.a)(
            m,
            function () {
              var t = this,
                e = t.$createElement,
                n = t._self._c || e;
              return n(
                'div',
                {
                  directives: [
                    {
                      name: 'editable',
                      rawName: 'v-editable',
                      value: t.blok,
                      expression: 'blok',
                    },
                  ],
                  staticClass: 'util__flex-eq',
                },
                [
                  n('img', {
                    staticClass: 'feature__icon',
                    attrs: { src: t.resizedIcon },
                  }),
                  t._v(' '),
                  n('h1', [t._v(t._s(t.blok.name))]),
                  t._v(' '),
                  n('div', { staticClass: 'feature__description' }, [
                    t._v('\n    ' + t._s(t.blok.description) + '\n  '),
                  ]),
                ]
              );
            },
            [],
            !1,
            null,
            null,
            null
          ).exports),
        x = { props: ['blok'] };
      n(298),
        Object(l.a)(
          x,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n(
              'div',
              {
                directives: [
                  {
                    name: 'editable',
                    rawName: 'v-editable',
                    value: t.blok,
                    expression: 'blok',
                  },
                ],
                staticClass: 'slide',
              },
              [n('pre', [t._v(t._s(t.blok))])]
            );
          },
          [],
          !1,
          null,
          null,
          null
        ).exports;
      r.a.component('page', c),
        r.a.component('teaser', f),
        r.a.component('grid', v),
        r.a.component('feature', h);
    },
    174: function (t, e, n) {
      var content = n(247);
      content.__esModule && (content = content.default),
        'string' == typeof content && (content = [[t.i, content, '']]),
        content.locals && (t.exports = content.locals);
      (0, n(30).default)('580cfc67', content, !0, { sourceMap: !1 });
    },
    175: function (t, e, n) {
      var content = n(249);
      content.__esModule && (content = content.default),
        'string' == typeof content && (content = [[t.i, content, '']]),
        content.locals && (t.exports = content.locals);
      (0, n(30).default)('b99804e8', content, !0, { sourceMap: !1 });
    },
    176: function (t, e, n) {
      var content = n(251);
      content.__esModule && (content = content.default),
        'string' == typeof content && (content = [[t.i, content, '']]),
        content.locals && (t.exports = content.locals);
      (0, n(30).default)('c72e2e5e', content, !0, { sourceMap: !1 });
    },
    177: function (t, e, n) {
      var content = n(253);
      content.__esModule && (content = content.default),
        'string' == typeof content && (content = [[t.i, content, '']]),
        content.locals && (t.exports = content.locals);
      (0, n(30).default)('33164fa7', content, !0, { sourceMap: !1 });
    },
    189: function (t, e, n) {
      var content = n(295);
      content.__esModule && (content = content.default),
        'string' == typeof content && (content = [[t.i, content, '']]),
        content.locals && (t.exports = content.locals);
      (0, n(30).default)('30f597cc', content, !0, { sourceMap: !1 });
    },
    190: function (t, e, n) {
      var content = n(297);
      content.__esModule && (content = content.default),
        'string' == typeof content && (content = [[t.i, content, '']]),
        content.locals && (t.exports = content.locals);
      (0, n(30).default)('f0588744', content, !0, { sourceMap: !1 });
    },
    191: function (t, e, n) {
      var content = n(299);
      content.__esModule && (content = content.default),
        'string' == typeof content && (content = [[t.i, content, '']]),
        content.locals && (t.exports = content.locals);
      (0, n(30).default)('5d5fb468', content, !0, { sourceMap: !1 });
    },
    192: function (t, e, n) {
      'use strict';
      n.r(e);
      var r = { name: 'Footer' },
        o = (n(252), n(3)),
        component = Object(o.a)(
          r,
          function () {
            var t = this,
              e = t.$createElement;
            t._self._c;
            return t._m(0);
          },
          [
            function () {
              var t = this,
                e = t.$createElement,
                n = t._self._c || e;
              return n('footer', { staticClass: 'footer' }, [
                n('div', { staticClass: 'footer__container' }, [
                  n('div', { staticClass: 'box' }, [
                    n('div', { staticClass: 'box__item' }, [
                      n('div', { staticClass: 'box-inner' }, [
                        n(
                          'h4',
                          {
                            staticClass:
                              'box-inner__title box-inner__title--modificator',
                          },
                          [t._v('\n            Now Streaming\n          ')]
                        ),
                        t._v(' '),
                        n('div', { staticClass: 'box-inner__paragraphs' }, [
                          n('p', { staticClass: 'paragraphs__item' }, [
                            t._v(
                              '\n              Warehouse Society, 234 Bahagia Ave Street PRBW 29281\n            '
                            ),
                          ]),
                          t._v(' '),
                          n('p', { staticClass: 'paragraphs__item' }, [
                            t._v(
                              '\n              © Now Streaming™, 2021. All rights reserved. Company\n              Registration Number: 21479524.\n            '
                            ),
                          ]),
                        ]),
                      ]),
                    ]),
                    t._v(' '),
                    n('div', { staticClass: 'box__item' }, [
                      n('div', { staticClass: 'box-inner' }, [
                        n('h4', { staticClass: 'box-inner__title' }, [
                          t._v('About'),
                        ]),
                        t._v(' '),
                        n('ul', { staticClass: 'list' }, [
                          n('li', { staticClass: 'list__item' }, [
                            n(
                              'a',
                              {
                                staticClass: 'list__link',
                                attrs: { href: '#' },
                              },
                              [t._v('Profile')]
                            ),
                          ]),
                          t._v(' '),
                          n('li', { staticClass: 'list__item' }, [
                            n(
                              'a',
                              {
                                staticClass: 'list__link',
                                attrs: { href: '#' },
                              },
                              [t._v('Features')]
                            ),
                          ]),
                          t._v(' '),
                          n('li', { staticClass: 'list__item' }, [
                            n(
                              'a',
                              {
                                staticClass: 'list__link',
                                attrs: { href: '#' },
                              },
                              [t._v('Careers')]
                            ),
                          ]),
                        ]),
                      ]),
                    ]),
                    t._v(' '),
                    n('div', { staticClass: 'box__item' }, [
                      n('div', { staticClass: 'box-inner' }, [
                        n('h4', { staticClass: 'box-inner__title' }, [
                          t._v('Help'),
                        ]),
                        t._v(' '),
                        n('ul', { staticClass: 'list' }, [
                          n('li', { staticClass: 'list__item' }, [
                            n(
                              'a',
                              {
                                staticClass: 'list__link',
                                attrs: { href: '#' },
                              },
                              [t._v('Support')]
                            ),
                          ]),
                          t._v(' '),
                          n('li', { staticClass: 'list__item' }, [
                            n(
                              'a',
                              {
                                staticClass: 'list__link',
                                attrs: { href: '#' },
                              },
                              [t._v('Sign up')]
                            ),
                          ]),
                          t._v(' '),
                          n('li', { staticClass: 'list__item' }, [
                            n(
                              'a',
                              {
                                staticClass: 'list__link',
                                attrs: { href: '#' },
                              },
                              [t._v('Guide')]
                            ),
                          ]),
                          t._v(' '),
                          n('li', { staticClass: 'list__item' }, [
                            n(
                              'a',
                              {
                                staticClass: 'list__link',
                                attrs: { href: '#' },
                              },
                              [t._v('Reports')]
                            ),
                          ]),
                          t._v(' '),
                          n('li', { staticClass: 'list__item' }, [
                            n(
                              'a',
                              {
                                staticClass: 'list__link',
                                attrs: { href: '#' },
                              },
                              [t._v('Q&A')]
                            ),
                          ]),
                        ]),
                      ]),
                    ]),
                    t._v(' '),
                    n('div', { staticClass: 'box__item' }, [
                      n('div', { staticClass: 'box-inner' }, [
                        n('h4', { staticClass: 'box-inner__title' }, [
                          t._v('Social Media'),
                        ]),
                        t._v(' '),
                        n('div', { staticClass: 'box-inner__social' }, [
                          n('a', { attrs: { href: '#' } }, [
                            n('img', {
                              staticClass: 'box-inner__social__img',
                              attrs: {
                                src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Facebook_icon_2013.svg/768px-Facebook_icon_2013.svg.png',
                                alt: 'Facebook',
                              },
                            }),
                          ]),
                          t._v(' '),
                          n('a', { attrs: { href: '#' } }, [
                            n('img', {
                              staticClass: 'box-inner__social__img',
                              attrs: {
                                src: 'https://cdn-icons-png.flaticon.com/512/124/124021.png',
                                alt: 'Twitter',
                              },
                            }),
                          ]),
                          t._v(' '),
                          n('a', { attrs: { href: '#' } }, [
                            n('img', {
                              staticClass: 'box-inner__social__img',
                              attrs: {
                                src: 'https://cdn.pixabay.com/photo/2021/06/15/12/14/instagram-6338393_960_720.png',
                                alt: 'Instagram',
                              },
                            }),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
              ]);
            },
          ],
          !1,
          null,
          null,
          null
        );
      e.default = component.exports;
      installComponents(component, { Footer: n(192).default });
    },
    200: function (t, e, n) {
      'use strict';
      n(246);
      var r = n(3),
        component = Object(r.a)(
          {},
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n('div', [n('login-register-bar'), t._v(' '), n('Nuxt')], 1);
          },
          [],
          !1,
          null,
          '00d05df3',
          null
        );
      e.a = component.exports;
      installComponents(component, { LoginRegisterBar: n(300).default });
    },
    201: function (t, e, n) {
      'use strict';
      var r = n(3),
        component = Object(r.a)(
          {},
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n(
              'div',
              { staticClass: 'app' },
              [
                n('Navbar'),
                t._v(' '),
                n('Nuxt', { attrs: { 'keep-alive': '' } }),
                t._v(' '),
                n('Footer'),
              ],
              1
            );
          },
          [],
          !1,
          null,
          null,
          null
        );
      e.a = component.exports;
      installComponents(component, {
        Navbar: n(301).default,
        Footer: n(192).default,
      });
    },
    203: function (t, e, n) {
      n(204), (t.exports = n(205));
    },
    244: function (t, e, n) {
      var content = n(245);
      content.__esModule && (content = content.default),
        'string' == typeof content && (content = [[t.i, content, '']]),
        content.locals && (t.exports = content.locals);
      (0, n(30).default)('27894c40', content, !0, { sourceMap: !1 });
    },
    245: function (t, e, n) {
      var r = n(29)(!1);
      r.push([
        t.i,
        '.button{display:inline-block;text-decoration:none;color:inherit;padding:.5rem 1rem;background-color:#c92502;border:none;color:#fff;border-radius:.25rem;cursor:pointer;transition:all .3s ease}.button:hover{background-color:#891b02}.button--srch{border-top-left-radius:0;border-bottom-left-radius:0;border:.125rem solid #c92502}.button--srch:hover{border-color:#891b02}.button--width{min-width:15ch}*{margin:0;padding:0;box-sizing:border-box;font-family:"Karla",sans-serif;scroll-behavior:smooth;font-size:1rem}:before :after{box-sizing:inherit}.app{background-color:#211f1f;min-height:100vh}.container{width:69rem;margin:0 auto}.page-enter-active,.page-leave-active{transition:opacity .5s}.page-enter,.page-leave-to{opacity:0}',
        '',
      ]),
        (t.exports = r);
    },
    246: function (t, e, n) {
      'use strict';
      n(174);
    },
    247: function (t, e, n) {
      var r = n(29)(!1);
      r.push([
        t.i,
        'div[data-v-00d05df3]{background-color:#333;min-height:100vh}.auth[data-v-00d05df3]{background-color:#000;opacity:.1;height:100vh;z-index:-1}div>div[data-v-00d05df3]{color:#fff}',
        '',
      ]),
        (t.exports = r);
    },
    248: function (t, e, n) {
      'use strict';
      n(175);
    },
    249: function (t, e, n) {
      var r = n(29)(!1);
      r.push([
        t.i,
        '.wrapper[data-v-6da3e4d7]{padding:40px 0}.navbar[data-v-6da3e4d7]{border:#333;display:flex;color:#fff;overflow:hidden;width:50%;margin-left:auto}.navbar__list[data-v-6da3e4d7]{display:flex;list-style-type:none;margin:0;flex-grow:1;grid-gap:5%;gap:5%;justify-content:flex-end;padding:0 5% 0 0}.navbar__item:first-of-type .navbar__link[data-v-6da3e4d7]{color:red;transition:all .3s ease-in-out}.navbar__item:first-of-type .navbar__link[data-v-6da3e4d7]:hover,.navbar__link[data-v-6da3e4d7]{color:#fff;transition:all .5s ease-in-out}.navbar__link[data-v-6da3e4d7]{text-decoration:none;font-weight:700}.navbar__link[data-v-6da3e4d7]:hover{color:red;transition:all .3s ease-in-out}',
        '',
      ]),
        (t.exports = r);
    },
    250: function (t, e, n) {
      'use strict';
      n(176);
    },
    251: function (t, e, n) {
      var r = n(29)(!1);
      r.push([
        t.i,
        '.wrapper{padding:30px 0}.navbar{border:#333;display:flex;color:#fff;overflow:hidden;width:50%;margin-left:auto}.navbar__list{display:flex;list-style-type:none;margin:0;padding:0;flex-grow:1;grid-gap:5%;gap:5%;align-items:center;justify-content:flex-end}.navbar__item:first-of-type .navbar__link{color:#f50707;transition:all .3s ease-in-out}.navbar__item:first-of-type .navbar__link:hover{color:#fff;transition:all .5s ease-in-out}.navbar__item:last-of-type{width:30%}.navbar__item:last-of-type .navbar__link{font-size:inherit;box-sizing:border-box;font-weight:700;position:relative;vertical-align:middle;background-color:#c92502;color:#fff;display:inline-block;height:2.188rem;text-align:center;padding:0 20px;cursor:pointer;border-radius:4px;border:.125rem solid #c92502;outline:none;transition:.5s}.navbar__item:last-of-type .navbar__link:hover{border:.125rem solid #333;background-color:#211f1f;color:#f50707}.navbar__item:last-of-type .navbar__link:after,.navbar__item:last-of-type .navbar__link:before{width:100%;height:100%;z-index:3;content:" ";position:absolute;top:0;left:0;transform:scale(0);transition:.5s}.navbar__item:last-of-type .navbar__link:hover:after,.navbar__item:last-of-type .navbar__link:hover:before{transform:scale(1)}.navbar__item .navbar__link__outline:before{border-bottom:.125rem solid #f50707;border-left:.125rem solid #f50707;transform-origin:0 100%}.navbar__item .navbar__link__outline:after{border-top:.125rem solid #f50707;border-right:.125rem solid #f50707;transform-origin:100% 0}.navbar__link{text-decoration:none;color:#fff;transition:all .5s ease-in-out;font-weight:700}.navbar__link:hover{color:#f50707;transition:all .3s ease-in-out}',
        '',
      ]),
        (t.exports = r);
    },
    252: function (t, e, n) {
      'use strict';
      n(177);
    },
    253: function (t, e, n) {
      var r = n(29)(!1);
      r.push([
        t.i,
        '.footer{padding:30px 0;width:100vw}.footer__container{width:70rem;position:relative;margin:0 auto;display:flex;flex-direction:column}.box{display:flex;grid-gap:10%;gap:10%;color:#fff;padding:10px 0}.box__item{display:flex;flex-grow:1;padding:0;margin:0}.box__item:first-of-type{flex-shrink:2}.box-inner__paragraphs{display:flex;flex-direction:column}.box-inner__title{margin-bottom:40%}.box-inner__title--modificator{margin-bottom:0}.box-inner__social__img{width:30px;-o-object-fit:contain;object-fit:contain;border-radius:50%}.box-inner__social__img:hover{cursor:pointer;transform:scale(1.1)}.paragraphs__item{padding:5px 0;white-space:pre-line;line-height:20px;font-size:13px}.box__item:first-of-type>.box-inner{display:flex;flex-direction:column}.list{list-style:none;padding:0;margin:0}.list__link{text-decoration:none;color:#fff}.list__link,.list__link:hover{transition:all .4s ease-in-out}.list__link:hover{color:#f50707}.list__item{margin:10px 0}header{position:relative}.wrapper{padding:40px 0}.navbar{border:#333;display:flex;color:#fff;margin:0;overflow:hidden}.navbar__list{display:flex;list-style-type:none;margin:0;padding:0;flex-grow:1;grid-gap:5%;gap:5%}.navbar__item:first-of-type .navbar__link{color:#f50707;transition:all .5s ease-in-out}.navbar__item:first-of-type .navbar__link:hover{color:#fff;transition:all .3s ease-in-out}.navbar__link{text-decoration:none;color:#fff;transition:all .5s ease-in-out;font-weight:700}.navbar__link:hover{color:#f50707;transition:all .3s ease-in-out}',
        '',
      ]),
        (t.exports = r);
    },
    254: function (t, e, n) {
      'use strict';
      n.r(e),
        n.d(e, 'state', function () {
          return o;
        }),
        n.d(e, 'getters', function () {
          return l;
        }),
        n.d(e, 'mutations', function () {
          return c;
        }),
        n.d(e, 'actions', function () {
          return _;
        });
      var r = n(7),
        o =
          (n(41),
          n(34),
          n(76),
          function () {
            return {
              users: [],
              name: 'test',
              auth: !1,
              movies: [],
              searchedMovies: [],
              searchInput: '',
              loadingState: !1,
              singlMovie: {},
            };
          }),
        l = {
          name: function (t) {
            return t.name;
          },
          auth: function (t) {
            return t.auth;
          },
          movies: function (t) {
            return t.movies;
          },
          searchMovies: function (t) {
            return t.searchedMovies;
          },
          inputSearchMovie: function (t) {
            return t.searchInput;
          },
          isLoading: function (t) {
            return t.loadingState;
          },
          movie: function (t) {
            return t.singlMovie;
          },
        },
        c = {
          CHANGE_NAME: function (t, e) {
            return (t.name = e);
          },
          LOGGED: function (t, e) {
            return (t.auth = e);
          },
          UPDATEMOVIES: function (t, e) {
            return (t.movies = e);
          },
          UPDATASEARCHEDMOVIES: function (t, e) {
            return (t.searchedMovies = e);
          },
          UODATEINPUTFIELD: function (t, e) {
            return (t.searchInput = e);
          },
          CLEARINPUT: function (t, e) {
            return (t.searchInput = e);
          },
          SETLOADED: function (t, e) {
            return (t.loadingState = e);
          },
          UPDATESINGLEMOVIE: function (t, e) {
            return (t.singlMovie = e);
          },
        },
        _ = {
          fetchMovies: function (t) {
            var e = this;
            return Object(r.a)(
              regeneratorRuntime.mark(function n() {
                var r, o;
                return regeneratorRuntime.wrap(
                  function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (
                            (r = t.commit),
                            (n.prev = 1),
                            r('SETLOADED', !0),
                            (n.next = 5),
                            e.$axios
                              .$get(
                                'movie/now_playing?api_key=84a698300a40f7d90c5505eebd96b53b&language=en-US&page=1'
                              )
                              .then(function (data) {
                                return data.results;
                              })
                          );
                        case 5:
                          return (
                            (o = n.sent),
                            r('UPDATEMOVIES', o),
                            r('SETLOADED', !1),
                            n.abrupt('return', o)
                          );
                        case 11:
                          (n.prev = 11),
                            (n.t0 = n.catch(1)),
                            console.error('error fetching movies', n.t0);
                        case 14:
                        case 'end':
                          return n.stop();
                      }
                  },
                  n,
                  null,
                  [[1, 11]]
                );
              })
            )();
          },
          setLog: function (t) {
            (0, t.commit)('LOGGED', !0);
          },
          fetctSearchedMovies: function (t, input) {
            var e = this;
            return Object(r.a)(
              regeneratorRuntime.mark(function n() {
                var r, o;
                return regeneratorRuntime.wrap(
                  function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (
                            (r = t.commit),
                            (n.prev = 1),
                            r('SETLOADED', !0),
                            (n.next = 5),
                            e.$axios
                              .$get(
                                'search/movie?api_key=84a698300a40f7d90c5505eebd96b53b&language=en-US&page=1&query='.concat(
                                  input
                                )
                              )
                              .then(function (data) {
                                return data.results;
                              })
                          );
                        case 5:
                          return (
                            (o = n.sent),
                            r('UODATEINPUTFIELD', input),
                            r('UPDATASEARCHEDMOVIES', o),
                            (function () {
                              return setTimeout(function () {
                                r('SETLOADED', !1);
                              }, 1e3);
                            })(),
                            n.abrupt('return', o)
                          );
                        case 13:
                          (n.prev = 13),
                            (n.t0 = n.catch(1)),
                            console.error(
                              'error fetching searched movies',
                              n.t0
                            );
                        case 16:
                        case 'end':
                          return n.stop();
                      }
                  },
                  n,
                  null,
                  [[1, 13]]
                );
              })
            )();
          },
          fetchSingleMovieById: function (t, e) {
            var n = this;
            return Object(r.a)(
              regeneratorRuntime.mark(function r() {
                var o, l;
                return regeneratorRuntime.wrap(
                  function (r) {
                    for (;;)
                      switch ((r.prev = r.next)) {
                        case 0:
                          return (
                            (o = t.commit),
                            (r.prev = 1),
                            o('SETLOADED', !0),
                            (r.next = 5),
                            n.$axios
                              .$get(
                                'movie/'.concat(
                                  e,
                                  '?api_key=84a698300a40f7d90c5505eebd96b53b&language=en-US'
                                )
                              )
                              .then(function (data) {
                                return data;
                              })
                          );
                        case 5:
                          (l = r.sent),
                            o('UPDATESINGLEMOVIE', l),
                            (function () {
                              return setTimeout(function () {
                                o('SETLOADED', !1);
                              }, 1e3);
                            })(),
                            (r.next = 14);
                          break;
                        case 11:
                          (r.prev = 11),
                            (r.t0 = r.catch(1)),
                            console.error("cant' load movie by id", r.t0);
                        case 14:
                        case 'end':
                          return r.stop();
                      }
                  },
                  r,
                  null,
                  [[1, 11]]
                );
              })
            )();
          },
        };
    },
    264: function (t, e) {},
    294: function (t, e, n) {
      'use strict';
      n(189);
    },
    295: function (t, e, n) {
      var r = n(29)(!1);
      r.push([t.i, '.teaser{width:100%;text-align:center;margin:30px 0}', '']),
        (t.exports = r);
    },
    296: function (t, e, n) {
      'use strict';
      n(190);
    },
    297: function (t, e, n) {
      var r = n(29)(!1);
      r.push([
        t.i,
        '.util__flex-eq{text-align:center;padding:30px 10px 100px}.feature__icon{max-width:80px}',
        '',
      ]),
        (t.exports = r);
    },
    298: function (t, e, n) {
      'use strict';
      n(191);
    },
    299: function (t, e, n) {
      var r = n(29)(!1);
      r.push([t.i, '.slide img{width:100%}', '']), (t.exports = r);
    },
    300: function (t, e, n) {
      'use strict';
      n.r(e);
      var r = n(0).a.extend({ name: 'Navbar' }),
        o = (n(248), n(3)),
        component = Object(o.a)(
          r,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n('header', [
              n('div', { staticClass: 'wrapper container' }, [
                n('nav', { staticClass: 'navbar' }, [
                  n('ul', { staticClass: 'navbar__list' }, [
                    n(
                      'li',
                      { staticClass: 'navbar__item' },
                      [
                        n(
                          'NuxtLink',
                          {
                            staticClass: 'navbar__link',
                            attrs: { to: { name: 'register' } },
                          },
                          [t._v('Register')]
                        ),
                      ],
                      1
                    ),
                    t._v(' '),
                    n(
                      'li',
                      { staticClass: 'navbar__item' },
                      [
                        n(
                          'NuxtLink',
                          {
                            staticClass: 'navbar__link',
                            attrs: { to: { name: 'login' } },
                          },
                          [t._v('Log In')]
                        ),
                      ],
                      1
                    ),
                  ]),
                ]),
              ]),
            ]);
          },
          [],
          !1,
          null,
          '6da3e4d7',
          null
        );
      e.default = component.exports;
    },
    301: function (t, e, n) {
      'use strict';
      n.r(e);
      var r = n(0).a.extend({ name: 'Navbar' }),
        o = (n(250), n(3)),
        component = Object(o.a)(
          r,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n('header', [
              n('div', { staticClass: 'wrapper container' }, [
                n('nav', { staticClass: 'navbar' }, [
                  n('ul', { staticClass: 'navbar__list' }, [
                    n(
                      'li',
                      { staticClass: 'navbar__item' },
                      [
                        n(
                          'NuxtLink',
                          {
                            staticClass: 'navbar__link',
                            attrs: { to: { name: 'index' } },
                          },
                          [t._v('Home')]
                        ),
                      ],
                      1
                    ),
                    t._v(' '),
                    n(
                      'li',
                      { staticClass: 'navbar__item' },
                      [
                        n(
                          'NuxtLink',
                          {
                            staticClass: 'navbar__link',
                            attrs: { to: { name: 'posts' } },
                          },
                          [t._v('All posts')]
                        ),
                      ],
                      1
                    ),
                    t._v(' '),
                    n(
                      'li',
                      { staticClass: 'navbar__item' },
                      [
                        n(
                          'NuxtLink',
                          {
                            staticClass: 'navbar__link',
                            attrs: { to: { name: 'about' } },
                          },
                          [t._v('About')]
                        ),
                      ],
                      1
                    ),
                    t._v(' '),
                    n(
                      'li',
                      { staticClass: 'navbar__item' },
                      [
                        n(
                          'NuxtLink',
                          {
                            staticClass: 'navbar__link',
                            attrs: { to: { name: 'register' } },
                          },
                          [t._v('Register')]
                        ),
                      ],
                      1
                    ),
                    t._v(' '),
                    n(
                      'li',
                      { staticClass: 'navbar__item' },
                      [
                        n(
                          'NuxtLink',
                          {
                            staticClass: 'navbar__link navbar__link__outline',
                            attrs: { to: { name: 'login' }, tag: 'button' },
                          },
                          [t._v('Log In')]
                        ),
                      ],
                      1
                    ),
                  ]),
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
      e.default = component.exports;
    },
  },
  [[203, 14, 1, 15]],
]);
