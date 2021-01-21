# Application Programming Interface

Tomas.GG has an powerful Application Programming interface (also known as API) which currently provides information such a radio listener counts and the like.
We plan to add more helpful resources in the future such as a IP address lookup tool and many more features.

## Versioning

### D5mHmsx5 - 21st of January 2021

- Added Triple Radio
- Added versioning number to all routes
- Deprecated documentation on the main route
- Removed `https://tomas.gg/api/radios`

## Radio Statistics

Tomas.GG has combined all the well-known web-radios and made one API to display all the data. We have a combined route and singular route for all radios.

### All Statistics

To view all the radios and their statistics, you need to make a `GET` request to the following route:
```
https://api.tomas.gg/controller?radio=all
```

Such route will output the following data:
```
// 20210121143505
// https://api.tomas.gg/controller?radio=all

{
  "aqua": {
    "live": {
      "name": "AutoDJ",
      "avatar": "https://cdn.itsaqua.net/logo.png"
    },
    "listeners": {
      "total": 7,
      "unique": null
    },
    "nowplaying": {
      "artist": "Just Kiddin",
      "title": "When You Say It",
      "cover": "https://cdn.itsaqua.net/ext/https%3A%2F%2Fcdns-images.dzcdn.net%2Fimages%2Fcover%2Fed665ce01129260a5203368180643e8d%2F1000x1000-000000-80-0-0.jpg"
    }
  },
  "keyfm": {
    "live": {
      "name": null,
      "avatar": "No Data"
    },
    "listeners": {
      "total": 11,
      "unique": "No Data"
    },
    "nowplaying": {
      "artist": "The Wombats",
      "title": "Kill the Director",
      "cover": "No Data"
    }
  },
  "simulatorradio": {
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
    }
  },
  "simulation": {
    "live": {
      "name": "",
      "avatar": "No Data"
    },
    "listeners": {
      "total": 1,
      "unique": 1
    },
    "nowplaying": {
      "artist": "Bruno Mars; Cardi B",
      "title": "Bruno Mars; Cardi B - Finesse (Remix; feat. Cardi B)",
      "cover": "https://simulation.stream/api/station/1/art/204e99223adccedb122610ea-1602011471.jpg"
    }
  },
  "upbeat": {
    "live": {
      "name": "Hayleigh",
      "avatar": "https://upbeatradio.net/staff/_assets/_avatarImages/avatar_3799.png?1610294965"
    },
    "listeners": {
      "total": 49,
      "unique": "No Data"
    },
    "nowplaying": {
      "artist": "The Rolling Stones",
      "title": "Paint It Black",
      "cover": "https://upbeatradio.net/staff/_assets/_avatarImages/default/default.png"
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
      "artist": "The Kid Laroi",
      "title": "SO DONE",
      "cover": "https://e-cdns-images.dzcdn.net/images/cover/7fc8cf1552789112af08d68807e43682/250x250-000000-80-0-0.jpg"
    }
  },
  "itsparadise": {
    "live": {
      "name": null,
      "avatar": "No Data"
    },
    "listeners": {
      "total": null,
      "unique": "No Data"
    },
    "nowplaying": {
      "artist": null,
      "title": null,
      "cover": null
    }
  },
  "simulatorhits": {
    "live": {
      "name": "AutoDJ",
      "avatar": "https://panel.simulatorhits.com/img/SH_Logo.jpg"
    },
    "listeners": {
      "total": 69,
      "unique": "No Data"
    },
    "nowplaying": {
      "artist": "Ritt Momney",
      "title": "Put Your Records On",
      "cover": "https://i.scdn.co/image/ab67616d0000b273d52d8eb3be188231e120dbbd"
    }
  },
  "tripleradio": {
    "live": {
      "name": "Auto DJ",
      "avatar": "No Data"
    },
    "listeners": {
      "total": 1,
      "unique": "No Data"
    },
    "nowplaying": {
      "artist": "Ed Sheeran/Chance the Rapper/PnB Rock",
      "title": "Ed Sheeran/Chance the Rapper/PnB Rock - Cross Me (feat. Chance the Rapper & PnB Rock)",
      "cover": "https://cdns-images.dzcdn.net/images/cover/53c94ac88c0ef5b16eff89d5096250b9/500x500-000000-80-0-0.jpg"
    }
  },
  "version": "<current version number>"
}
```

### Individual Radio Statistics

Below you will be able to find all the routes for individual radio statistics.

### Aqua

Aqua is an online radio created by the community for the community. [itsaqua.net](https://itsaqua.net/?utm_source=tomas.gg)

To review Aqua's statistics, please make a `GET` request to the following:
```
https://api.tomas.gg/controller?radio=aqua
```

Such route will output the following data:
```
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
```
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
```
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
```
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
```
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
```
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