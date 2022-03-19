import { Movie } from '../models/Movie'
import { TvShow } from '../models/TvShow'
import { LiveChannel } from '../models/LiveChannel'
import { User } from '../models/User'
import { ObjectID } from 'mongodb'

const movies = [
    {
        "genres" : [ 
            ObjectID.createFromHexString("5cd5a50b3c1a3d3798f9e857")
        ],
        "trailerManifest" : ObjectID.createFromHexString("5cd5a10e321ca61f589279f7"),
        "releaseManifest" : ObjectID.createFromHexString("5cd5a135a3d28a1f5cc1de11"),
        "title" : [ 
            {
                "language" : "en_US",
                "text" : "Rampage"
            }
        ],
        "releaseYear" : 2018,
        "rating" : "PG-14",
        "stars" : 3,
        "videoQuality" : "HD",
        "audioQuality" : "5.1",
        "synopsis" : [ 
            {
                "language" : "en_US",
                "text" : "After years of increases in the greenhouse effect, havoc is wreaked globally in the form of catastrophic hurricanes, tornadoes, tidal waves, floods and the beginning of a new Ice Age. Paleoclimatologist, Jack Hall tries to warn the world while also shepherding to safety his son, trapped in New York after the city is overwhelmed by the start of the new big freeze."
            }
        ],
        "images" : [ 
            {
                "language" : "en_US",
                "path" : "/images/1.jpg",
                "size" : "640x320",
                "format" : "THUMBNAIL"
            },
            {
                "language" : "en_US",
                "path" : "/images/1.jpg",
                "size" : "640x320",
                "format" : "POSTER"
            },
            {
                "language" : "en_US",
                "path" : "/images/logo/1.png",
                "size" : "640x320",
                "format" : "LOGO"
            }
        ]
    },
    {
        "genres" : [ 
            ObjectID.createFromHexString("5cd5a50b3c1a3d3798f9e857")
        ],
        "trailerManifest" : ObjectID.createFromHexString("5cd5a10e321ca61f589279f7"),
        "releaseManifest" : ObjectID.createFromHexString("5cd5a135a3d28a1f5cc1de11"),
        "title" : [ 
            {
                "language" : "en_US",
                "text" : "MEG"
            }
        ],
        "releaseYear" : 2018,
        "rating" : "PG-14",
        "stars" : 3,
        "videoQuality" : "HD",
        "audioQuality" : "5.1",
        "synopsis" : [ 
            {
                "language" : "en_US",
                "text" : "After years of increases in the greenhouse effect, havoc is wreaked globally in the form of catastrophic hurricanes, tornadoes, tidal waves, floods and the beginning of a new Ice Age. Paleoclimatologist, Jack Hall tries to warn the world while also shepherding to safety his son, trapped in New York after the city is overwhelmed by the start of the new big freeze."
            }
        ],
        "images" : [ 
            {
                "language" : "en_US",
                "path" : "/images/2.jpg",
                "size" : "640x320",
                "format" : "THUMBNAIL"
            },
            {
                "language" : "en_US",
                "path" : "/images/2.jpg",
                "size" : "640x320",
                "format" : "POSTER"
            },
            {
                "language" : "en_US",
                "path" : "/images/logo/2.png",
                "size" : "640x320",
                "format" : "LOGO"
            }
        ]
    },
    {
        "genres" : [ 
            ObjectID.createFromHexString("5cd5a50b3c1a3d3798f9e857")
        ],
        "trailerManifest" : ObjectID.createFromHexString("5cd5a10e321ca61f589279f7"),
        "releaseManifest" : ObjectID.createFromHexString("5cd5a135a3d28a1f5cc1de11"),
        "title" : [ 
            {
                "language" : "en_US",
                "text" : "2012"
            }
        ],
        "releaseYear" : 2018,
        "rating" : "PG-14",
        "stars" : 3,
        "videoQuality" : "HD",
        "audioQuality" : "5.1",
        "synopsis" : [ 
            {
                "language" : "en_US",
                "text" : "After years of increases in the greenhouse effect, havoc is wreaked globally in the form of catastrophic hurricanes, tornadoes, tidal waves, floods and the beginning of a new Ice Age. Paleoclimatologist, Jack Hall tries to warn the world while also shepherding to safety his son, trapped in New York after the city is overwhelmed by the start of the new big freeze."
            }
        ],
        "images" : [ 
            {
                "language" : "en_US",
                "path" : "/images/3.jpg",
                "size" : "640x320",
                "format" : "THUMBNAIL"
            },
            {
                "language" : "en_US",
                "path" : "/images/3.jpg",
                "size" : "640x320",
                "format" : "POSTER"
            },
            {
                "language" : "en_US",
                "path" : "/images/logo/3.png",
                "size" : "640x320",
                "format" : "LOGO"
            }
        ]
    },
    {
        "genres" : [ 
            ObjectID.createFromHexString("5cd5a50b3c1a3d3798f9e857")
        ],
        "trailerManifest" : ObjectID.createFromHexString("5cd5a10e321ca61f589279f7"),
        "releaseManifest" : ObjectID.createFromHexString("5cd5a135a3d28a1f5cc1de11"),
        "title" : [ 
            {
                "language" : "en_US",
                "text" : "Escape Plan 2"
            }
        ],
        "releaseYear" : 2018,
        "rating" : "PG-14",
        "stars" : 3,
        "videoQuality" : "HD",
        "audioQuality" : "5.1",
        "synopsis" : [ 
            {
                "language" : "en_US",
                "text" : "After years of increases in the greenhouse effect, havoc is wreaked globally in the form of catastrophic hurricanes, tornadoes, tidal waves, floods and the beginning of a new Ice Age. Paleoclimatologist, Jack Hall tries to warn the world while also shepherding to safety his son, trapped in New York after the city is overwhelmed by the start of the new big freeze."
            }
        ],
        "images" : [ 
            {
                "language" : "en_US",
                "path" : "/images/4.jpg",
                "size" : "640x320",
                "format" : "THUMBNAIL"
            },
            {
                "language" : "en_US",
                "path" : "/images/4.jpg",
                "size" : "640x320",
                "format" : "POSTER"
            },
            {
                "language" : "en_US",
                "path" : "/images/logo/4.png",
                "size" : "640x320",
                "format" : "LOGO"
            }
        ]
    },
    {
        "genres" : [ 
            ObjectID.createFromHexString("5cd5a50b3c1a3d3798f9e857")
        ],
        "trailerManifest" : ObjectID.createFromHexString("5cd5a10e321ca61f589279f7"),
        "releaseManifest" : ObjectID.createFromHexString("5cd5a135a3d28a1f5cc1de11"),
        "title" : [ 
            {
                "language" : "en_US",
                "text" : "Corra que a polícia vem aí"
            }
        ],
        "releaseYear" : 2018,
        "rating" : "PG-14",
        "stars" : 3,
        "videoQuality" : "HD",
        "audioQuality" : "5.1",
        "synopsis" : [ 
            {
                "language" : "en_US",
                "text" : "After years of increases in the greenhouse effect, havoc is wreaked globally in the form of catastrophic hurricanes, tornadoes, tidal waves, floods and the beginning of a new Ice Age. Paleoclimatologist, Jack Hall tries to warn the world while also shepherding to safety his son, trapped in New York after the city is overwhelmed by the start of the new big freeze."
            }
        ],
        "images" : [ 
            {
                "language" : "en_US",
                "path" : "/images/5.jpg",
                "size" : "640x320",
                "format" : "THUMBNAIL"
            },
            {
                "language" : "en_US",
                "path" : "/images/5.jpg",
                "size" : "640x320",
                "format" : "POSTER"
            },
            {
                "language" : "en_US",
                "path" : "/images/logo/5.png",
                "size" : "640x320",
                "format" : "LOGO"
            }
        ]
    },
    {
        "genres" : [ 
            ObjectID.createFromHexString("5cd5a50b3c1a3d3798f9e857")
        ],
        "trailerManifest" : ObjectID.createFromHexString("5cd5a10e321ca61f589279f7"),
        "releaseManifest" : ObjectID.createFromHexString("5cd5a135a3d28a1f5cc1de11"),
        "title" : [ 
            {
                "language" : "en_US",
                "text" : "Ghost Rider"
            }
        ],
        "releaseYear" : 2018,
        "rating" : "PG-14",
        "stars" : 3,
        "videoQuality" : "HD",
        "audioQuality" : "5.1",
        "synopsis" : [ 
            {
                "language" : "en_US",
                "text" : "After years of increases in the greenhouse effect, havoc is wreaked globally in the form of catastrophic hurricanes, tornadoes, tidal waves, floods and the beginning of a new Ice Age. Paleoclimatologist, Jack Hall tries to warn the world while also shepherding to safety his son, trapped in New York after the city is overwhelmed by the start of the new big freeze."
            }
        ],
        "images" : [ 
            {
                "language" : "en_US",
                "path" : "/images/6.jpg",
                "size" : "640x320",
                "format" : "THUMBNAIL"
            },
            {
                "language" : "en_US",
                "path" : "/images/6.jpg",
                "size" : "640x320",
                "format" : "POSTER"
            },
            {
                "language" : "en_US",
                "path" : "/images/logo/6.png",
                "size" : "640x320",
                "format" : "LOGO"
            }
        ]
    },
    {
        "genres" : [ 
            ObjectID.createFromHexString("5cd5a50b3c1a3d3798f9e857")
        ],
        "trailerManifest" : ObjectID.createFromHexString("5cd5a10e321ca61f589279f7"),
        "releaseManifest" : ObjectID.createFromHexString("5cd5a135a3d28a1f5cc1de11"),
        "title" : [ 
            {
                "language" : "en_US",
                "text" : "The Predator 2"
            }
        ],
        "releaseYear" : 2018,
        "rating" : "PG-14",
        "stars" : 3,
        "videoQuality" : "HD",
        "audioQuality" : "5.1",
        "synopsis" : [ 
            {
                "language" : "en_US",
                "text" : "After years of increases in the greenhouse effect, havoc is wreaked globally in the form of catastrophic hurricanes, tornadoes, tidal waves, floods and the beginning of a new Ice Age. Paleoclimatologist, Jack Hall tries to warn the world while also shepherding to safety his son, trapped in New York after the city is overwhelmed by the start of the new big freeze."
            }
        ],
        "images" : [ 
            {
                "language" : "en_US",
                "path" : "/images/7.jpg",
                "size" : "640x320",
                "format" : "THUMBNAIL"
            },
            {
                "language" : "en_US",
                "path" : "/images/7.jpg",
                "size" : "640x320",
                "format" : "POSTER"
            },
            {
                "language" : "en_US",
                "path" : "/images/logo/7.png",
                "size" : "640x320",
                "format" : "LOGO"
            }
        ]
    },
    {
        "genres" : [ 
            ObjectID.createFromHexString("5cd5a50b3c1a3d3798f9e857")
        ],
        "trailerManifest" : ObjectID.createFromHexString("5cd5a10e321ca61f589279f7"),
        "releaseManifest" : ObjectID.createFromHexString("5cd5a135a3d28a1f5cc1de11"),
        "title" : [ 
            {
                "language" : "en_US",
                "text" : "Ratatui"
            }
        ],
        "releaseYear" : 2018,
        "rating" : "PG-14",
        "stars" : 3,
        "videoQuality" : "HD",
        "audioQuality" : "5.1",
        "synopsis" : [ 
            {
                "language" : "en_US",
                "text" : "After years of increases in the greenhouse effect, havoc is wreaked globally in the form of catastrophic hurricanes, tornadoes, tidal waves, floods and the beginning of a new Ice Age. Paleoclimatologist, Jack Hall tries to warn the world while also shepherding to safety his son, trapped in New York after the city is overwhelmed by the start of the new big freeze."
            }
        ],
        "images" : [ 
            {
                "language" : "en_US",
                "path" : "/images/8.jpg",
                "size" : "640x320",
                "format" : "THUMBNAIL"
            },
            {
                "language" : "en_US",
                "path" : "/images/8.jpg",
                "size" : "640x320",
                "format" : "POSTER"
            },
            {
                "language" : "en_US",
                "path" : "/images/logo/8.png",
                "size" : "640x320",
                "format" : "LOGO"
            }
        ]
    },
    {
        "genres" : [ 
            ObjectID.createFromHexString("5cd5a50b3c1a3d3798f9e857")
        ],
        "trailerManifest" : ObjectID.createFromHexString("5cd5a10e321ca61f589279f7"),
        "releaseManifest" : ObjectID.createFromHexString("5cd5a135a3d28a1f5cc1de11"),
        "title" : [ 
            {
                "language" : "en_US",
                "text" : "Kung Fu Panda"
            }
        ],
        "releaseYear" : 2018,
        "rating" : "PG-14",
        "stars" : 3,
        "videoQuality" : "HD",
        "audioQuality" : "5.1",
        "synopsis" : [ 
            {
                "language" : "en_US",
                "text" : "After years of increases in the greenhouse effect, havoc is wreaked globally in the form of catastrophic hurricanes, tornadoes, tidal waves, floods and the beginning of a new Ice Age. Paleoclimatologist, Jack Hall tries to warn the world while also shepherding to safety his son, trapped in New York after the city is overwhelmed by the start of the new big freeze."
            }
        ],
        "images" : [ 
            {
                "language" : "en_US",
                "path" : "/images/7.jpg",
                "size" : "640x320",
                "format" : "THUMBNAIL"
            },
            {
                "language" : "en_US",
                "path" : "/images/7.jpg",
                "size" : "640x320",
                "format" : "POSTER"
            },
            {
                "language" : "en_US",
                "path" : "/images/logo/7.png",
                "size" : "640x320",
                "format" : "LOGO"
            }
        ]
    },
    {
        "genres" : [ 
            ObjectID.createFromHexString("5cd5a50b3c1a3d3798f9e857")
        ],
        "trailerManifest" : ObjectID.createFromHexString("5cd5a10e321ca61f589279f7"),
        "releaseManifest" : ObjectID.createFromHexString("5cd5a135a3d28a1f5cc1de11"),
        "title" : [ 
            {
                "language" : "en_US",
                "text" : "Ant Man"
            }
        ],
        "releaseYear" : 2018,
        "rating" : "PG-14",
        "stars" : 3,
        "videoQuality" : "HD",
        "audioQuality" : "5.1",
        "synopsis" : [ 
            {
                "language" : "en_US",
                "text" : "After years of increases in the greenhouse effect, havoc is wreaked globally in the form of catastrophic hurricanes, tornadoes, tidal waves, floods and the beginning of a new Ice Age. Paleoclimatologist, Jack Hall tries to warn the world while also shepherding to safety his son, trapped in New York after the city is overwhelmed by the start of the new big freeze."
            }
        ],
        "images" : [ 
            {
                "language" : "en_US",
                "path" : "/images/9.jpg",
                "size" : "640x320",
                "format" : "THUMBNAIL"
            },
            {
                "language" : "en_US",
                "path" : "/images/9.jpg",
                "size" : "640x320",
                "format" : "POSTER"
            },
            {
                "language" : "en_US",
                "path" : "/images/logo/9.png",
                "size" : "640x320",
                "format" : "LOGO"
            }
        ]
    },
    {
        "genres" : [ 
            ObjectID.createFromHexString("5cd5a50b3c1a3d3798f9e857")
        ],
        "trailerManifest" : ObjectID.createFromHexString("5cd5a10e321ca61f589279f7"),
        "releaseManifest" : ObjectID.createFromHexString("5cd5a135a3d28a1f5cc1de11"),
        "title" : [ 
            {
                "language" : "en_US",
                "text" : "Ant Main"
            }
        ],
        "releaseYear" : 2018,
        "rating" : "PG-14",
        "stars" : 3,
        "videoQuality" : "HD",
        "audioQuality" : "5.1",
        "synopsis" : [ 
            {
                "language" : "en_US",
                "text" : "After years of increases in the greenhouse effect, havoc is wreaked globally in the form of catastrophic hurricanes, tornadoes, tidal waves, floods and the beginning of a new Ice Age. Paleoclimatologist, Jack Hall tries to warn the world while also shepherding to safety his son, trapped in New York after the city is overwhelmed by the start of the new big freeze."
            }
        ],
        "images" : [ 
            {
                "language" : "en_US",
                "path" : "/images/10.jpg",
                "size" : "640x320",
                "format" : "THUMBNAIL"
            },
            {
                "language" : "en_US",
                "path" : "/images/10.jpg",
                "size" : "640x320",
                "format" : "POSTER"
            },
            {
                "language" : "en_US",
                "path" : "/images/logo/10.png",
                "size" : "640x320",
                "format" : "LOGO"
            }
        ]
    },
    {
        "genres" : [ 
            ObjectID.createFromHexString("5cd5a50b3c1a3d3798f9e857")
        ],
        "trailerManifest" : ObjectID.createFromHexString("5cd5a10e321ca61f589279f7"),
        "releaseManifest" : ObjectID.createFromHexString("5cd5a135a3d28a1f5cc1de11"),
        "title" : [ 
            {
                "language" : "en_US",
                "text" : "The Day After Tomorrow"
            }
        ],
        "releaseYear" : 2018,
        "rating" : "PG-14",
        "stars" : 3,
        "videoQuality" : "HD",
        "audioQuality" : "5.1",
        "synopsis" : [ 
            {
                "language" : "en_US",
                "text" : "After years of increases in the greenhouse effect, havoc is wreaked globally in the form of catastrophic hurricanes, tornadoes, tidal waves, floods and the beginning of a new Ice Age. Paleoclimatologist, Jack Hall tries to warn the world while also shepherding to safety his son, trapped in New York after the city is overwhelmed by the start of the new big freeze."
            }
        ],
        "images" : [ 
            {
                "language" : "en_US",
                "path" : "/images/11.jpg",
                "size" : "640x320",
                "format" : "THUMBNAIL"
            },
            {
                "language" : "en_US",
                "path" : "/images/11.jpg",
                "size" : "640x320",
                "format" : "POSTER"
            },
            {
                "language" : "en_US",
                "path" : "/images/logo/1.png",
                "size" : "640x320",
                "format" : "LOGO"
            }
        ]
    },
    {
        "genres" : [ 
            ObjectID.createFromHexString("5cd5a50b3c1a3d3798f9e857")
        ],
        "trailerManifest" : ObjectID.createFromHexString("5cd5a10e321ca61f589279f7"),
        "releaseManifest" : ObjectID.createFromHexString("5cd5a135a3d28a1f5cc1de11"),
        "title" : [ 
            {
                "language" : "en_US",
                "text" : "Kings Man"
            }
        ],
        "releaseYear" : 2018,
        "rating" : "PG-14",
        "stars" : 3,
        "videoQuality" : "HD",
        "audioQuality" : "5.1",
        "synopsis" : [ 
            {
                "language" : "en_US",
                "text" : "After years of increases in the greenhouse effect, havoc is wreaked globally in the form of catastrophic hurricanes, tornadoes, tidal waves, floods and the beginning of a new Ice Age. Paleoclimatologist, Jack Hall tries to warn the world while also shepherding to safety his son, trapped in New York after the city is overwhelmed by the start of the new big freeze."
            }
        ],
        "images" : [ 
            {
                "language" : "en_US",
                "path" : "/images/12.jpg",
                "size" : "640x320",
                "format" : "THUMBNAIL"
            },
            {
                "language" : "en_US",
                "path" : "/images/12.jpg",
                "size" : "640x320",
                "format" : "POSTER"
            },
            {
                "language" : "en_US",
                "path" : "/images/logo/2.png",
                "size" : "640x320",
                "format" : "LOGO"
            }
        ]
    },
    {
        "genres" : [ 
            ObjectID.createFromHexString("5cd5a50b3c1a3d3798f9e857")
        ],
        "trailerManifest" : ObjectID.createFromHexString("5cd5a10e321ca61f589279f7"),
        "releaseManifest" : ObjectID.createFromHexString("5cd5a135a3d28a1f5cc1de11"),
        "title" : [ 
            {
                "language" : "en_US",
                "text" : "Thor"
            }
        ],
        "releaseYear" : 2018,
        "rating" : "PG-14",
        "stars" : 3,
        "videoQuality" : "HD",
        "audioQuality" : "5.1",
        "synopsis" : [ 
            {
                "language" : "en_US",
                "text" : "After years of increases in the greenhouse effect, havoc is wreaked globally in the form of catastrophic hurricanes, tornadoes, tidal waves, floods and the beginning of a new Ice Age. Paleoclimatologist, Jack Hall tries to warn the world while also shepherding to safety his son, trapped in New York after the city is overwhelmed by the start of the new big freeze."
            }
        ],
        "images" : [ 
            {
                "language" : "en_US",
                "path" : "/images/13.jpg",
                "size" : "640x320",
                "format" : "THUMBNAIL"
            },
            {
                "language" : "en_US",
                "path" : "/images/13.jpg",
                "size" : "640x320",
                "format" : "POSTER"
            },
            {
                "language" : "en_US",
                "path" : "/images/logo/3.png",
                "size" : "640x320",
                "format" : "LOGO"
            }
        ]
    },
    {
        "genres" : [ 
            ObjectID.createFromHexString("5cd5a50b3c1a3d3798f9e857")
        ],
        "trailerManifest" : ObjectID.createFromHexString("5cd5a10e321ca61f589279f7"),
        "releaseManifest" : ObjectID.createFromHexString("5cd5a135a3d28a1f5cc1de11"),
        "title" : [ 
            {
                "language" : "en_US",
                "text" : "Monday"
            }
        ],
        "releaseYear" : 2018,
        "rating" : "PG-14",
        "stars" : 3,
        "videoQuality" : "HD",
        "audioQuality" : "5.1",
        "synopsis" : [ 
            {
                "language" : "en_US",
                "text" : "After years of increases in the greenhouse effect, havoc is wreaked globally in the form of catastrophic hurricanes, tornadoes, tidal waves, floods and the beginning of a new Ice Age. Paleoclimatologist, Jack Hall tries to warn the world while also shepherding to safety his son, trapped in New York after the city is overwhelmed by the start of the new big freeze."
            }
        ],
        "images" : [ 
            {
                "language" : "en_US",
                "path" : "/images/14.jpg",
                "size" : "640x320",
                "format" : "THUMBNAIL"
            },
            {
                "language" : "en_US",
                "path" : "/images/14.jpg",
                "size" : "640x320",
                "format" : "POSTER"
            },
            {
                "language" : "en_US",
                "path" : "/images/logo/4.png",
                "size" : "640x320",
                "format" : "LOGO"
            }
        ]
    },
    {
        "genres" : [ 
            ObjectID.createFromHexString("5cd5a50b3c1a3d3798f9e857")
        ],
        "trailerManifest" : ObjectID.createFromHexString("5cd5a10e321ca61f589279f7"),
        "releaseManifest" : ObjectID.createFromHexString("5cd5a135a3d28a1f5cc1de11"),
        "title" : [ 
            {
                "language" : "en_US",
                "text" : "Dinossauros"
            }
        ],
        "releaseYear" : 2018,
        "rating" : "PG-14",
        "stars" : 3,
        "videoQuality" : "HD",
        "audioQuality" : "5.1",
        "synopsis" : [ 
            {
                "language" : "en_US",
                "text" : "After years of increases in the greenhouse effect, havoc is wreaked globally in the form of catastrophic hurricanes, tornadoes, tidal waves, floods and the beginning of a new Ice Age. Paleoclimatologist, Jack Hall tries to warn the world while also shepherding to safety his son, trapped in New York after the city is overwhelmed by the start of the new big freeze."
            }
        ],
        "images" : [ 
            {
                "language" : "en_US",
                "path" : "/images/15.jpg",
                "size" : "640x320",
                "format" : "THUMBNAIL"
            },
            {
                "language" : "en_US",
                "path" : "/images/15.jpg",
                "size" : "640x320",
                "format" : "POSTER"
            },
            {
                "language" : "en_US",
                "path" : "/images/logo/5.png",
                "size" : "640x320",
                "format" : "LOGO"
            }
        ]
    },
    {
        "genres" : [ 
            ObjectID.createFromHexString("5cd5a50b3c1a3d3798f9e857")
        ],
        "trailerManifest" : ObjectID.createFromHexString("5cd5a10e321ca61f589279f7"),
        "releaseManifest" : ObjectID.createFromHexString("5cd5a135a3d28a1f5cc1de11"),
        "title" : [ 
            {
                "language" : "en_US",
                "text" : "Wonder Woman"
            }
        ],
        "releaseYear" : 2018,
        "rating" : "PG-14",
        "stars" : 3,
        "videoQuality" : "HD",
        "audioQuality" : "5.1",
        "synopsis" : [ 
            {
                "language" : "en_US",
                "text" : "After years of increases in the greenhouse effect, havoc is wreaked globally in the form of catastrophic hurricanes, tornadoes, tidal waves, floods and the beginning of a new Ice Age. Paleoclimatologist, Jack Hall tries to warn the world while also shepherding to safety his son, trapped in New York after the city is overwhelmed by the start of the new big freeze."
            }
        ],
        "images" : [ 
            {
                "language" : "en_US",
                "path" : "/images/16.jpg",
                "size" : "640x320",
                "format" : "THUMBNAIL"
            },
            {
                "language" : "en_US",
                "path" : "/images/16.jpg",
                "size" : "640x320",
                "format" : "POSTER"
            },
            {
                "language" : "en_US",
                "path" : "/images/logo/6.png",
                "size" : "640x320",
                "format" : "LOGO"
            }
        ]
    },
    {
        "genres" : [ 
            ObjectID.createFromHexString("5cd5a50b3c1a3d3798f9e857")
        ],
        "trailerManifest" : ObjectID.createFromHexString("5cd5a10e321ca61f589279f7"),
        "releaseManifest" : ObjectID.createFromHexString("5cd5a135a3d28a1f5cc1de11"),
        "title" : [ 
            {
                "language" : "en_US",
                "text" : "Bubble Bee"
            }
        ],
        "releaseYear" : 2018,
        "rating" : "PG-14",
        "stars" : 3,
        "videoQuality" : "HD",
        "audioQuality" : "5.1",
        "synopsis" : [ 
            {
                "language" : "en_US",
                "text" : "After years of increases in the greenhouse effect, havoc is wreaked globally in the form of catastrophic hurricanes, tornadoes, tidal waves, floods and the beginning of a new Ice Age. Paleoclimatologist, Jack Hall tries to warn the world while also shepherding to safety his son, trapped in New York after the city is overwhelmed by the start of the new big freeze."
            }
        ],
        "images" : [ 
            {
                "language" : "en_US",
                "path" : "/images/17.jpg",
                "size" : "640x320",
                "format" : "THUMBNAIL"
            },
            {
                "language" : "en_US",
                "path" : "/images/17.jpg",
                "size" : "640x320",
                "format" : "POSTER"
            },
            {
                "language" : "en_US",
                "path" : "/images/logo/7.png",
                "size" : "640x320",
                "format" : "LOGO"
            }
        ]
    },
    {
        "genres" : [ 
            ObjectID.createFromHexString("5cd5a50b3c1a3d3798f9e857")
        ],
        "trailerManifest" : ObjectID.createFromHexString("5cd5a10e321ca61f589279f7"),
        "releaseManifest" : ObjectID.createFromHexString("5cd5a135a3d28a1f5cc1de11"),
        "title" : [ 
            {
                "language" : "en_US",
                "text" : "Nao sei"
            }
        ],
        "releaseYear" : 2018,
        "rating" : "PG-14",
        "stars" : 3,
        "videoQuality" : "HD",
        "audioQuality" : "5.1",
        "synopsis" : [ 
            {
                "language" : "en_US",
                "text" : "After years of increases in the greenhouse effect, havoc is wreaked globally in the form of catastrophic hurricanes, tornadoes, tidal waves, floods and the beginning of a new Ice Age. Paleoclimatologist, Jack Hall tries to warn the world while also shepherding to safety his son, trapped in New York after the city is overwhelmed by the start of the new big freeze."
            }
        ],
        "images" : [ 
            {
                "language" : "en_US",
                "path" : "/images/18.jpg",
                "size" : "640x320",
                "format" : "THUMBNAIL"
            },
            {
                "language" : "en_US",
                "path" : "/images/18.jpg",
                "size" : "640x320",
                "format" : "POSTER"
            },
            {
                "language" : "en_US",
                "path" : "/images/logo/8.png",
                "size" : "640x320",
                "format" : "LOGO"
            }
        ]
    },
    {
        "genres" : [ 
            ObjectID.createFromHexString("5cd5a50b3c1a3d3798f9e857")
        ],
        "trailerManifest" : ObjectID.createFromHexString("5cd5a10e321ca61f589279f7"),
        "releaseManifest" : ObjectID.createFromHexString("5cd5a135a3d28a1f5cc1de11"),
        "title" : [ 
            {
                "language" : "en_US",
                "text" : "Transformers"
            }
        ],
        "releaseYear" : 2018,
        "rating" : "PG-14",
        "stars" : 3,
        "videoQuality" : "HD",
        "audioQuality" : "5.1",
        "synopsis" : [ 
            {
                "language" : "en_US",
                "text" : "After years of increases in the greenhouse effect, havoc is wreaked globally in the form of catastrophic hurricanes, tornadoes, tidal waves, floods and the beginning of a new Ice Age. Paleoclimatologist, Jack Hall tries to warn the world while also shepherding to safety his son, trapped in New York after the city is overwhelmed by the start of the new big freeze."
            }
        ],
        "images" : [ 
            {
                "language" : "en_US",
                "path" : "/images/19.jpg",
                "size" : "640x320",
                "format" : "THUMBNAIL"
            },
            {
                "language" : "en_US",
                "path" : "/images/19.jpg",
                "size" : "640x320",
                "format" : "POSTER"
            },
            {
                "language" : "en_US",
                "path" : "/images/logo/9.png",
                "size" : "640x320",
                "format" : "LOGO"
            }
        ]
    },
    {
        "genres" : [ 
            ObjectID.createFromHexString("5cd5a50b3c1a3d3798f9e857")
        ],
        "trailerManifest" : ObjectID.createFromHexString("5cd5a10e321ca61f589279f7"),
        "releaseManifest" : ObjectID.createFromHexString("5cd5a135a3d28a1f5cc1de11"),
        "title" : [ 
            {
                "language" : "en_US",
                "text" : "Ghost Rider 2"
            }
        ],
        "releaseYear" : 2018,
        "rating" : "PG-14",
        "stars" : 3,
        "videoQuality" : "HD",
        "audioQuality" : "5.1",
        "synopsis" : [ 
            {
                "language" : "en_US",
                "text" : "After years of increases in the greenhouse effect, havoc is wreaked globally in the form of catastrophic hurricanes, tornadoes, tidal waves, floods and the beginning of a new Ice Age. Paleoclimatologist, Jack Hall tries to warn the world while also shepherding to safety his son, trapped in New York after the city is overwhelmed by the start of the new big freeze."
            }
        ],
        "images" : [ 
            {
                "language" : "en_US",
                "path" : "/images/20.jpg",
                "size" : "640x320",
                "format" : "THUMBNAIL"
            },
            {
                "language" : "en_US",
                "path" : "/images/20.jpg",
                "size" : "640x320",
                "format" : "POSTER"
            },
            {
                "language" : "en_US",
                "path" : "/images/logo/10.png",
                "size" : "640x320",
                "format" : "LOGO"
            }
        ]
    },
    {
        "genres" : [ 
            ObjectID.createFromHexString("5cd5a50b3c1a3d3798f9e857")
        ],
        "trailerManifest" : ObjectID.createFromHexString("5cd5a10e321ca61f589279f7"),
        "releaseManifest" : ObjectID.createFromHexString("5cd5a135a3d28a1f5cc1de11"),
        "title" : [ 
            {
                "language" : "en_US",
                "text" : "Aquaman"
            }
        ],
        "releaseYear" : 2018,
        "rating" : "PG-14",
        "stars" : 3,
        "videoQuality" : "HD",
        "audioQuality" : "5.1",
        "synopsis" : [ 
            {
                "language" : "en_US",
                "text" : "After years of increases in the greenhouse effect, havoc is wreaked globally in the form of catastrophic hurricanes, tornadoes, tidal waves, floods and the beginning of a new Ice Age. Paleoclimatologist, Jack Hall tries to warn the world while also shepherding to safety his son, trapped in New York after the city is overwhelmed by the start of the new big freeze."
            }
        ],
        "images" : [ 
            {
                "language" : "en_US",
                "path" : "/images/21.jpg",
                "size" : "640x320",
                "format" : "THUMBNAIL"
            },
            {
                "language" : "en_US",
                "path" : "/images/21.jpg",
                "size" : "640x320",
                "format" : "POSTER"
            },
            {
                "language" : "en_US",
                "path" : "/images/logo/1.png",
                "size" : "640x320",
                "format" : "LOGO"
            }
        ]
    },
    {
        "genres" : [ 
            ObjectID.createFromHexString("5cd5a50b3c1a3d3798f9e857")
        ],
        "trailerManifest" : ObjectID.createFromHexString("5cd5a10e321ca61f589279f7"),
        "releaseManifest" : ObjectID.createFromHexString("5cd5a135a3d28a1f5cc1de11"),
        "title" : [ 
            {
                "language" : "en_US",
                "text" : "MAze runner"
            }
        ],
        "releaseYear" : 2018,
        "rating" : "PG-14",
        "stars" : 3,
        "videoQuality" : "HD",
        "audioQuality" : "5.1",
        "synopsis" : [ 
            {
                "language" : "en_US",
                "text" : "After years of increases in the greenhouse effect, havoc is wreaked globally in the form of catastrophic hurricanes, tornadoes, tidal waves, floods and the beginning of a new Ice Age. Paleoclimatologist, Jack Hall tries to warn the world while also shepherding to safety his son, trapped in New York after the city is overwhelmed by the start of the new big freeze."
            }
        ],
        "images" : [ 
            {
                "language" : "en_US",
                "path" : "/images/22.jpg",
                "size" : "640x320",
                "format" : "THUMBNAIL"
            },
            {
                "language" : "en_US",
                "path" : "/images/22.jpg",
                "size" : "640x320",
                "format" : "POSTER"
            },
            {
                "language" : "en_US",
                "path" : "/images/logo/2.png",
                "size" : "640x320",
                "format" : "LOGO"
            }
        ]
    },
    {
        "genres" : [ 
            ObjectID.createFromHexString("5cd5a50b3c1a3d3798f9e857")
        ],
        "trailerManifest" : ObjectID.createFromHexString("5cd5a10e321ca61f589279f7"),
        "releaseManifest" : ObjectID.createFromHexString("5cd5a135a3d28a1f5cc1de11"),
        "title" : [ 
            {
                "language" : "en_US",
                "text" : "Tomb Rider"
            }
        ],
        "releaseYear" : 2018,
        "rating" : "PG-14",
        "stars" : 3,
        "videoQuality" : "HD",
        "audioQuality" : "5.1",
        "synopsis" : [ 
            {
                "language" : "en_US",
                "text" : "After years of increases in the greenhouse effect, havoc is wreaked globally in the form of catastrophic hurricanes, tornadoes, tidal waves, floods and the beginning of a new Ice Age. Paleoclimatologist, Jack Hall tries to warn the world while also shepherding to safety his son, trapped in New York after the city is overwhelmed by the start of the new big freeze."
            }
        ],
        "images" : [ 
            {
                "language" : "en_US",
                "path" : "/images/23.jpg",
                "size" : "640x320",
                "format" : "THUMBNAIL"
            },
            {
                "language" : "en_US",
                "path" : "/images/23.jpg",
                "size" : "640x320",
                "format" : "POSTER"
            },
            {
                "language" : "en_US",
                "path" : "/images/logo/3.png",
                "size" : "640x320",
                "format" : "LOGO"
            }
        ]
    },
    {
        "genres" : [ 
            ObjectID.createFromHexString("5cd5a50b3c1a3d3798f9e857")
        ],
        "trailerManifest" : ObjectID.createFromHexString("5cd5a10e321ca61f589279f7"),
        "releaseManifest" : ObjectID.createFromHexString("5cd5a135a3d28a1f5cc1de11"),
        "title" : [ 
            {
                "language" : "en_US",
                "text" : "As branquelas"
            }
        ],
        "releaseYear" : 2018,
        "rating" : "PG-14",
        "stars" : 3,
        "videoQuality" : "HD",
        "audioQuality" : "5.1",
        "synopsis" : [ 
            {
                "language" : "en_US",
                "text" : "After years of increases in the greenhouse effect, havoc is wreaked globally in the form of catastrophic hurricanes, tornadoes, tidal waves, floods and the beginning of a new Ice Age. Paleoclimatologist, Jack Hall tries to warn the world while also shepherding to safety his son, trapped in New York after the city is overwhelmed by the start of the new big freeze."
            }
        ],
        "images" : [ 
            {
                "language" : "en_US",
                "path" : "/images/24.jpg",
                "size" : "640x320",
                "format" : "THUMBNAIL"
            },
            {
                "language" : "en_US",
                "path" : "/images/24.jpg",
                "size" : "640x320",
                "format" : "POSTER"
            },
            {
                "language" : "en_US",
                "path" : "/images/logo/4.png",
                "size" : "640x320",
                "format" : "LOGO"
            }
        ]
    },
    {
        "genres" : [ 
            ObjectID.createFromHexString("5cd5a50b3c1a3d3798f9e857")
        ],
        "trailerManifest" : ObjectID.createFromHexString("5cd5a10e321ca61f589279f7"),
        "releaseManifest" : ObjectID.createFromHexString("5cd5a135a3d28a1f5cc1de11"),
        "title" : [ 
            {
                "language" : "en_US",
                "text" : "Jurassic Wolrd"
            }
        ],
        "releaseYear" : 2018,
        "rating" : "PG-14",
        "stars" : 3,
        "videoQuality" : "HD",
        "audioQuality" : "5.1",
        "synopsis" : [ 
            {
                "language" : "en_US",
                "text" : "After years of increases in the greenhouse effect, havoc is wreaked globally in the form of catastrophic hurricanes, tornadoes, tidal waves, floods and the beginning of a new Ice Age. Paleoclimatologist, Jack Hall tries to warn the world while also shepherding to safety his son, trapped in New York after the city is overwhelmed by the start of the new big freeze."
            }
        ],
        "images" : [ 
            {
                "language" : "en_US",
                "path" : "/images/25.jpg",
                "size" : "640x320",
                "format" : "THUMBNAIL"
            },
            {
                "language" : "en_US",
                "path" : "/images/25.jpg",
                "size" : "640x320",
                "format" : "POSTER"
            },
            {
                "language" : "en_US",
                "path" : "/images/logo/5.png",
                "size" : "640x320",
                "format" : "LOGO"
            }
        ]
    },
    {
        "genres" : [ 
            ObjectID.createFromHexString("5cd5a50b3c1a3d3798f9e857")
        ],
        "trailerManifest" : ObjectID.createFromHexString("5cd5a10e321ca61f589279f7"),
        "releaseManifest" : ObjectID.createFromHexString("5cd5a135a3d28a1f5cc1de11"),
        "title" : [ 
            {
                "language" : "en_US",
                "text" : "Skycrapper"
            }
        ],
        "releaseYear" : 2018,
        "rating" : "PG-14",
        "stars" : 3,
        "videoQuality" : "HD",
        "audioQuality" : "5.1",
        "synopsis" : [ 
            {
                "language" : "en_US",
                "text" : "After years of increases in the greenhouse effect, havoc is wreaked globally in the form of catastrophic hurricanes, tornadoes, tidal waves, floods and the beginning of a new Ice Age. Paleoclimatologist, Jack Hall tries to warn the world while also shepherding to safety his son, trapped in New York after the city is overwhelmed by the start of the new big freeze."
            }
        ],
        "images" : [ 
            {
                "language" : "en_US",
                "path" : "/images/26.jpg",
                "size" : "640x320",
                "format" : "THUMBNAIL"
            },
            {
                "language" : "en_US",
                "path" : "/images/26.jpg",
                "size" : "640x320",
                "format" : "POSTER"
            },
            {
                "language" : "en_US",
                "path" : "/images/logo/6.png",
                "size" : "640x320",
                "format" : "LOGO"
            }
        ]
    },
    {
        "genres" : [ 
            ObjectID.createFromHexString("5cd5a50b3c1a3d3798f9e857")
        ],
        "trailerManifest" : ObjectID.createFromHexString("5cd5a10e321ca61f589279f7"),
        "releaseManifest" : ObjectID.createFromHexString("5cd5a135a3d28a1f5cc1de11"),
        "title" : [ 
            {
                "language" : "en_US",
                "text" : "Mission Impossible 4"
            }
        ],
        "releaseYear" : 2018,
        "rating" : "PG-14",
        "stars" : 3,
        "videoQuality" : "HD",
        "audioQuality" : "5.1",
        "synopsis" : [ 
            {
                "language" : "en_US",
                "text" : "After years of increases in the greenhouse effect, havoc is wreaked globally in the form of catastrophic hurricanes, tornadoes, tidal waves, floods and the beginning of a new Ice Age. Paleoclimatologist, Jack Hall tries to warn the world while also shepherding to safety his son, trapped in New York after the city is overwhelmed by the start of the new big freeze."
            }
        ],
        "images" : [ 
            {
                "language" : "en_US",
                "path" : "/images/27.jpg",
                "size" : "640x320",
                "format" : "THUMBNAIL"
            },
            {
                "language" : "en_US",
                "path" : "/images/27.jpg",
                "size" : "640x320",
                "format" : "POSTER"
            },
            {
                "language" : "en_US",
                "path" : "/images/logo/7.png",
                "size" : "640x320",
                "format" : "LOGO"
            }
        ]
    },
    {
        "genres" : [ 
            ObjectID.createFromHexString("5cd5a50b3c1a3d3798f9e857")
        ],
        "trailerManifest" : ObjectID.createFromHexString("5cd5a10e321ca61f589279f7"),
        "releaseManifest" : ObjectID.createFromHexString("5cd5a135a3d28a1f5cc1de11"),
        "title" : [ 
            {
                "language" : "en_US",
                "text" : "Equalizer 2"
            }
        ],
        "releaseYear" : 2018,
        "rating" : "PG-14",
        "stars" : 3,
        "videoQuality" : "HD",
        "audioQuality" : "5.1",
        "synopsis" : [ 
            {
                "language" : "en_US",
                "text" : "After years of increases in the greenhouse effect, havoc is wreaked globally in the form of catastrophic hurricanes, tornadoes, tidal waves, floods and the beginning of a new Ice Age. Paleoclimatologist, Jack Hall tries to warn the world while also shepherding to safety his son, trapped in New York after the city is overwhelmed by the start of the new big freeze."
            }
        ],
        "images" : [ 
            {
                "language" : "en_US",
                "path" : "/images/28.jpg",
                "size" : "640x320",
                "format" : "THUMBNAIL"
            },
            {
                "language" : "en_US",
                "path" : "/images/28.jpg",
                "size" : "640x320",
                "format" : "POSTER"
            },
            {
                "language" : "en_US",
                "path" : "/images/logo/8.png",
                "size" : "640x320",
                "format" : "LOGO"
            }
        ]
    },
    {
        "genres" : [ 
            ObjectID.createFromHexString("5cd5a50b3c1a3d3798f9e857")
        ],
        "trailerManifest" : ObjectID.createFromHexString("5cd5a10e321ca61f589279f7"),
        "releaseManifest" : ObjectID.createFromHexString("5cd5a135a3d28a1f5cc1de11"),
        "title" : [ 
            {
                "language" : "en_US",
                "text" : "Cars"
            }
        ],
        "releaseYear" : 2018,
        "rating" : "PG-14",
        "stars" : 3,
        "videoQuality" : "HD",
        "audioQuality" : "5.1",
        "synopsis" : [ 
            {
                "language" : "en_US",
                "text" : "After years of increases in the greenhouse effect, havoc is wreaked globally in the form of catastrophic hurricanes, tornadoes, tidal waves, floods and the beginning of a new Ice Age. Paleoclimatologist, Jack Hall tries to warn the world while also shepherding to safety his son, trapped in New York after the city is overwhelmed by the start of the new big freeze."
            }
        ],
        "images" : [ 
            {
                "language" : "en_US",
                "path" : "/images/29.jpg",
                "size" : "640x320",
                "format" : "THUMBNAIL"
            },
            {
                "language" : "en_US",
                "path" : "/images/29.jpg",
                "size" : "640x320",
                "format" : "POSTER"
            },
            {
                "language" : "en_US",
                "path" : "/images/logo/9.png",
                "size" : "640x320",
                "format" : "LOGO"
            }
        ]
    },
    {
        "genres" : [ 
            ObjectID.createFromHexString("5cd5a50b3c1a3d3798f9e857")
        ],
        "trailerManifest" : ObjectID.createFromHexString("5cd5a10e321ca61f589279f7"),
        "releaseManifest" : ObjectID.createFromHexString("5cd5a135a3d28a1f5cc1de11"),
        "title" : [ 
            {
                "language" : "en_US",
                "text" : "Predator"
            }
        ],
        "releaseYear" : 2018,
        "rating" : "PG-14",
        "stars" : 3,
        "videoQuality" : "HD",
        "audioQuality" : "5.1",
        "synopsis" : [ 
            {
                "language" : "en_US",
                "text" : "After years of increases in the greenhouse effect, havoc is wreaked globally in the form of catastrophic hurricanes, tornadoes, tidal waves, floods and the beginning of a new Ice Age. Paleoclimatologist, Jack Hall tries to warn the world while also shepherding to safety his son, trapped in New York after the city is overwhelmed by the start of the new big freeze."
            }
        ],
        "images" : [ 
            {
                "language" : "en_US",
                "path" : "/images/30.jpg",
                "size" : "640x320",
                "format" : "THUMBNAIL"
            },
            {
                "language" : "en_US",
                "path" : "/images/30.jpg",
                "size" : "640x320",
                "format" : "POSTER"
            },
            {
                "language" : "en_US",
                "path" : "/images/logo/10.png",
                "size" : "640x320",
                "format" : "LOGO"
            }
        ]
    },
]

