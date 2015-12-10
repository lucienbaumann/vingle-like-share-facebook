<?php namespace Vingle\Like\Share\Facebook;

use Illuminate\Contracts\Events\Dispatcher;

return function(Dispatcher $events) {
    $events->subscribe(Listeners\AddClientAssets::class);
    $events->subscribe(Listeners\AddJavaScriptSDK::class);
};