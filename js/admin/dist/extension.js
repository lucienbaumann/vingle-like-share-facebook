System.register('vingle/like/share/facebook/components/AppIdSettingsModal', ['flarum/components/SettingsModal'], function (_export) {
  'use strict';

  var SettingsModal, AppIdSettingsModal;
  return {
    setters: [function (_flarumComponentsSettingsModal) {
      SettingsModal = _flarumComponentsSettingsModal['default'];
    }],
    execute: function () {
      AppIdSettingsModal = (function (_SettingsModal) {
        babelHelpers.inherits(AppIdSettingsModal, _SettingsModal);

        function AppIdSettingsModal() {
          babelHelpers.classCallCheck(this, AppIdSettingsModal);
          babelHelpers.get(Object.getPrototypeOf(AppIdSettingsModal.prototype), 'constructor', this).apply(this, arguments);
        }

        babelHelpers.createClass(AppIdSettingsModal, [{
          key: 'className',
          value: function className() {
            return 'Modal--small';
          }
        }, {
          key: 'title',
          value: function title() {
            return 'AppID Facebook Settings';
          }
        }, {
          key: 'form',
          value: function form() {
            return [m(
              'div',
              { className: 'Form-group' },
              m(
                'label',
                null,
                'App ID'
              ),
              m('input', { className: 'FormControl', bidi: this.setting('vingle.like.share.facebook') })
            )];
          }
        }]);
        return AppIdSettingsModal;
      })(SettingsModal);

      _export('default', AppIdSettingsModal);
    }
  };
});;
System.register('vingle/like/share/facebook/main', ['flarum/extend', 'flarum/app', 'vingle/like/share/facebook/components/AppIdSettingsModal'], function (_export) {
  'use strict';

  var extend, app, AppIdSettingsModal;
  return {
    setters: [function (_flarumExtend) {
      extend = _flarumExtend.extend;
    }, function (_flarumApp) {
      app = _flarumApp['default'];
    }, function (_vingleLikeShareFacebookComponentsAppIdSettingsModal) {
      AppIdSettingsModal = _vingleLikeShareFacebookComponentsAppIdSettingsModal['default'];
    }],
    execute: function () {

      app.initializers.add('vingle-like-share-facebook', function (app) {
        app.extensionSettings['vingle-like-share-facebook'] = function () {
          return app.modal.show(new AppIdSettingsModal());
        };
      });
    }
  };
});