export const criaMovies = () => {
    movies.forEach(movie => {
        let mv = new Movie(movie)
        mv.save()
        console.log("Ok!")
    })
}

export const criaTvShows = () => {

    for (let i = 1; i < 16; i++) {

        let tv = {
            "genres" : [ 
                ObjectID.createFromHexString("5cd5a50b3c1a3d3798f9e857")
            ],
            "trailerManifest" : ObjectID.createFromHexString("5cd5a10e321ca61f589279f7"),
            "title" : [ 
                {
                    "language" : "en_US",
                    "text" : `TV Show Title ${i}`
                }
            ],
            "releaseYear" : 2015,
            "rating" : "PG-14",
            "stars" : 4,
            "videoQuality" : "HD",
            "audioQuality" : "5.1",
            "synopsis" : [ 
                {
                    "language" : "en_US",
                    "text" : "Oliver Queen and his father are lost at sea when their luxury yacht sinks. His father doesn't survive. Oliver survives on an uncharted island for five years learning to fight, but also learning about his father's corruption and unscrupulous business dealings. He returns to civilization a changed man, determined to put things right. He disguises himself with the hood of one of his mysterious island mentors, arms himself with a bow and sets about hunting down the men and women who have corrupted his city."
                }
            ],
            "images" : [ 
                {
                    "language" : "en_US",
                    "path" : `/images/${i}.jpg`,
                    "size" : "640x320",
                    "format" : "THUMBNAIL"
                }, 
                {
                    "language" : "en_US",
                    "path" : `/images/${i}.jpg`,
                    "size" : "640x320",
                    "format" : "POSTER"
                }, 
                {
                    "language" : "en_US",
                    "path" : `/images/logo/${i > 10 ? (i - 10) : i }.png`,
                    "size" : "640x320",
                    "format" : "LOGO"
                }
            ],
            "seasons" : [ 
                {
                    "number" : 1,
                    "episodes" : [ 
                        {
                            "releaseManifest" : ObjectID.createFromHexString("5cd5a135a3d28a1f5cc1de11"),
                            "synopsis" : [ 
                                {
                                    "language" : "en_US",
                                    "text" : "After the Ninth Circle delivers a major setback for Team Arrow, Diggle reluctantly reaches out to a Four-Star General of the Defense Intelligence Agency for help, despite unresolved tension from their past. Meanwhile, Oliver discovers a piece of information that he believes will turn Emiko against the Ninth Circle. Alena returns with an interesting proposal for Felicity."
                                }
                            ],
                            "title" : [ 
                                {
                                    "language" : "en_US",
                                    "text" : `Episode ${i}`
                                }
                            ],
                            "number" : 1,
                            "duration" : 40,
                            "preview" : [ 
                                {
                                    "size" : "640x320",
                                    "path" : `/images/${i}.jpg`
                                }
                            ]
                        }
                    ]
                }
            ],
        }

        let tvShow = new TvShow(tv)
        tvShow.save()
        console.log("Salvou " + i)
    }
}

