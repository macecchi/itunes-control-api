# itunes-control-api

REST API to control playback on iTunes on OS X. Based on my fork of [local-itunes](https://github.com/macecchi/local-itunes) and Express.

## Using

Install with `npm`:

```bash
$ npm install itunes-control-api
```

Import the node module in your js file and call start with the desired port:

```javascript
var iTunesAPI = require('itunes-control-api');
iTunesAPI.start(8080);
```

## Supported controls

### /status
Returns state of the playback (playing/paused).

### /play
Plays music.

### /pause
Pauses music.

### /playpause
Toggles play/pause.

### /previous
Go to previous track or beginning of the current track.

### /next
Go to next track.
