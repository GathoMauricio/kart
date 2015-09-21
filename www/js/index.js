var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
        playAudio('sound/latido.mp3');
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        console.log('Received Event: ' + id);
    }
};
app.initialize();
function playAudio(url) {
        // Reproduce el fichero de audio de la URL
        var my_media = new Media(url,
            // FunciÃ³n 'callback' satisfactoria
            function() {
                console.log("playAudio():Audio correcto");
            },
            // FunciÃ³n 'callback' de error 
            function(err) {
                console.log("playAudio():Audio Error: "+err);
        });

        // Reproduce el audio
        my_media.play();
    }
