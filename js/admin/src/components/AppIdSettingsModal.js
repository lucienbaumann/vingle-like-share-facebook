import SettingsModal from 'flarum/components/SettingsModal';

export default class AppIdSettingsModal extends SettingsModal {
  className() {
    return 'Modal--small';
  }

  title() {
    return 'AppID Facebook Settings';
  }

  form() {
    return [
    <div className="Form-group">
    <label>App ID</label>
    <input className="FormControl" bidi={this.setting('vingle.like.share.facebook')}/>
    </div>
    ];
  }
}