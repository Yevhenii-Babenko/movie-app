(window.webpackJsonp = window.webpackJsonp || []).push([
  [8],
  {
    323: function (t, e, n) {
      var content = n(333);
      content.__esModule && (content = content.default),
        'string' == typeof content && (content = [[t.i, content, '']]),
        content.locals && (t.exports = content.locals);
      (0, n(30).default)('e810a50c', content, !0, { sourceMap: !1 });
    },
    331: function (t, e, n) {
      n(4)({ target: 'Object', stat: !0 }, { is: n(202) });
    },
    332: function (t, e, n) {
      'use strict';
      n(323);
    },
    333: function (t, e, n) {
      var o = n(29)(!1);
      o.push([t.i, '.d-flex{display:flex}', '']), (t.exports = o);
    },
    345: function (t, e, n) {
      'use strict';
      n.r(e);
      n(331);
      var o = {
          data: function () {
            return { story: { content: {} } };
          },
          mounted: function () {
            var t = this;
            this.$storybridge(function () {
              var e = new StoryblokBridge();
              e.on('input', function (e) {
                Object.is(e.story.id, t.story.id) &&
                  (t.story.content = e.story.content);
              }),
                e.on(['published', 'change'], function (e) {
                  t.$nuxt.$router.go({
                    path: t.$nuxt.$router.currentRoute,
                    force: !0,
                  });
                });
            });
          },
          asyncData: function (t) {
            return t.app.$storyapi
              .get('cdn/stories/home', { version: 'draft' })
              .then(function (t) {
                return t.data;
              })
              .catch(function (e) {
                e.response
                  ? (console.error(e.response.data),
                    t.error({
                      statusCode: e.response.status,
                      message: e.response.data,
                    }))
                  : (console.error(e),
                    t.error({
                      statusCode: 404,
                      message: 'Failed to receive content form api',
                    }));
              });
          },
        },
        r = (n(332), n(3)),
        component = Object(r.a)(
          o,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n(
              'section',
              { staticClass: 'container' },
              [
                t.story.content.component
                  ? n(t.story.content.component, {
                      key: t.story.content._uid,
                      tag: 'component',
                      attrs: { blok: t.story.content },
                    })
                  : t._e(),
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
      e.default = component.exports;
    },
  },
]);
