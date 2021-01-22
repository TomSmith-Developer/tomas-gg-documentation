# Application Programming Interface

Tomas.GG has an powerful Application Programming interface (also known as API) which currently provides information such a radio listener counts and the like.
We plan to add more helpful resources in the future such as a IP address lookup tool and many more features.

## Versioning

### D5mHmsx5 - 21st of January 2021

- Added Triple Radio
- Added versioning number to all routes
- Deprecated documentation on the main route
- Removed `https://tomas.gg/api/radio`

### uWjFSW8x - 22nd of January 2021

- Removed Paradise Radio
- Added Harmony Radio
- Added NowHits
- Added TruckersFM

## Radio Statistics

Tomas.GG has combined all the well-known web-radios and made one API to display all the data. We have a combined route and singular route for all radios.

Below you can find a list of the current radios on the API:
- Aqua
- KeyFM
- Simulator Radio
- Simulation
- UpBeat
- Livida
- Simulator Hits
- Triple Radio
- Harmony Radio
- Now Hits
- Truckers

::: tip
If our API is returning `null` or simply not loading, report it to **Tom.#7945** on Discord!
:::

### All Statistics

To view all the radios and their statistics, you need to make a `GET` request to the following route:
```
https://api.tomas.gg/controller?radio=all
```

Such route will output the following data:
```json
{
  "aqua": {
    "live": {
      "name": "AutoDJ",
      "avatar": "https://cdn.itsaqua.net/logo.png"
    },
    "listeners": {
      "total": 3,
      "unique": null
    },
    "nowplaying": {
      "artist": "Breathe Carolina; Dropgun; Reigns",
      "title": "Promises (feat. Reigns)",
      "cover": "https://cdn.itsaqua.net/ext/https%3A%2F%2Fcdns-images.dzcdn.net%2Fimages%2Fcover%2Fee891eee78b18687525bea891ac740ba%2F1000x1000-000000-80-0-0.jpg"
    }
  },
  "keyfm": {
    "live": {
      "name": null,
      "avatar": "No Data"
    },
    "listeners": {
      "total": 9,
      "unique": "No Data"
    },
    "nowplaying": {
      "artist": "Sia",
      "title": "Snowman",
      "cover": "No Data"
    }
  },
  "simulatorradio": {
    "live": {
      "name": "Joe",
      "avatar": "No Data"
    },
    "listeners": {
      "total": 0,
      "unique": "No Data"
    },
    "nowplaying": {
      "artist": "Avicii",
      "title": "The Days",
      "cover": "https://i.scdn.co/image/ab67616d0000b2730ae4f4d42e4a09f3a29f64ad"
    }
  },
  "simulation": {
    "live": {
      "name": "",
      "avatar": "No Data"
    },
    "listeners": {
      "total": 0,
      "unique": 0
    },
    "nowplaying": {
      "artist": "Don Diablo; Andy Grammer",
      "title": "Don Diablo; Andy Grammer - Thousand Faces",
      "cover": "https://simulation.stream/api/station/1/art/56c15779296eaad425e45607-1602014175.jpg"
    }
  },
  "upbeat": {
    "live": {
      "name": "Unforgiveable",
      "avatar": "https://upbeatradio.net/staff/_assets/_avatarImages/avatar_3815.png?1610033042"
    },
    "listeners": {
      "total": 89,
      "unique": "No Data"
    },
    "nowplaying": {
      "artist": "Katy Perry",
      "title": "Dark Horse (Feat. Juicy J)",
      "cover": "https://i.scdn.co/image/ab67616d00001e02ba1f67115a224849c97bfc06"
    }
  },
  "livida": {
    "live": {
      "name": "AutoDJ",
      "avatar": "https://s3.livida.net/images/logo/CrownIcon.png"
    },
    "listeners": {
      "total": 0,
      "unique": "No Data"
    },
    "nowplaying": {
      "artist": "Bad Bunny",
      "title": "LA NOCHE DE ANOCHE",
      "cover": "https://cdns-images.dzcdn.net/images/cover/6ea80078f0df08737a7471f3c4cf2afa/250x250-000000-80-0-0.jpg"
    }
  },
  "harmony": {
    "live": {
      "name": "AutoDJ",
      "avatar": "https://harmony.sirv.com/default.png"
    },
    "listeners": {
      "total": 2,
      "unique": "No Data"
    },
    "nowplaying": {
      "artist": "The Chainsmokers/Louane",
      "title": "It Won't Kill Ya (feat. Louane)",
      "cover": "https://cdns-images.dzcdn.net/images/cover/d4451405fea03536f6788fa806045141/1000x1000-000000-80-0-0.jpg"
    }
  },
  "simulatorhits": {
    "live": {
      "name": "AutoDJ",
      "avatar": "https://panel.simulatorhits.com/img/SH_Logo.jpg"
    },
    "listeners": {
      "total": 117,
      "unique": "No Data"
    },
    "nowplaying": {
      "artist": "Drake",
      "title": "Laugh Now Cry Later (feat. Lil Durk)",
      "cover": "https://i.scdn.co/image/ab67616d0000b27352c75ed37313b889447011ef"
    }
  },
  "tripleradio": {
    "live": {
      "name": "Auto DJ",
      "avatar": "No Data"
    },
    "listeners": {
      "total": "0",
      "unique": "No Data"
    },
    "nowplaying": {
      "artist": "The Killers",
      "title": "The Killers - Mr. Brightside",
      "cover": "https://cdns-images.dzcdn.net/images/cover/bc4c351b5380ad64b1dbf631185714e3/500x500-000000-80-0-0.jpg"
    }
  },
  "nowhits": {
    "live": {
      "name": "AutoDJ",
      "avatar": "https://nowhits.co.uk/assets/imgs/nowhits.png"
    },
    "listeners": {
      "total": 5,
      "unique": "No Data"
    },
    "nowplaying": {
      "artist": "Olly Murs; Flo Rida",
      "title": "Troublemaker",
      "cover": "https://e-cdns-images.dzcdn.net/images/cover/2ac5f68932496e902ae25efbe49ebdca/1000x1000-000000-80-0-0.jpg"
    }
  },
  "truckers": {
    "live": {
      "name": "",
      "avatar": "No Data"
    },
    "listeners": {
      "total": 753,
      "unique": 745
    },
    "nowplaying": {
      "artist": "Karen Harding, Shift K3Y",
      "title": "The Morning",
      "cover": "https://az.truckers.fm/api/station/1/art/bb35e05b16e41f297e7f02ab-1611277505.jpg"
    }
  },
  "version": "uWjFSW8x"
}
```


