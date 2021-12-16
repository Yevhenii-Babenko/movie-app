(window.webpackJsonp = window.webpackJsonp || []).push([
  [13, 5],
  {
    311: function (e, t, r) {
      'use strict';
      r.r(t);
      var o = r(0).a.extend({ name: 'Notification', props: ['message'] }),
        n = r(3),
        component = Object(n.a)(
          o,
          function () {
            var e = this,
              t = e.$createElement;
            return (e._self._c || t)('div', { staticClass: 'notification' }, [
              e._v('\n  ' + e._s(e.message) + '\n'),
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
    325: function (e, t, r) {
      var content = r(337);
      content.__esModule && (content = content.default),
        'string' == typeof content && (content = [[e.i, content, '']]),
        content.locals && (e.exports = content.locals);
      (0, r(30).default)('424cf3c2', content, !0, { sourceMap: !1 });
    },
    336: function (e, t, r) {
      'use strict';
      r(325);
    },
    337: function (e, t, r) {
      var o = r(29)(!1);
      o.push([
        e.i,
        '.question-box[data-v-3eb05bec]{margin:5% auto}.question-box__link[data-v-3eb05bec]{text-decoration:none;color:#c92502}.register[data-v-3eb05bec]{width:30%;margin:8% auto;display:flex;flex-direction:column;justify-content:center;flex-wrap:wrap;align-items:center;color:#fff}.register__title[data-v-3eb05bec]{font-weight:700;margin-bottom:10%;font-size:2rem}.register-form[data-v-3eb05bec]{width:100%}.register-form__input[data-v-3eb05bec]{padding:2%;width:100%;margin:2% 0;font-size:16px}.register-form__label[data-v-3eb05bec]{font-weight:700}.register-form__control[data-v-3eb05bec]:nth-of-type(4){margin:5% 0}.register-form__button[data-v-3eb05bec]{width:100%;display:inline-block;text-decoration:none;font-weight:700;color:inherit;padding:.5rem 1rem;background-color:#c92502;border:none;color:#fff;border-radius:.25rem;cursor:pointer;transition:all .3s ease}.register-form__button[data-v-3eb05bec]:hover{background-color:#891b02}',
        '',
      ]),
        (e.exports = o);
    },
    348: function (e, t, r) {
      'use strict';
      r.r(t);
      var o = r(7),
        n =
          (r(41),
          r(0).a.extend({
            data: function () {
              return { username: '', email: '', password: '', error: null };
            },
            methods: {
              register: function () {
                var e = this;
                return Object(o.a)(
                  regeneratorRuntime.mark(function t() {
                    return regeneratorRuntime.wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            try {
                              e.$router.push('/');
                            } catch (e) {
                              console.log(e);
                            }
                          case 1:
                          case 'end':
                            return t.stop();
                        }
                    }, t);
                  })
                )();
              },
            },
          })),
        l = (r(336), r(3)),
        component = Object(l.a)(
          n,
          function () {
            var e = this,
              t = e.$createElement,
              r = e._self._c || t;
            return r('section', { staticClass: 'wrapper' }, [
              r('div', { staticClass: 'container' }, [
                r(
                  'div',
                  { staticClass: 'register' },
                  [
                    r('h2', { staticClass: 'register__title' }, [
                      e._v('Register!'),
                    ]),
                    e._v(' '),
                    e.error
                      ? r('Notification', { attrs: { message: e.error } })
                      : e._e(),
                    e._v(' '),
                    r(
                      'form',
                      {
                        staticClass: 'register-form',
                        attrs: { method: 'post' },
                        on: {
                          submit: function (t) {
                            return (
                              t.preventDefault(),
                              e.register.apply(null, arguments)
                            );
                          },
                        },
                      },
                      [
                        r('div', { staticClass: 'register-form__field' }, [
                          r('label', { staticClass: 'register-form__label' }, [
                            e._v('Username'),
                          ]),
                          e._v(' '),
                          r('div', { staticClass: 'register-form__control' }, [
                            r('input', {
                              directives: [
                                {
                                  name: 'model',
                                  rawName: 'v-model',
                                  value: e.username,
                                  expression: 'username',
                                },
                              ],
                              staticClass: 'register-form__input',
                              attrs: {
                                type: 'text',
                                name: 'username',
                                required: '',
                              },
                              domProps: { value: e.username },
                              on: {
                                input: function (t) {
                                  t.target.composing ||
                                    (e.username = t.target.value);
                                },
                              },
                            }),
                          ]),
                        ]),
                        e._v(' '),
                        r('div', { staticClass: 'register-form__field' }, [
                          r('label', { staticClass: 'register-form__label' }, [
                            e._v('Email'),
                          ]),
                          e._v(' '),
                          r('div', { staticClass: 'register-form__control' }, [
                            r('input', {
                              directives: [
                                {
                                  name: 'model',
                                  rawName: 'v-model',
                                  value: e.email,
                                  expression: 'email',
                                },
                              ],
                              staticClass: 'register-form__input',
                              attrs: {
                                type: 'email',
                                name: 'email',
                                required: '',
                              },
                              domProps: { value: e.email },
                              on: {
                                input: function (t) {
                                  t.target.composing ||
                                    (e.email = t.target.value);
                                },
                              },
                            }),
                          ]),
                        ]),
                        e._v(' '),
                        r('div', { staticClass: 'register-form__field' }, [
                          r('label', { staticClass: 'register-form__label' }, [
                            e._v('Password'),
                          ]),
                          e._v(' '),
                          r('div', { staticClass: 'register-form__control' }, [
                            r('input', {
                              directives: [
                                {
                                  name: 'model',
                                  rawName: 'v-model',
                                  value: e.password,
                                  expression: 'password',
                                },
                              ],
                              staticClass: 'register-form__input',
                              attrs: {
                                type: 'password',
                                name: 'password',
                                required: '',
                              },
                              domProps: { value: e.password },
                              on: {
                                input: function (t) {
                                  t.target.composing ||
                                    (e.password = t.target.value);
                                },
                              },
                            }),
                          ]),
                        ]),
                        e._v(' '),
                        e._m(0),
                      ]
                    ),
                    e._v(' '),
                    r(
                      'div',
                      { staticClass: 'question-box' },
                      [
                        e._v('\n        Already got an account?\n        '),
                        r(
                          'NuxtLink',
                          {
                            staticClass: 'question-box__link',
                            attrs: { to: { name: 'login' } },
                          },
                          [e._v('Login')]
                        ),
                      ],
                      1
                    ),
                  ],
                  1
                ),
              ]),
            ]);
          },
          [
            function () {
              var e = this,
                t = e.$createElement,
                r = e._self._c || t;
              return r('div', { staticClass: 'register-form__control' }, [
                r(
                  'button',
                  {
                    staticClass: 'register-form__button',
                    attrs: { type: 'submit' },
                  },
                  [e._v('\n            Register\n          ')]
                ),
              ]);
            },
          ],
          !1,
          null,
          '3eb05bec',
          null
        );
      t.default = component.exports;
      installComponents(component, { Notification: r(311).default });
    },
  },
]);
