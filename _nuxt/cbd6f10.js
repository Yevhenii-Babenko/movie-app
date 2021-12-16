(window.webpackJsonp = window.webpackJsonp || []).push([
  [2],
  {
    308: function (t, e, o) {
      var content = o(317);
      content.__esModule && (content = content.default),
        'string' == typeof content && (content = [[t.i, content, '']]),
        content.locals && (t.exports = content.locals);
      (0, o(30).default)('7839b0be', content, !0, { sourceMap: !1 });
    },
    315: function (t, e, o) {
      t.exports = o.p + 'img/movieHero.cf8f334.jpg';
    },
    316: function (t, e, o) {
      'use strict';
      o(308);
    },
    317: function (t, e, o) {
      var n = o(29)(!1);
      n.push([
        t.i,
        '.hero[data-v-c72ce322]{height:25rem;position:relative}@media(min-width:46.875rem){.hero[data-v-c72ce322]{height:31.25rem}}.hero[data-v-c72ce322]:after{content:" ";position:absolute;top:0;left:0;height:100%;width:100%;background-color:rgba(0,0,0,.6)}.hero .img[data-v-c72ce322]{width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.hero .text-container[data-v-c72ce322]{z-index:99;position:absolute;top:0;margin:0;width:100%;height:100%;display:flex;flex-direction:column;justify-content:center}.hero .text-container .text[data-v-c72ce322]{padding:0 16px;width:100%;max-width:87.5rem;margin:0 auto}.hero .text-container .text__heading[data-v-c72ce322]{font-weight:600;font-size:1.125rem;text-transform:uppercase;color:#c92502;margin-bottom:8px}@media(min-width:46.875rem){.hero .text-container .text__heading[data-v-c72ce322]{font-size:1.375rem}}.hero .text-container .text__title[data-v-c72ce322]{color:#fff;font-size:4rem;font-weight:200;margin-bottom:8px}@media(min-width:46.875rem){.hero .text-container .text__title[data-v-c72ce322]{font-size:84px}}.hero .text-container .text__title--mod[data-v-c72ce322]{font-size:5.25rem;font-weight:500}.hero .text-container .button--mod[data-v-c72ce322]{font-size:1.25rem;align-self:flex-start}',
        '',
      ]),
        (t.exports = n);
    },
    328: function (t, e, o) {
      'use strict';
      o.r(e);
      var n = [
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n('section', { staticClass: 'hero' }, [
              n('img', {
                staticClass: 'img',
                attrs: { src: o(315), alt: 'bunner' },
              }),
              t._v(' '),
              n('div', { staticClass: 'text-container' }, [
                n('div', { staticClass: 'text' }, [
                  n('span', { staticClass: 'text__heading' }, [
                    t._v('Now Streaming'),
                  ]),
                  t._v(' '),
                  n('h1', { staticClass: 'text__title' }, [
                    n('span', { staticClass: 'text__title--mod' }, [
                      t._v('Now'),
                    ]),
                    t._v(' Streaming\n      '),
                  ]),
                  t._v(' '),
                  n(
                    'a',
                    {
                      staticClass: 'button button--mod',
                      attrs: { href: '#movie-grid' },
                    },
                    [t._v('View Movies')]
                  ),
                ]),
              ]),
            ]);
          },
        ],
        r = { name: 'Hero' },
        c = (o(316), o(3)),
        component = Object(c.a)(
          r,
          function () {
            var t = this,
              e = t.$createElement;
            t._self._c;
            return t._m(0);
          },
          n,
          !1,
          null,
          'c72ce322',
          null
        );
      e.default = component.exports;
    },
  },
]);