### Aqua

Aqua is an online radio created by the community for the community. [itsaqua.net](https://itsaqua.net/?utm_source=tomas.gg)

To review Aqua's statistics, please make a `GET` request to the following:
```
https://api.tomas.gg/controller?radio=aqua
```

Such route will output the following data:
```json
{
  "live": {
    "name": "AutoDJ",
    "avatar": "https://cdn.itsaqua.net/logo.png"
  },
  "listeners": {
    "total": 6,
    "unique": null
  },
  "nowplaying": {
    "artist": "Adelphi Music Factory",
    "title": "My People (Love Can Live Forever)",
    "cover": "https://cdn.itsaqua.net/ext/https%3A%2F%2Fcdns-images.dzcdn.net%2Fimages%2Fcover%2Fe33d14f684d675d713759a6b34a27eaa%2F1000x1000-000000-80-0-0.jpg"
  },
  "version": "<current version number>"
}
```

### KeyFM

KeyFM.net is a non-profit radio community providing music around the globe, all day - every day. [keyfm.net](https://keyfm.net/?utm_source=tomas.gg)

To review KeyFM's statistics, please make a `GET` request to the following:
```
https://api.tomas.gg/controller?radio=keyfm
```

Such route will output the following data:
```json
{
  "live": {
  "name": null,
  "avatar": "No Data"
  },
  "listeners": {
    "total": 15,
    "unique": "No Data"
  },
  "nowplaying": {
    "artist": "Justin Bieber",
    "title": "Yummy",
    "cover": "No Data"
  },
  "version": "<current version number>"
}
```

### Simulator Radio

Simulator Radio is a community based radio station for the Simulation Community. [simulatorradio.com](https://simulatorradio.com/?utm_source=tomas.gg)

To review Simulator Radio's statistics, please make a `GET` request to the following:
```
https://api.tomas.gg/controller?radio=simulatorradio
```

Such route will output the following data:
```json
{
  "live": {
    "name": "RICHIΞ",
    "avatar": "No Data"
  },
  "listeners": {
    "total": 0,
    "unique": "No Data"
  },
  "nowplaying": {
    "artist": "Duke Dumont",
    "title": "I Got U",
    "cover": "https://i.scdn.co/image/ab67616d00001e02e197a220029b6b6945ae0426"
  },
  "version": "<current version number>"
}
```

### Simulation

Simulation.FM is a online radio station that not just on 1 game we base on all other games and we was founded on the 2020 on Steven H. Birthday. [simulation.fm](https://simulation.fm/?utm_source=tomas.gg)

To review Simulation's statistics, please make a `GET` request to the following:
```
https://api.tomas.gg/controller?radio=simulation
```

Such route will output the following data:
```json
{
  "live": {
    "name": "",
    "avatar": "No Data"
  },
  "listeners": {
    "total": 1,
    "unique": 1
  },
  "nowplaying": {
    "artist": "Sigala; Ella eyre",
    "title": "Sigala; Ella eyre - Came Here for Love",
    "cover": "https://simulation.stream/api/station/1/art/cce55b5b2d8edf5f7071928a-1602011334.jpg"
  },
  "version": "<current version number>"
}
```

### UpBeat

UpBeat is a community powered online radio, providing 24/7 ad-free radio entertainment. [upbeatradio.net](https://upbeatradio.net/?utm_source=tomas.gg)

To review UpBeats's statistics, please make a `GET` request to the following:
```
https://api.tomas.gg/controller?radio=upbeat
```

Such route will output the following data:
```json
{
  "live": {
    "name": "Hayleigh",
    "avatar": "https://upbeatradio.net/staff/_assets/_avatarImages/avatar_3799.png?1610294965"
  },
  "listeners": {
    "total": 54,
    "unique": "No Data"
  },
  "nowplaying": {
    "artist": "The Vapors",
    "title": "Turning Japanese",
    "cover": "https://i.scdn.co/image/ab67616d00001e0260e594fd9a41134979feab3d"
  },
  "version": "<current version number>"
}
```

### Livida

The online community for gamers. [livida.net](https://livida.net/?utm_source=tomas.gg)

To review Livida's statistics, please make a `GET` request to the following:
```
https://api.tomas.gg/controller?radio=livida
```

Such route will output the following data:
```json
{
  "live": {
    "name": "AutoDJ",
    "avatar": "https://s3.livida.net/images/logo/CrownIcon.png"
  },
  "listeners": {
    "total": 0,
    "unique": "No Data"
  },
  "nowplaying": {
    "artist": "Harry Styles",
    "title": "Golden",
    "cover": "https://e-cdns-images.dzcdn.net/images/cover/346c524c15ecccbc4a8a78e8972a352c/250x250-000000-80-0-0.jpg"
  },
  "version": "<current version number>"
}
```

### Simulator Hits

Simulator Hits, your number one hit Simulation Radio Station. [simulatorhits.com](https://simulatorhits.com/?utm_source=tomas.gg)

To review Simulator Hits' statistics, please make a `GET` request to the following:
```
https://api.tomas.gg/controller?radio=simulatorhits
```

Such route will output the following data:
```json
{
  "live": {
    "name": "AutoDJ",
    "avatar": "https://panel.simulatorhits.com/img/SH_Logo.jpg"
  },
  "listeners": {
    "total": 113,
    "unique": "No Data"
  },
  "nowplaying": {
    "artist": "Ava Max",
    "title": "Kings & Queens",
    "cover": "https://i.scdn.co/image/ab67616d0000b2739a95e89d24214b94de36ccf7"
  },
  "version": "<current version number>"
}
```

### Triple Radio

Triple Radio is a small online radio station to power your music needs whenever they are required. [tripleradio.net](https://tripleradio.net/?utm_source=tomas.gg)

To review Triple Radio's statistics, please make a `GET` request to the following:
```
https://api.tomas.gg/controller?radio=tripleradio
```

Such route will output the following data:
```json
{
  "live": {
    "name": "Auto DJ",
    "avatar": "No Data"
  },
  "listeners": {
    "total": 1,
    "unique": "No Data"
  },
  "nowplaying": {
    "artist": "Lady Gaga",
    "title": "Lady Gaga - 911",
    "cover": "https://cdns-images.dzcdn.net/images/cover/81572deeede9e5f691e4b1889b828197/500x500-000000-80-0-0.jpg"
  },
  "version": "<current version number>"
}
```

### NowHits

NowHits Radio is a Community Based Internet Radio Station. We bring you all the latest Creative Entertainment. [nowhits.radio](https://nowhits.radio/?utm_source=tomas.gg)

To review NowHits' statistics, please make a `GET` request to the following:
```
https://api.tomas.gg/controller?radio=nowhits
```

Such route will output the following data:
```json
{
  "live": {
    "name": "AutoDJ",
    "avatar": "https://nowhits.co.uk/assets/imgs/nowhits.png"
  },
  "listeners": {
    "total": 5,
    "unique": "No Data"
  },
  "nowplaying": {
    "artist": "Otto Knows",
    "title": "Million Voices",
    "cover": "https://e-cdns-images.dzcdn.net/images/cover/01db4281a1368ed66b163c079d8888a5/1000x1000-000000-80-0-0.jpg"
  },
  "version": "<current version number>"
}
```

### TruckersFM

TruckersFM is the number one hit music station for Trucking Simulators. Radio made for driving, now playing online, in cab and on the go. [truckers.fm](https://truckers.fm/?utm_source=tomas.gg)

To review TruckersFM's statistics, please make a `GET` request to the following:
```
https://api.tomas.gg/controller?radio=truckers
```

Such route will output the following data:
```json
{
  "live": {
    "name": "",
    "avatar": "No Data"
  },
  "listeners": {
    "total": 768,
    "unique": 758
  },
  "nowplaying": {
    "artist": "Little Mix, Machine Gun Kelly",
    "title": "No More Sad Songs",
    "cover": "https://az.truckers.fm/api/station/1/art/eabb1b75fcc0b3ec8ca60d59-1602369350.jpg"
  },
  "version": "<current version number>"
}
```

### Harmony

You give the Harmony to music. [weareharmony.net](https://weareharmony.net/?utm_source=tomas.gg)

To review Harmony's statistics, please make a `GET` request to the following:
```
https://api.tomas.gg/controller?radio=harmony
```

Such route will output the following data:
```json
{
  "live": {
    "name": "AutoDJ",
    "avatar": "https://harmony.sirv.com/default.png"
  },
  "listeners": {
    "total": 2,
    "unique": "No Data"
  },
  "nowplaying": {
    "artist": "Martin Garrix/Justin Mylo/Dewain Whitmore",
    "title": "Burn Out",
    "cover": "https://e-cdns-images.dzcdn.net/images/cover/6213ad49270cb83a5c3c4c359a458971/1000x1000-000000-80-0-0.jpg"
  }
}
```