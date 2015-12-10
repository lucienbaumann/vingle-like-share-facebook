import { extend } from 'flarum/extend';
import app from 'flarum/app';
import DiscussionPage from 'flarum/components/DiscussionPage';


app.initializers.add('vingle-like-share-facebook', function() {

  extend(DiscussionPage.prototype, 'sidebarItems', function(items) {
    items.add('like-share', <div class="fb-like" data-share="true" data-layout="button_count"></div>,5);
  });
  
});
