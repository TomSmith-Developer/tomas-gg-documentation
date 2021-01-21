# Triple Radio

Here you can find all the necessary documentation for Triple Radio's services.

## API (v1)

The Triple Radio API can be accessed here: [api.tripleradio.net](https://api.tripleradio.net)

`GET` **/stats** - Displays the current Triple Radio statistics.
Returns:
```
{
  "status": 200,
  "response": {
    "song": {
      "title": "Pop Smoke - What You Know Bout Love",
      "artist": "Pop Smoke",
      "cover": "https://cdns-images.dzcdn.net/images/cover/4fc3fd412387fd717ad5360cfd3e4605/500x500-000000-80-0-0.jpg"
    },
    "live": {
      "name": "Auto DJ",
      "autoDJ": true
    },
    "listeners": 1,
    "listen_url": "https://live.tripleradio.net",
    "website": "https://tripleradio.net"
  }
}
```

`GET` **/listeners** - Displays all listeners statistics.
Returns:
```
{
  "status": 200,
  "response": {
    "current": 1,
    "unique": 1,
    "total": 1
  }
}
```

`GET` **/nowplaying** - Displays the currently playing song on Triple Radio.
Returns:
```
{
  "status": 200,
  "response": {
    "title": "South of the Border (feat. Camila Cabello & Cardi B) (Andy Jarvis Remix)",
    "artist": "Ed Sheeran/Camila Cabello/Cardi B",
    "text": "Ed Sheeran/Camila Cabello/Cardi B - South of the Border (feat. Camila Cabello & Cardi B) (Andy Jarvis Remix)",
    "album": "South of the Border (feat. Camila Cabello & Cardi B) [Andy Jarvis Remix]",
    "artwork": "https://e-cdns-images.dzcdn.net/images/cover/8f1bb07bc9420d4cf4665d2b583c7321/500x500-000000-80-0-0.jpg"
  }
}
```

`GET` **/playingnext** - Displays the next song that will be played on **Auto DJ**.

**Note:** This route will only function if the DJ is **Auto DJ**, if it a live DJ a `405 - Method not allowed` error will occur.

Returns:
```
{
  "status": 200,
  "response": {
    "title": "Hell and High Water (feat. Alessia Cara)",
    "artist": "Major Lazer/Alessia Cara",
    "text": "Major Lazer/Alessia Cara - Hell and High Water (feat. Alessia Cara)",
    "album": "Music is the Weapon",
    "artwork": "https://e-cdns-images.dzcdn.net/images/cover/1abb736dab8c1499e32f6078c0b58aa3/500x500-000000-80-0-0.jpg"
  }
}
```