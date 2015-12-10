<?php namespace Vingle\Like\Share\Facebook\Listeners;

use Flarum\Event\ConfigureClientView;
use Illuminate\Contracts\Events\Dispatcher;
use Flarum\Settings\SettingsRepositoryInterface;

class AddJavaScriptSDK
{
    /**
     * @var SettingsRepository
     */
    protected $settings;


    public function __construct(SettingsRepositoryInterface $settings) {
        $this->settings = $settings;
    }

    public function subscribe(Dispatcher $events)
    {
        $events->listen(ConfigureClientView::class, [$this, 'addAssets']);
    }

    public function addAssets(ConfigureClientView $event)
    {
        if($event->isForum()) {
            $rawJs = file_get_contents(realpath(__DIR__ . '/../../assets/js/facebook-jssdk.js'));
            $js    = str_replace("%%APP_ID%%", $this->settings->get('vingle.like.share.facebook'), $rawJs);
            $event->view->addFootString($js);
        }
    }
}