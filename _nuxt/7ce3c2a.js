(window.webpackJsonp = window.webpackJsonp || []).push([
  [10, 5],
  {
    311: function (t, o, e) {
      'use strict';
      e.r(o);
      var n = e(0).a.extend({ name: 'Notification', props: ['message'] }),
        r = e(3),
        component = Object(r.a)(
          n,
          function () {
            var t = this,
              o = t.$createElement;
            return (t._self._c || o)('div', { staticClass: 'notification' }, [
              t._v('\n  ' + t._s(t.message) + '\n'),
            ]);
          },
          [],
          !1,
          null,
          null,
          null
        );
      o.default = component.exports;
    },
    324: function (t, o, e) {
      var content = e(335);
      content.__esModule && (content = content.default),
        'string' == typeof content && (content = [[t.i, content, '']]),
        content.locals && (t.exports = content.locals);
      (0, e(30).default)('1a91a790', content, !0, { sourceMap: !1 });
    },
    334: function (t, o, e) {
      'use strict';
      e(324);
    },
    335: function (t, o, e) {
      var n = e(29)(!1);
      n.push([
        t.i,
        '.wrapper[data-v-046e4d67]{padding-top:5rem;padding-bottom:5rem}.login[data-v-046e4d67]{margin:auto;text-align:center;width:30%;margin:8% auto;display:flex;flex-direction:column;justify-content:center;flex-wrap:wrap;align-items:center;color:#fff}.login__title[data-v-046e4d67]{font-weight:700;margin-bottom:10%;font-size:2rem}.login-form[data-v-046e4d67]{width:100%}.login-form__input[data-v-046e4d67]{padding:2%;width:100%;margin:2% 0;font-size:1rem}.login-form__label[data-v-046e4d67]{font-weight:700}.login-form__control[data-v-046e4d67]:nth-of-type(3){margin:5% 0}.login-form__button[data-v-046e4d67]{width:100%;display:inline-block;text-decoration:none;font-weight:700;color:inherit;padding:8px 16px;background-color:#c92502;border:none;color:#fff;border-radius:4px;cursor:pointer;transition:all .3s ease}.login-form__button[data-v-046e4d67]:hover{background-color:#891b02}.question-box[data-v-046e4d67]{margin:5% auto}.question-box__link[data-v-046e4d67]{text-decoration:none;color:#c92502}',
        '',
      ]),
        (t.exports = n);
    },
    346: function (t, o, e) {
      'use strict';
      e.r(o);
      var n = e(0),
        r = e(64),
        l = n.a.extend({
          methods: {
            login: function () {
              this.$store.dispatch('setLog'), this.$router.push('/');
            },
          },
          computed: Object(r.c)(['auth']),
        }),
        c = (e(334), e(3)),
        component = Object(c.a)(
          l,
          function () {
            var t = this,
              o = t.$createElement,
              e = t._self._c || o;
            return e('section', { staticClass: 'wrapper' }, [
              e('div', { staticClass: 'container' }, [
                e(
                  'div',
                  { staticClass: 'login' },
                  [
                    e('h2', { staticClass: 'login__title' }, [
                      t._v('Welcome back!'),
                    ]),
                    t._v(' '),
                    t.error
                      ? e('Notification', { attrs: { message: t.error } })
                      : t._e(),
                    t._v(' '),
                    e(
                      'form',
                      {
                        staticClass: 'login-form',
                        attrs: { method: 'post' },
                        on: {
                          submit: function (o) {
                            return (
                              o.preventDefault(), t.login.apply(null, arguments)
                            );
                          },
                        },
                      },
                      [
                        e('div', { staticClass: 'login-form__field' }, [
                          e('label', { staticClass: 'login-form__label' }, [
                            t._v('Email'),
                          ]),
                          t._v(' '),
                          e('div', { staticClass: 'login-form__control' }, [
                            e('input', {
                              directives: [
                                {
                                  name: 'model',
                                  rawName: 'v-model',
                                  value: t.email,
                                  expression: 'email',
                                },
                              ],
                              staticClass: 'login-form__input',
                              attrs: { type: 'email', name: 'email' },
                              domProps: { value: t.email },
                              on: {
                                input: function (o) {
                                  o.target.composing ||
                                    (t.email = o.target.value);
                                },
                              },
                            }),
                          ]),
                        ]),
                        t._v(' '),
                        e('div', { staticClass: 'login-form__field' }, [
                          e('label', { staticClass: 'login-form__label' }, [
                            t._v('Password'),
                          ]),
                          t._v(' '),
                          e('div', { staticClass: 'login-form__control' }, [
                            e('input', {
                              directives: [
                                {
                                  name: 'model',
                                  rawName: 'v-model',
                                  value: t.password,
                                  expression: 'password',
                                },
                              ],
                              staticClass: 'login-form__input',
                              attrs: { type: 'password', name: 'password' },
                              domProps: { value: t.password },
                              on: {
                                input: function (o) {
                                  o.target.composing ||
                                    (t.password = o.target.value);
                                },
                              },
                            }),
                          ]),
                        ]),
                        t._v(' '),
                        t._m(0),
                      ]
                    ),
                    t._v(' '),
                    e('div', { staticClass: 'question-box' }, [
                      e(
                        'p',
                        [
                          t._v(
                            "\n          Don't have an account?\n          "
                          ),
                          e(
                            'NuxtLink',
                            {
                              staticClass: 'question-box__link',
                              attrs: { to: { name: 'register' } },
                            },
                            [t._v('Register')]
                          ),
                        ],
                        1
                      ),
                    ]),
                  ],
                  1
                ),
              ]),
            ]);
          },
          [
            function () {
              var t = this,
                o = t.$createElement,
                e = t._self._c || o;
              return e('div', { staticClass: 'login-form__control' }, [
                e(
                  'button',
                  {
                    staticClass: 'login-form__button',
                    attrs: { type: 'submit' },
                  },
                  [t._v('Log In')]
                ),
              ]);
            },
          ],
          !1,
          null,
          '046e4d67',
          null
        );
      o.default = component.exports;
      installComponents(component, { Notification: e(311).default });
    },
  },
]);
