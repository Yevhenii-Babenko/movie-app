(window.webpackJsonp = window.webpackJsonp || []).push([
  [12],
  {
    347: function (t, n, e) {
      'use strict';
      e.r(n);
      e(37);
      var c = {
          asyncData: function (t) {
            return t.app.$storyapi
              .get('cdn/stories', { version: 'draft', starts_with: 'blog/' })
              .then(function (t) {
                return {
                  posts: t.data.stories.map(function (t) {
                    return {
                      id: t.id,
                      content: t.content.postBody,
                      title: t.content.title,
                      img: t.content.imgArea,
                    };
                  }),
                };
              });
          },
        },
        o = e(3),
        component = Object(o.a)(
          c,
          function () {
            var t = this,
              n = t.$createElement,
              e = t._self._c || n;
            return e(
              'div',
              {
                staticClass: 'container',
                staticStyle: {
                  display: 'flex',
                  'flex-direction': 'column',
                  'justify-content': 'center',
                  'align-items': 'center',
                },
              },
              t._l(t.posts, function (n) {
                return e('div', { key: n.id }, [
                  e('h1', [t._v(t._s(n.title))]),
                  t._v(' '),
                  e('p', [t._v(t._s(n.content))]),
                  t._v(' '),
                  e('img', {
                    staticStyle: {
                      width: '400px',
                      height: '400px',
                      'object-fit': 'contain',
                    },
                    attrs: { src: n.img, alt: 'bunner' },
                  }),
                ]);
              }),
              0
            );
          },
          [],
          !1,
          null,
          null,
          null
        );
      n.default = component.exports;
    },
  },
]);
