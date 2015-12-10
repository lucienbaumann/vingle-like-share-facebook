System.register('vingle/like/share/facebook/main', ['flarum/extend', 'flarum/app', 'flarum/components/DiscussionPage'], function (_export) {
  'use strict';

  var extend, app, DiscussionPage;
  return {
    setters: [function (_flarumExtend) {
      extend = _flarumExtend.extend;
    }, function (_flarumApp) {
      app = _flarumApp['default'];
    }, function (_flarumComponentsDiscussionPage) {
      DiscussionPage = _flarumComponentsDiscussionPage['default'];
    }],
    execute: function () {

      app.initializers.add('vingle-like-share-facebook', function () {

        extend(DiscussionPage.prototype, 'sidebarItems', function (items) {
          items.add('like-share', m('div', { 'class': 'fb-like', 'data-share': 'true', 'data-layout': 'button_count' }), 5);
        });
      });
    }
  };
});