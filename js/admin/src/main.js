import { extend } from 'flarum/extend';
import app from 'flarum/app';

import AppIdSettingsModal from 'vingle/like/share/facebook/components/AppIdSettingsModal';

app.initializers.add('vingle-like-share-facebook', app => {
  app.extensionSettings['vingle-like-share-facebook'] = () => app.modal.show(new AppIdSettingsModal());
});
