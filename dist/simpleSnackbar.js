var simpleSnackbar = (function () {
  'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  /*
   * simpleSnackbar.js v1.0.0
   * https://github.com/tomhrtly/simpleSnackbar.js
   *
   * Copyright 2019 Tom Hartley
   * Released under the MIT license
   *
   * Icons provided by Font Awesome: https://fontawesome.com
   */
  var simpleSnackbar =
  /*#__PURE__*/
  function () {
    function simpleSnackbar(message, options) {
      _classCallCheck(this, simpleSnackbar);

      this.container = '';
      this.customEvents = {
        disposed: new CustomEvent('disposed'),
        hide: new CustomEvent('hide'),
        hidden: new CustomEvent('hidden'),
        show: new CustomEvent('show'),
        shown: new CustomEvent('shown')
      };
      this.defaults = {
        autohide: true,
        close: true,
        icon: true,
        icons: {
          success: '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check-circle" class="svg-inline--fa fa-check-circle fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path></svg>',
          info: '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="info-circle" class="svg-inline--fa fa-info-circle fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"></path></svg>',
          warning: '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="exclamation-circle" class="svg-inline--fa fa-exclamation-circle fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"></path></svg>',
          danger: '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times-circle" class="svg-inline--fa fa-times-circle fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"></path></svg>'
        },
        transitionSpeed: 250,
        type: 'default'
      };
      this.element = '';
      this.id = Math.floor(Math.random() * 1000000);
      this.message = message;
      this.options = simpleSnackbar.extend(this.defaults, options);
      this.timer = null;

      if (!document.querySelector('.ss-snackbars')) {
        var snackbars = document.createElement('div');
        snackbars.classList.add('ss-snackbars');
        snackbars.setAttribute('aria-live', 'polite');
        snackbars.setAttribute('aria-atomic', 'true');
        document.querySelector('body').append(snackbars);
        this.container = snackbars;
      } else {
        this.container = document.querySelector('.ss-snackbars');
      }

      this.init();
    }

    _createClass(simpleSnackbar, [{
      key: "close",
      value: function close() {
        if (this.options.close) {
          var close = document.createElement('button');
          close.classList.add('ss-close');
          close.innerHTML = '<span class="ss-icon"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times" class="svg-inline--fa fa-times fa-w-11" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512"><path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path></svg></span>';
          this.element.append(close);
        }
      }
    }, {
      key: "dispose",
      value: function dispose() {
        this.element.parentNode.removeChild(this.element);
        this.element.dispatchEvent(this.customEvents.disposed);
      }
    }, {
      key: "events",
      value: function events() {
        var _this = this;

        var pause = false;
        document.addEventListener('visibilitychange', function () {
          pause = document.visibilityState !== 'visible';
        });
        this.element.addEventListener('mouseenter', function () {
          pause = true;
        });
        this.element.addEventListener('mouseleave', function () {
          pause = false;
        });
        this.element.addEventListener('focusin', function () {
          pause = true;
        });
        this.element.addEventListener('focusout', function () {
          pause = false;
        });

        if (this.options.close) {
          this.element.querySelector('.ss-close').addEventListener('click', function () {
            _this.hide();
          });
        }

        if (this.options.autohide) {
          if (this.timer) {
            clearInterval(this.timer);
          }

          this.timer = setInterval(function () {
            if (!pause) {
              _this.hide();
            }
          }, 5000);
        }

        this.element.onfocus = function () {
          if (document.activeElement === _this.element) {
            document.onkeyup = function (e) {
              if (e.key === 'Escape') {
                _this.hide();
              }
            };
          }
        };

        this.element.onblur = function () {
          document.onkeyup = function () {};
        };

        this.element.addEventListener('show', function () {
          if (_this.container.children.length) {
            _this.container.classList.add('ss-snackbars-active');
          }
        });
        this.element.addEventListener('disposed', function () {
          if (!_this.container.children.length) {
            _this.container.classList.remove('ss-snackbars-active');
          }
        });
      }
    }, {
      key: "hide",
      value: function hide() {
        var _this2 = this;

        if (this.element.classList.contains('ss-snackbar-active')) {
          this.element.classList.remove('ss-snackbar-active');
          setTimeout(function () {
            _this2.element.style.display = 'none';

            _this2.element.dispatchEvent(_this2.customEvents.hidden);

            _this2.dispose();
          }, this.options.transitionSpeed);
          this.element.dispatchEvent(this.customEvents.hide);
        }

        return this;
      }
    }, {
      key: "icon",
      value: function icon() {
        if (this.options.icon) {
          if (this.options.type !== 'default') {
            var icon = document.createElement('div');
            icon.classList.add('ss-snackbar-icon');
            icon.innerHTML = "<span class=\"ss-icon\">".concat(this.options.icons[this.options.type], "</span>");
            this.element.prepend(icon);
          }
        }
      }
    }, {
      key: "init",
      value: function init() {
        var snackbars = document.querySelector('.ss-snackbars');
        var snackbar = document.createElement('div');
        snackbar.classList.add('ss-snackbar');
        snackbar.setAttribute('tabindex', '0');
        snackbar.setAttribute('role', 'alert');
        snackbar.setAttribute('aria-live', 'assertive');
        snackbar.setAttribute('aria-atomic', 'true');
        snackbar.setAttribute('data-id', this.id.toString());
        snackbar.classList.add("ss-snackbar-".concat(this.options.type));
        snackbar.style.transition = "all ".concat(this.options.transitionSpeed, "ms ease-in-out 0s");
        snackbar.innerHTML = "<div class=\"ss-snackbar-body\">".concat(this.message, "</div>");
        this.element = snackbar;
        snackbars.prepend(snackbar);
        this.icon();
        this.close();
        this.events();
      }
    }, {
      key: "show",
      value: function show() {
        var _this3 = this;

        if (!this.element.classList.contains('ss-snackbar-active')) {
          this.element.style.display = '';
          setTimeout(function () {
            _this3.element.classList.add('ss-snackbar-active');

            setTimeout(function () {
              _this3.element.dispatchEvent(_this3.customEvents.shown);
            }, _this3.options.transitionSpeed);
          }, 100);
          this.element.dispatchEvent(this.customEvents.show);
        }

        return this;
      }
    }, {
      key: "toggle",
      value: function toggle() {
        if (this.element.classList.contains('ss-snackbar-active')) {
          this.hide();
        } else {
          this.show();
        }

        return this;
      }
    }], [{
      key: "extend",
      value: function extend(defaults, options) {
        var extended = {};

        if (defaults) {
          var keys = Object.keys(defaults);
          keys.forEach(function (value) {
            if (Object.prototype.hasOwnProperty.call(defaults, value)) {
              extended[value] = defaults[value];
            }
          });
        }

        if (options) {
          var _keys = Object.keys(options);

          _keys.forEach(function (value) {
            if (Object.prototype.hasOwnProperty.call(options, value)) {
              extended[value] = options[value];
            }
          });
        }

        return extended;
      }
    }]);

    return simpleSnackbar;
  }();

  return simpleSnackbar;

}());
//# sourceMappingURL=simpleSnackbar.js.map
