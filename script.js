chrome.storage.local.get(function(data) {
    if (data.oref_enabled === 'enabled') {
        var interval = data.oref_interval;
        setTimeout(function() {
            window.location.reload(true);
        }, interval);
    }
});