export const criaCanais = () => {
    for (let i = 1; i < 16; i++) {
        let canal = {
            "liveManifest" : ObjectID.createFromHexString("5cd5a135a3d28a1f5cc1de11"),
            "name" : `Canal de TV ${i}`,
            "images" : [ 
                {
                    "language" : "en_US",
                    "path" : `/images/${i}.jpg`,
                    "size" : "640x320",
                    "format" : "THUMBNAIL"
                }, 
                {
                    "language" : "en_US",
                    "path" : `/images/${i}.jpg`,
                    "size" : "640x320",
                    "format" : "POSTER"
                }, 
                {
                    "language" : "en_US",
                    "path" : `/images/logo/${i > 10 ? (i - 10) : i }.png`,
                    "size" : "640x320",
                    "format" : "LOGO"
                }
            ],
            "programGuide" : [ 
                {
                    "name" : [ 
                        {
                            "language" : "en_US",
                            "text" : `Programa ${i}`
                        }
                    ],
                    "description" : [ 
                        {
                            "language" : "en_US",
                            "text" : `Descricao do Programa - ${i}`
                        }
                    ],
                    "startTime" : "08:00",
                    "endTime" : "09:30"
                },
                {
                    "name" : [ 
                        {
                            "language" : "en_US",
                            "text" : `Programa ${i + 1}`
                        }
                    ],
                    "description" : [ 
                        {
                            "language" : "en_US",
                            "text" : `Descricao do Programa - ${i + 1}`
                        }
                    ],
                    "startTime" : "09:45",
                    "endTime" : "11:25"
                }
            ]
        }

        let live = new LiveChannel(canal)
        live.save()
        console.log("Salvou " + i)
    }
}

export const criaUsuario = () => {
    const user = new User({
        login: "user1",
        passwd: "passwd1",
        active: true,
        name: "User test"
    })
    user.save()
    console.log("user!")
}