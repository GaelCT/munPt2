// Register the service worker for PWA install support
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
        navigator.serviceWorker.register('/~sec/mun/sw.js')
            .then(function (reg) {
                console.log('Service worker registered:', reg.scope);
            })
            .catch(function (err) {
                console.error('Service worker registration failed:', err);
            });
    });
}