const postsKey = "my-first-blog-posts";
const themeKey = "my-first-blog-theme";
const savedArticlesKey = "my-first-blog-saved-articles";
// Legacy key names are kept so existing browser-saved posts, moods, and saved articles do not disappear.
const thoughtsKey = "wandering-collective-thoughts";
const drawerLinksKey = "wandering-internet-drawer-links";
const blindListeningHistoryKey = "wandering-blind-listening-history";
const blindDiscoveredAlbumsKey = "wandering-blind-discovered-albums";
const blindFavoriteAlbumsKey = "wandering-blind-favorite-albums";
const coffeeBreakPrefsKey = "wandering-coffee-break-preferences";
const controlTowerCollapsedKey = "wandering-control-tower-collapsed";
const siteScaleKey = "wandering-site-scale";
const defaultSiteScale = "0.75";
const placeholderImage = "images/first-post-placeholder.svg";
const themes = [
  { name: "cyberpunk", label: "Cyberpunk" },
  { name: "gotham-city", label: "Gotham City" },
  { name: "pokemon-gameboy", label: "Pokemon Gameboy" }
];
const siteMoods = [
  "confused but building",
  "small win unlocked",
  "breaking things politely",
  "GitHub Pages survivor",
  "backend avoided successfully"
];
const chillQuotes = [
  "Stay for the rain.",
  "Backend avoided successfully.",
  "Small rooms can hold big ideas.",
  "Nothing urgent is happening here.",
  "Open a tab and let the internet breathe."
];
const radioGardenUrl = "https://radio.garden/";
const blindAlbums = [
  {
    id: "demo-001",
    title: "Rooms Above the Rain",
    artist: "Mira Vale",
    year: "2018",
    genre: "Ambient",
    coverImage: createDemoAlbumCover("RA", "#140022", "#00ffe5", "#ff00cc"),
    description: "Slow room-tone synths, distant weather, and the feeling of lights left on in another apartment.",
    bandcampUrl: "https://bandcamp.com/search?q=Rooms%20Above%20the%20Rain%20Mira%20Vale",
    spotifyUrl: "https://open.spotify.com/search/Rooms%20Above%20the%20Rain%20Mira%20Vale",
    youtubeSearchUrl: "https://www.youtube.com/results?search_query=Rooms+Above+the+Rain+Mira+Vale"
  },
  {
    id: "demo-002",
    title: "Soft Static Maps",
    artist: "North Arcade",
    year: "2020",
    genre: "Electronic",
    coverImage: createDemoAlbumCover("SM", "#091018", "#f0c84b", "#3d4248"),
    description: "Minimal electronic sketches that feel like finding an old transit map inside a jacket pocket.",
    bandcampUrl: "https://bandcamp.com/search?q=Soft%20Static%20Maps%20North%20Arcade",
    spotifyUrl: "https://open.spotify.com/search/Soft%20Static%20Maps%20North%20Arcade",
    youtubeSearchUrl: "https://www.youtube.com/results?search_query=Soft+Static+Maps+North+Arcade"
  },
  {
    id: "demo-003",
    title: "Moonlit Errands",
    artist: "Paper Lantern Service",
    year: "2016",
    genre: "Indie",
    coverImage: createDemoAlbumCover("ME", "#1b1330", "#ffe083", "#b799ff"),
    description: "Small guitar songs for walking to a corner shop when the city has gone quiet.",
    bandcampUrl: "https://bandcamp.com/search?q=Moonlit%20Errands%20Paper%20Lantern%20Service",
    spotifyUrl: "https://open.spotify.com/search/Moonlit%20Errands%20Paper%20Lantern%20Service",
    youtubeSearchUrl: "https://www.youtube.com/results?search_query=Moonlit+Errands+Paper+Lantern+Service"
  },
  {
    id: "demo-004",
    title: "Basement Aquarium",
    artist: "Low Tide Mechanic",
    year: "2019",
    genre: "Downtempo",
    coverImage: createDemoAlbumCover("BA", "#04212b", "#5ee6ff", "#156b7a"),
    description: "A dim downtempo record with watery keys, dusty drums, and a slow pulse.",
    bandcampUrl: "https://bandcamp.com/search?q=Basement%20Aquarium%20Low%20Tide%20Mechanic",
    spotifyUrl: "https://open.spotify.com/search/Basement%20Aquarium%20Low%20Tide%20Mechanic",
    youtubeSearchUrl: "https://www.youtube.com/results?search_query=Basement+Aquarium+Low+Tide+Mechanic"
  },
  {
    id: "demo-005",
    title: "Late Bus Reverb",
    artist: "Terminal Bloom",
    year: "2021",
    genre: "Shoegaze",
    coverImage: createDemoAlbumCover("LB", "#201022", "#ff77cc", "#5b7cff"),
    description: "Blurred guitars and tired melodies, like neon signs reflected in wet windows.",
    bandcampUrl: "https://bandcamp.com/search?q=Late%20Bus%20Reverb%20Terminal%20Bloom",
    spotifyUrl: "https://open.spotify.com/search/Late%20Bus%20Reverb%20Terminal%20Bloom",
    youtubeSearchUrl: "https://www.youtube.com/results?search_query=Late+Bus+Reverb+Terminal+Bloom"
  },
  {
    id: "demo-006",
    title: "Green Screen Daydream",
    artist: "Pocket Meadow",
    year: "2015",
    genre: "Chiptune",
    coverImage: createDemoAlbumCover("GS", "#cadc9f", "#0f381f", "#577c44"),
    description: "Tiny melodies with handheld-game warmth, playful but a little lonely.",
    bandcampUrl: "https://bandcamp.com/search?q=Green%20Screen%20Daydream%20Pocket%20Meadow",
    spotifyUrl: "https://open.spotify.com/search/Green%20Screen%20Daydream%20Pocket%20Meadow",
    youtubeSearchUrl: "https://www.youtube.com/results?search_query=Green+Screen+Daydream+Pocket+Meadow"
  },
  {
    id: "demo-007",
    title: "Elevator for Ghosts",
    artist: "Marble Lobby",
    year: "2017",
    genre: "Vaporwave",
    coverImage: createDemoAlbumCover("EG", "#2d1033", "#f7a8ff", "#7bf0ff"),
    description: "Synthetic lounge fragments and glossy sadness from a mall that closed years ago.",
    bandcampUrl: "https://bandcamp.com/search?q=Elevator%20for%20Ghosts%20Marble%20Lobby",
    spotifyUrl: "https://open.spotify.com/search/Elevator%20for%20Ghosts%20Marble%20Lobby",
    youtubeSearchUrl: "https://www.youtube.com/results?search_query=Elevator+for+Ghosts+Marble+Lobby"
  },
  {
    id: "demo-008",
    title: "Unmarked Side B",
    artist: "Cassette Weather",
    year: "2014",
    genre: "Lo-fi",
    coverImage: createDemoAlbumCover("B", "#151515", "#d7e8ff", "#4b4742"),
    description: "Tape hiss, simple loops, and the gentle mystery of something recorded over something else.",
    bandcampUrl: "https://bandcamp.com/search?q=Unmarked%20Side%20B%20Cassette%20Weather",
    spotifyUrl: "https://open.spotify.com/search/Unmarked%20Side%20B%20Cassette%20Weather",
    youtubeSearchUrl: "https://www.youtube.com/results?search_query=Unmarked+Side+B+Cassette+Weather"
  },
  {
    id: "demo-009",
    title: "Stairwell Stars",
    artist: "Blue Exit Sign",
    year: "2022",
    genre: "Post-rock",
    coverImage: createDemoAlbumCover("SS", "#07142a", "#9cc8ff", "#ffcc66"),
    description: "Slow-building instrumentals that look upward from ordinary concrete places.",
    bandcampUrl: "https://bandcamp.com/search?q=Stairwell%20Stars%20Blue%20Exit%20Sign",
    spotifyUrl: "https://open.spotify.com/search/Stairwell%20Stars%20Blue%20Exit%20Sign",
    youtubeSearchUrl: "https://www.youtube.com/results?search_query=Stairwell+Stars+Blue+Exit+Sign"
  },
  {
    id: "demo-010",
    title: "Rain on Plastic Chairs",
    artist: "Market After Midnight",
    year: "2023",
    genre: "Field Recording",
    coverImage: createDemoAlbumCover("RP", "#0f1518", "#b8aea3", "#00ffe5"),
    description: "Found sounds, quiet percussion, and the tiny rhythm of weather on cheap furniture.",
    bandcampUrl: "https://bandcamp.com/search?q=Rain%20on%20Plastic%20Chairs%20Market%20After%20Midnight",
    spotifyUrl: "https://open.spotify.com/search/Rain%20on%20Plastic%20Chairs%20Market%20After%20Midnight",
    youtubeSearchUrl: "https://www.youtube.com/results?search_query=Rain+on+Plastic+Chairs+Market+After+Midnight"
  },
  {
    id: "demo-011",
    title: "Antenna Sleep",
    artist: "Quiet Receiver",
    year: "2012",
    genre: "Drone",
    coverImage: createDemoAlbumCover("AS", "#050805", "#69ff69", "#1f5f1f"),
    description: "Long tones that barely move, like radio signals resting behind the wall.",
    bandcampUrl: "https://bandcamp.com/search?q=Antenna%20Sleep%20Quiet%20Receiver",
    spotifyUrl: "https://open.spotify.com/search/Antenna%20Sleep%20Quiet%20Receiver",
    youtubeSearchUrl: "https://www.youtube.com/results?search_query=Antenna+Sleep+Quiet+Receiver"
  },
  {
    id: "demo-012",
    title: "Hotel Ice Machine",
    artist: "Vacancy Light",
    year: "2020",
    genre: "Ambient Pop",
    coverImage: createDemoAlbumCover("HI", "#1c1f2a", "#e8eefc", "#6d1aff"),
    description: "Soft vocals and humming machines from a hallway that never quite ends.",
    bandcampUrl: "https://bandcamp.com/search?q=Hotel%20Ice%20Machine%20Vacancy%20Light",
    spotifyUrl: "https://open.spotify.com/search/Hotel%20Ice%20Machine%20Vacancy%20Light",
    youtubeSearchUrl: "https://www.youtube.com/results?search_query=Hotel+Ice+Machine+Vacancy+Light"
  },
  {
    id: "demo-013",
    title: "Cloud Storage for Feelings",
    artist: "Null Folder",
    year: "2019",
    genre: "Experimental",
    coverImage: createDemoAlbumCover("CF", "#090018", "#ff00cc", "#00ffe5"),
    description: "Fragmented electronic pieces about memory, files, and things you meant to back up.",
    bandcampUrl: "https://bandcamp.com/search?q=Cloud%20Storage%20for%20Feelings%20Null%20Folder",
    spotifyUrl: "https://open.spotify.com/search/Cloud%20Storage%20for%20Feelings%20Null%20Folder",
    youtubeSearchUrl: "https://www.youtube.com/results?search_query=Cloud+Storage+for+Feelings+Null+Folder"
  },
  {
    id: "demo-014",
    title: "Kitchen Light Jazz",
    artist: "Small Hours Trio",
    year: "2011",
    genre: "Jazz",
    coverImage: createDemoAlbumCover("KJ", "#16120c", "#f0c84b", "#9b9690"),
    description: "Warm, sparse trio sketches that sound like dishes drying after midnight.",
    bandcampUrl: "https://bandcamp.com/search?q=Kitchen%20Light%20Jazz%20Small%20Hours%20Trio",
    spotifyUrl: "https://open.spotify.com/search/Kitchen%20Light%20Jazz%20Small%20Hours%20Trio",
    youtubeSearchUrl: "https://www.youtube.com/results?search_query=Kitchen+Light+Jazz+Small+Hours+Trio"
  },
  {
    id: "demo-015",
    title: "Copy Shop Romance",
    artist: "Toner Hearts",
    year: "2018",
    genre: "Synthpop",
    coverImage: createDemoAlbumCover("CR", "#2b0030", "#ff7bd5", "#ffffff"),
    description: "Bright synth songs with office-machine nostalgia and shy melodies.",
    bandcampUrl: "https://bandcamp.com/search?q=Copy%20Shop%20Romance%20Toner%20Hearts",
    spotifyUrl: "https://open.spotify.com/search/Copy%20Shop%20Romance%20Toner%20Hearts",
    youtubeSearchUrl: "https://www.youtube.com/results?search_query=Copy+Shop+Romance+Toner+Hearts"
  },
  {
    id: "demo-016",
    title: "Bus Window Cinema",
    artist: "Route 43",
    year: "2021",
    genre: "Trip-hop",
    coverImage: createDemoAlbumCover("43", "#102033", "#5ee6ff", "#f0c84b"),
    description: "Smoky beats and passing lights, made for watching the city through glass.",
    bandcampUrl: "https://bandcamp.com/search?q=Bus%20Window%20Cinema%20Route%2043",
    spotifyUrl: "https://open.spotify.com/search/Bus%20Window%20Cinema%20Route%2043",
    youtubeSearchUrl: "https://www.youtube.com/results?search_query=Bus+Window+Cinema+Route+43"
  },
  {
    id: "demo-017",
    title: "Postcard From Nowhere",
    artist: "The Unsent",
    year: "2013",
    genre: "Folk",
    coverImage: createDemoAlbumCover("PN", "#f2d7a5", "#3a2a1b", "#b28a1d"),
    description: "Quiet acoustic songs with the feeling of messages written and never mailed.",
    bandcampUrl: "https://bandcamp.com/search?q=Postcard%20From%20Nowhere%20The%20Unsent",
    spotifyUrl: "https://open.spotify.com/search/Postcard%20From%20Nowhere%20The%20Unsent",
    youtubeSearchUrl: "https://www.youtube.com/results?search_query=Postcard+From+Nowhere+The+Unsent"
  },
  {
    id: "demo-018",
    title: "Arcade Carpet",
    artist: "Token Machine",
    year: "2017",
    genre: "Electro",
    coverImage: createDemoAlbumCover("AC", "#111111", "#ff00cc", "#00ffe5"),
    description: "Bouncy machine funk with glowing-floor nostalgia and a pocket full of coins.",
    bandcampUrl: "https://bandcamp.com/search?q=Arcade%20Carpet%20Token%20Machine",
    spotifyUrl: "https://open.spotify.com/search/Arcade%20Carpet%20Token%20Machine",
    youtubeSearchUrl: "https://www.youtube.com/results?search_query=Arcade+Carpet+Token+Machine"
  },
  {
    id: "demo-019",
    title: "Dust on the Receiver",
    artist: "Houseplant Radio",
    year: "2016",
    genre: "Psychedelic",
    coverImage: createDemoAlbumCover("DR", "#26321f", "#cadc9f", "#ffcc66"),
    description: "Wobbly guitars, soft organs, and a room that smells like warm electronics.",
    bandcampUrl: "https://bandcamp.com/search?q=Dust%20on%20the%20Receiver%20Houseplant%20Radio",
    spotifyUrl: "https://open.spotify.com/search/Dust%20on%20the%20Receiver%20Houseplant%20Radio",
    youtubeSearchUrl: "https://www.youtube.com/results?search_query=Dust+on+the+Receiver+Houseplant+Radio"
  },
  {
    id: "demo-020",
    title: "Underpass Choir",
    artist: "Concrete Echo",
    year: "2024",
    genre: "Experimental Rock",
    coverImage: createDemoAlbumCover("UC", "#101214", "#d8d2c7", "#f0c84b"),
    description: "Echoing vocals, heavy room sound, and drums that feel recorded below street level.",
    bandcampUrl: "https://bandcamp.com/search?q=Underpass%20Choir%20Concrete%20Echo",
    spotifyUrl: "https://open.spotify.com/search/Underpass%20Choir%20Concrete%20Echo",
    youtubeSearchUrl: "https://www.youtube.com/results?search_query=Underpass+Choir+Concrete+Echo"
  }
];
const objectDrawerItems = [
  {
    name: "Cassette tape",
    emoji: "📼",
    year: "1963",
    short: "A small plastic object that carried entire teenage worlds.",
    long: "The cassette tape made music portable, personal, and recordable. It turned bedrooms, buses, and night walks into private soundtracks."
  },
  {
    name: "Lava lamp",
    emoji: "🫧",
    year: "1963",
    short: "A glowing object for doing absolutely nothing productively.",
    long: "The lava lamp became a symbol of slow movement, color, and hypnotic stillness. It belongs in rooms where time is allowed to soften."
  },
  {
    name: "View-Master",
    emoji: "🔴",
    year: "1939",
    short: "A tiny window into fake depth and real wonder.",
    long: "The View-Master made photographs feel like places. Clicking through the reel felt like controlling a private slideshow from another world."
  },
  {
    name: "Floppy disk",
    emoji: "💾",
    year: "1971",
    short: "A save icon that used to be a real object.",
    long: "The floppy disk carried schoolwork, games, and fragile little files. It survives now as a symbol for saving, even for people who never touched one."
  },
  {
    name: "Pocket calculator",
    emoji: "🧮",
    year: "1970",
    short: "A tiny machine that made numbers portable.",
    long: "Pocket calculators turned math into something you could carry. They made classrooms quieter, desks cleaner, and little screens feel powerful."
  },
  {
    name: "CRT monitor",
    emoji: "📺",
    year: "1897",
    short: "A heavy glowing box with a soft electronic hum.",
    long: "CRT screens shaped early computer rooms, video games, and late-night television. Their glow feels less sharp than modern screens, almost like light with dust in it."
  },
  {
    name: "Walkman",
    emoji: "🎧",
    year: "1979",
    short: "A private soundtrack machine for walking around.",
    long: "The Walkman changed listening into something personal and mobile. It made streets, buses, and bedrooms feel cinematic."
  },
  {
    name: "Postcard",
    emoji: "💌",
    year: "1840",
    short: "A small message that travels without an envelope.",
    long: "Postcards are half image, half note. They are proof that a place was seen, remembered, and sent across distance."
  },
  {
    name: "Rubik's Cube",
    emoji: "🧊",
    year: "1974",
    short: "A pocket-sized argument with color and logic.",
    long: "The Rubik's Cube is a puzzle, toy, and tiny sculpture. It makes confusion visible, then asks your hands to solve it."
  },
  {
    name: "Polaroid camera",
    emoji: "📷",
    year: "1948",
    short: "A camera that gave you the memory immediately.",
    long: "Polaroids made photography feel physical and instant. The picture arrived slowly in your hand, like the moment was developing a second time."
  },
  {
    name: "Mechanical pencil",
    emoji: "✏️",
    year: "1822",
    short: "A pencil that never needed sharpening, only refilling.",
    long: "The mechanical pencil feels like a small promise of precision. It belongs in notebooks, margins, and plans that are not finished yet."
  },
  {
    name: "Keychain flashlight",
    emoji: "🔦",
    year: "1899",
    short: "Emergency light pretending to be a toy.",
    long: "A keychain flashlight is tiny preparedness. It turns pockets into toolkits and dark corners into temporary discoveries."
  },
  {
    name: "Fountain pen",
    emoji: "🖋",
    year: "1884",
    short: "A writing object that makes handwriting feel deliberate.",
    long: "Fountain pens slow writing down. They make words feel drawn instead of typed, and every page keeps a little trace of pressure and rhythm."
  },
  {
    name: "Pocket radio",
    emoji: "📻",
    year: "1954",
    short: "A small receiver for voices arriving from nowhere.",
    long: "Pocket radios made invisible broadcasts personal. You could carry news, songs, weather, and static through the world."
  },
  {
    name: "Matchbox",
    emoji: "🔥",
    year: "1827",
    short: "A tiny drawer full of controlled sparks.",
    long: "A matchbox is simple, useful, and strangely dramatic. One scrape turns stored potential into light."
  },
  {
    name: "Glass marble",
    emoji: "🔮",
    year: "1800s",
    short: "A tiny planet made for pockets and floors.",
    long: "Glass marbles are old toys with cosmic energy. They roll, click, vanish under furniture, and look more important than they are."
  },
  {
    name: "Yo-yo",
    emoji: "🪀",
    year: "1928",
    short: "A toy that leaves and returns, if you ask correctly.",
    long: "The yo-yo is repetition turned into play. It rewards timing, patience, and the small drama of coming back."
  },
  {
    name: "Pocket notebook",
    emoji: "📓",
    year: "1900s",
    short: "A place for thoughts too small to become documents.",
    long: "Pocket notebooks catch lists, sketches, passwords, dreams, and half-ideas. They are portable memory before memory becomes organized."
  },
  {
    name: "Alarm clock",
    emoji: "⏰",
    year: "1787",
    short: "A small machine built to interrupt dreams.",
    long: "Alarm clocks are domestic time machines with one job: pull you out of wherever sleep took you."
  },
  {
    name: "Slide rule",
    emoji: "📏",
    year: "1622",
    short: "A calculator made of lines, hands, and trust.",
    long: "Before electronic calculators, slide rules helped people estimate and engineer. They made math tactile, sliding numbers against each other."
  },
  {
    name: "Pager",
    emoji: "📟",
    year: "1949",
    short: "A tiny device that only knew how to summon you.",
    long: "Pagers were urgent little messengers. They carried numbers and signals before phones became everything."
  },
  {
    name: "Compass",
    emoji: "🧭",
    year: "1100s",
    short: "A needle with an opinion about north.",
    long: "A compass is quiet direction. It does not tell you where to go, only where you are facing."
  },
  {
    name: "Game Boy cartridge",
    emoji: "🎮",
    year: "1989",
    short: "A grey rectangle full of another world.",
    long: "Game Boy cartridges turned games into objects you could trade, lend, label, lose, and rediscover in a drawer."
  },
  {
    name: "Library card",
    emoji: "🏷",
    year: "1800s",
    short: "A small permission slip for borrowing worlds.",
    long: "Library cards are humble access keys. They let a person walk into a building and leave with stories, manuals, maps, and secrets."
  },
  {
    name: "Tea strainer",
    emoji: "🍵",
    year: "1800s",
    short: "A small filter for leaves and pause.",
    long: "Tea strainers are quiet tools. They separate the rough from the drinkable and make a small ritual out of waiting."
  },
  {
    name: "Zippo lighter",
    emoji: "🧯",
    year: "1933",
    short: "A metal click, a flame, and a tiny performance.",
    long: "Zippo lighters became objects of habit and style. The sound matters almost as much as the flame."
  },
  {
    name: "Vinyl record",
    emoji: "💿",
    year: "1948",
    short: "A flat black circle that asks you to listen in order.",
    long: "Vinyl records make music physical and sequential. You turn them over, handle the sleeve, and give the album a little ceremony."
  },
  {
    name: "Snow globe",
    emoji: "🌨",
    year: "1878",
    short: "A tiny weather system trapped in glass.",
    long: "Snow globes are souvenirs with their own climate. Shake one and a still place briefly remembers motion."
  },
  {
    name: "Paperclip",
    emoji: "📎",
    year: "1899",
    short: "A bent wire that keeps loose things together.",
    long: "The paperclip is almost nothing, but it solves a real problem. It is small proof that design can be quiet."
  },
  {
    name: "Transit token",
    emoji: "🪙",
    year: "1830s",
    short: "A coin-like object for moving through a city.",
    long: "Transit tokens turned travel into a pocket object. They carried the promise of a ride before cards and phones absorbed them."
  }
];
const starterDrawerLinks = [
  {
    name: "WindowSwap",
    url: "https://www.window-swap.com/",
    note: "Look through someone else's window for a minute."
  },
  {
    name: "Radio Garden",
    url: "https://radio.garden/",
    note: "Spin the globe and find a station."
  },
  {
    name: "NASA APOD",
    url: "https://apod.nasa.gov/apod/",
    note: "Astronomy picture of the day."
  },
  {
    name: "TypeRacer",
    url: "https://play.typeracer.com/?universe=jokes",
    note: "Race through joke typing tests."
  },
  {
    name: "Every Noise at Once",
    url: "https://everynoise.com/",
    note: "A map of music genres."
  },
  {
    name: "Random Internet",
    url: "https://theuselessweb.com/",
    note: "One click, strange place."
  }
];
const starterPosts = [
  {
    title: "First Website Chaos",
    createdAt: "2026-06-13T12:00:00.000Z",
    image: "images/first-post-placeholder.svg",
    bodyHTML: "<p>I built this while half-understanding what I was doing. The weird part is that it still worked, which might be the most motivating thing about learning web development.</p>",
    tags: ["web dev", "chaos log"],
    isStarter: true
  },
  {
    title: "Why GitHub Pages Feels Weird",
    createdAt: "2026-06-14T12:00:00.000Z",
    image: "images/second-post-placeholder.svg",
    bodyHTML: "<p>Free hosting is good. Syncing across devices is tomorrow's problem. For now, getting a real link on the internet already feels like a small portal opened.</p>",
    tags: ["notes", "publishing"],
    isStarter: true
  },
  {
    title: "Local Storage Is Not Magic",
    createdAt: "2026-06-14T15:00:00.000Z",
    image: "images/third-post-placeholder.svg",
    bodyHTML: "<p>Things saved in one browser stay in that browser. It is useful for a private room, but it also explains why shared websites eventually need databases, backends, or publishing workflows.</p>",
    tags: ["javascript", "learning"],
    isStarter: true
  }
];
const rabbitHoleItems = [
  // Add more curated external rabbit holes here later. These should feel discovered, not recommended.
  {
    title: "WindowSwap",
    type: "quiet window",
    mood: "elsewhere",
    description: "Look through someone else's window for a minute and remember the internet can still be gentle.",
    link: "https://www.window-swap.com/"
  },
  {
    title: "NASA Astronomy Picture",
    type: "space object",
    mood: "small human",
    description: "A telescope postcard from the universe. Big sky, tiny browser tab.",
    link: "https://apod.nasa.gov/apod/"
  },
  {
    title: "Radio Garden",
    type: "sound globe",
    mood: "drifting",
    description: "Spin the world and drop into a radio station somewhere far from your room.",
    link: "https://radio.garden/"
  },
  {
    title: "Every Noise at Once",
    type: "music map",
    mood: "overwhelmed but curious",
    description: "A huge genre constellation. Click carefully or disappear for an hour.",
    link: "https://everynoise.com/"
  },
  {
    title: "TypeRacer Jokes",
    type: "typing toy",
    mood: "hands awake",
    description: "Race through dumb jokes with your keyboard. Low stakes, weirdly effective.",
    link: "https://play.typeracer.com/?universe=jokes"
  },
  {
    title: "The Useless Web",
    type: "random door",
    mood: "why not",
    description: "A button that throws you at a strange website. This is basically internet archaeology.",
    link: "https://theuselessweb.com/"
  },
  {
    title: "Internet Archive",
    type: "old web shelf",
    mood: "lost and found",
    description: "A giant attic of books, pages, software, audio, video, and internet ghosts.",
    link: "https://archive.org/"
  },
  {
    title: "Atlas Obscura",
    type: "strange place index",
    mood: "map with secrets",
    description: "A doorway into odd places, small museums, local myths, and weird geography.",
    link: "https://www.atlasobscura.com/"
  },
  {
    title: "Public Domain Review",
    type: "beautiful archive",
    mood: "dusty wonder",
    description: "Old images, strange books, forgotten ideas, and public-domain rabbit holes.",
    link: "https://publicdomainreview.org/"
  },
  {
    title: "Library of Congress Digital Collections",
    type: "public archive",
    mood: "paper corridors",
    description: "Maps, photographs, recordings, newspapers, and old documents from a very large cabinet.",
    link: "https://www.loc.gov/collections/"
  }
];
const roomDestinations = [
  // Add more internal room destinations here later. Each room has the same chance of being chosen.
  {
    title: "Rabbit Hole Machine",
    target: "rabbit-hole.html",
    description: "Let one strange item choose the next direction."
  },
  {
    title: "Object Drawer",
    target: "object-drawer.html",
    description: "Open a drawer and inspect one strange object."
  },
  {
    title: "CD Player",
    target: "blind-listening.html",
    description: "Try the cover-first demo disc player."
  },
  {
    title: "Movie Shelf",
    target: "movie-shelf.html",
    description: "Look at a permanent shelf of film placeholders."
  },
  {
    title: "Hidden Signals",
    target: "hidden-signals.html",
    description: "Check the locked files that do not explain themselves yet."
  },
  {
    title: "Scratchpad",
    target: "scratchpad.html",
    description: "Write private notes saved only in this browser."
  },
  {
    title: "Coffee Break",
    target: "coffee-break.html",
    description: "Take a tiny pause inside the room."
  },
  {
    title: "Groovy Radio",
    target: "radio.html",
    description: "Open the sound corner."
  }
];
const roomTransitionMessages = [
  "Opening door...",
  "Wandering...",
  "Looking around...",
  "Turning the corner...",
  "Following a strange sound...",
  "Entering another room..."
];
const rabbitHoleTransitionMessages = [
  "Opening...",
  "Following the trail...",
  "Digging deeper...",
  "One more click...",
  "You probably shouldn't..."
];
const movieShelfItems = [
  // Add permanent movie shelf items here later.
  {
    title: "Midnight Test Film",
    year: "1979",
    mood: "rain on glass",
    description: "Placeholder for a strange late-night film that belongs in the room."
  },
  {
    title: "The Apartment Signal",
    year: "1986",
    mood: "CRT glow",
    description: "Placeholder for something quiet, slow, and slightly haunted."
  },
  {
    title: "Static Over the City",
    year: "1994",
    mood: "nocturnal",
    description: "Placeholder for a city-at-night movie shelf entry."
  },
  {
    title: "Second-Hand Planet",
    year: "2001",
    mood: "found object",
    description: "Placeholder for a film discovered like an old disc in a drawer."
  }
];
const hiddenSignalFolders = [
  // Add more public-archive and curiosity files here later. Keep entries neutral and source-first.
  {
    title: "UFO / UAP Files",
    code: "drawer-01",
    description: "Public aviation records, official indexes, and sky-report placeholders.",
    files: [
      {
        title: "Project Blue Book Index Card",
        type: "public archive placeholder",
        description: "A demo card for an aviation report index. Future entries can link to specific public records or archival scans.",
        source: "National Archives",
        sourceUrl: "https://www.archives.gov/research/military/air-force/ufos"
      },
      {
        title: "Unidentified Aerial Report Summary",
        type: "record summary placeholder",
        description: "A neutral summary slot for an official public report. No conclusions, just where the record came from and what it contains.",
        source: "Public record placeholder",
        sourceUrl: "https://www.archives.gov/research/military/air-force/ufos"
      },
      {
        title: "Sky Log Cross-Reference",
        type: "index note placeholder",
        description: "A small reference card for connecting dates, locations, and source collections without making claims about the contents.",
        source: "Archive index placeholder",
        sourceUrl: "https://www.archives.gov/"
      }
    ]
  },
  {
    title: "CIA Reading Room",
    code: "drawer-02",
    description: "Declassified reading-room finds, old reports, and document-card placeholders.",
    files: [
      {
        title: "Reading Room Search Slip",
        type: "declassified index placeholder",
        description: "A demo entry for a document found through a public reading room search. Future versions can store exact titles and document links.",
        source: "CIA Reading Room",
        sourceUrl: "https://www.cia.gov/readingroom/"
      },
      {
        title: "Cold War Translation Note",
        type: "document placeholder",
        description: "A calm little file card for translated reports, memos, or historical context documents from public collections.",
        source: "CIA Reading Room",
        sourceUrl: "https://www.cia.gov/readingroom/"
      },
      {
        title: "Declassified Memo Stub",
        type: "memo placeholder",
        description: "A template for a future memo card with title, date, release source, and a short plain-language note.",
        source: "Public declassification archive",
        sourceUrl: "https://www.cia.gov/readingroom/"
      }
    ]
  },
  {
    title: "FBI Vault",
    code: "drawer-03",
    description: "Public vault collections, old case files, and record placeholders.",
    files: [
      {
        title: "Vault Collection Cover Sheet",
        type: "public file placeholder",
        description: "A demo cover sheet for a public vault collection. This section is for records as documents, not theories.",
        source: "FBI Vault",
        sourceUrl: "https://vault.fbi.gov/"
      },
      {
        title: "Released File Note",
        type: "archive note placeholder",
        description: "A future slot for explaining what a released file is, where it lives, and why it is interesting as a historical object.",
        source: "FBI Vault",
        sourceUrl: "https://vault.fbi.gov/"
      },
      {
        title: "Public Record Locator",
        type: "index placeholder",
        description: "A tiny locator card for keeping public file links organized inside the room.",
        source: "Public vault index",
        sourceUrl: "https://vault.fbi.gov/"
      }
    ]
  },
  {
    title: "Strange Patents",
    code: "drawer-04",
    description: "Odd inventions, speculative machines, and patent curiosities.",
    files: [
      {
        title: "Mechanical Hat Diagram",
        type: "patent placeholder",
        description: "A demo patent card for a strange object with a drawing, date, inventor, and one-sentence explanation later.",
        source: "Google Patents",
        sourceUrl: "https://patents.google.com/"
      },
      {
        title: "Pocket Machine Filing",
        type: "patent index placeholder",
        description: "A future entry for an invention that feels like it belongs in the Object Drawer too.",
        source: "Patent archive placeholder",
        sourceUrl: "https://patents.google.com/"
      },
      {
        title: "Unusual Apparatus Sketch",
        type: "drawing placeholder",
        description: "A placeholder for weird-but-real patent drawings, treated as design curiosities rather than claims.",
        source: "Public patent search",
        sourceUrl: "https://patents.google.com/"
      }
    ]
  },
  {
    title: "Court Archives",
    code: "drawer-05",
    description: "Public legal-history records, court documents, and archive notes.",
    files: [
      {
        title: "Public Docket Card",
        type: "court record placeholder",
        description: "A demo slot for a public legal record with basic context and a link to the original source.",
        source: "CourtListener",
        sourceUrl: "https://www.courtlistener.com/"
      },
      {
        title: "Old Hearing Note",
        type: "archive note placeholder",
        description: "A quiet card for legal-history oddities, kept factual and sourced.",
        source: "Public court archive placeholder",
        sourceUrl: "https://www.courtlistener.com/"
      },
      {
        title: "Document Room Receipt",
        type: "record placeholder",
        description: "A template for adding future public court documents without turning the room into a news feed.",
        source: "Public records placeholder",
        sourceUrl: "https://www.courtlistener.com/"
      }
    ]
  },
  {
    title: "Number Stations",
    code: "drawer-06",
    description: "Radio logs, signal references, and shortwave curiosities.",
    files: [
      {
        title: "Shortwave Log Card",
        type: "radio log placeholder",
        description: "A demo card for a shortwave signal log. Future entries can include date, station nickname, and a source link.",
        source: "Priyom",
        sourceUrl: "https://priyom.org/"
      },
      {
        title: "Numbers Broadcast Note",
        type: "signal note placeholder",
        description: "A neutral note about a public signal record or archive page, without guessing at hidden meanings.",
        source: "Public radio archive placeholder",
        sourceUrl: "https://priyom.org/"
      },
      {
        title: "Interval Signal Reference",
        type: "audio reference placeholder",
        description: "A future place for station identifiers, recordings, and context from radio-history sources.",
        source: "Shortwave archive placeholder",
        sourceUrl: "https://priyom.org/"
      }
    ]
  },
  {
    title: "Lost Internet",
    code: "drawer-07",
    description: "Old webpages, web ruins, archived pages, and strange corners of internet history.",
    files: [
      {
        title: "Archived Homepage Snapshot",
        type: "web archive placeholder",
        description: "A demo card for an old website snapshot. Future entries can link to archived pages and explain why they feel interesting.",
        source: "Internet Archive",
        sourceUrl: "https://web.archive.org/"
      },
      {
        title: "Dead Link Specimen",
        type: "internet history placeholder",
        description: "A small file for old links, broken pages, and places that only survive through cached copies.",
        source: "Web archive placeholder",
        sourceUrl: "https://web.archive.org/"
      },
      {
        title: "Old Web Directory Note",
        type: "directory placeholder",
        description: "A future card for personal sites, handmade pages, and tiny internet museums.",
        source: "Internet Archive",
        sourceUrl: "https://archive.org/"
      }
    ]
  },
  {
    title: "Miscellaneous Curiosities",
    code: "drawer-08",
    description: "Everything that belongs in the cabinet but refuses a clean label.",
    files: [
      {
        title: "Library Object Record",
        type: "collection placeholder",
        description: "A demo entry for a strange public collection object, catalog item, or forgotten record.",
        source: "Library of Congress",
        sourceUrl: "https://www.loc.gov/"
      },
      {
        title: "Museum Catalog Slip",
        type: "catalog placeholder",
        description: "A future place for odd catalog records, old photographs, maps, and small historical surprises.",
        source: "Public collection placeholder",
        sourceUrl: "https://www.loc.gov/"
      },
      {
        title: "Unsorted Cabinet Card",
        type: "curiosity placeholder",
        description: "A catch-all file for public curiosities that are better discovered than categorized.",
        source: "Public archive placeholder",
        sourceUrl: "https://archive.org/"
      }
    ]
  }
];
const starterThoughts = [
  {
    body: "Maybe a website can feel less like a feed and more like a room.",
    createdAt: "2026-06-15T18:30:00.000Z",
    isStarter: true
  },
  {
    body: "I like the idea that unfinished things can still have atmosphere.",
    createdAt: "2026-06-16T10:15:00.000Z",
    isStarter: true
  },
  {
    body: "Small public projects are weirdly motivating because they make learning visible.",
    createdAt: "2026-06-17T09:45:00.000Z",
    isStarter: true
  }
];

function readLocalJSON(key, fallbackValue) {
  try {
    const savedValue = localStorage.getItem(key);
    return savedValue ? JSON.parse(savedValue) : fallbackValue;
  } catch (error) {
    return fallbackValue;
  }
}

function writeLocalJSON(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (error) {
    return false;
  }
}

function readLocalString(key, fallbackValue) {
  try {
    return localStorage.getItem(key) || fallbackValue;
  } catch (error) {
    return fallbackValue;
  }
}

function writeLocalString(key, value) {
  try {
    localStorage.setItem(key, value);
    return true;
  } catch (error) {
    return false;
  }
}

function setupSiteScale() {
  const savedScale = readLocalString(siteScaleKey, defaultSiteScale);

  writeLocalString(siteScaleKey, savedScale);
  document.documentElement.style.setProperty("--site-scale", savedScale);
}

function createDemoAlbumCover(label, backgroundColor, primaryColor, secondaryColor) {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600">
      <rect width="600" height="600" fill="${backgroundColor}"/>
      <circle cx="455" cy="120" r="150" fill="${secondaryColor}" opacity="0.35"/>
      <circle cx="145" cy="470" r="190" fill="${primaryColor}" opacity="0.22"/>
      <path d="M70 390 C170 300 250 450 340 335 S505 260 555 330" fill="none" stroke="${primaryColor}" stroke-width="20" opacity="0.72"/>
      <rect x="72" y="72" width="456" height="456" fill="none" stroke="${primaryColor}" stroke-width="8" opacity="0.75"/>
      <text x="50%" y="52%" dominant-baseline="middle" text-anchor="middle" fill="${primaryColor}" font-family="Arial, sans-serif" font-size="116" font-weight="700">${label}</text>
    </svg>
  `;

  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

function getPosts() {
  return readLocalJSON(postsKey, []);
}

function savePosts(posts) {
  return writeLocalJSON(postsKey, posts);
}

function getSavedArticleIds() {
  return readLocalJSON(savedArticlesKey, []);
}

function saveArticleIds(articleIds) {
  return writeLocalJSON(savedArticlesKey, articleIds);
}

function getThoughts() {
  return readLocalJSON(thoughtsKey, []);
}

function saveThoughts(thoughts) {
  return writeLocalJSON(thoughtsKey, thoughts);
}

function getDrawerLinks() {
  return readLocalJSON(drawerLinksKey, []);
}

function saveDrawerLinks(links) {
  return writeLocalJSON(drawerLinksKey, links);
}

function getPostId(post) {
  return post.isStarter ? `starter-${post.starterIndex}` : `local-${post.localIndex}`;
}

function getDisplayPosts() {
  const localPosts = getPosts().map((post, index) => ({
    ...post,
    localIndex: index,
    isStarter: false
  }));

  const builtInPosts = starterPosts.map((post, index) => ({
    ...post,
    starterIndex: index
  }));

  return [...localPosts, ...builtInPosts].sort((firstPost, secondPost) => {
    return new Date(secondPost.createdAt) - new Date(firstPost.createdAt);
  });
}

function formatDate(dateText) {
  const date = new Date(dateText);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = String(date.getFullYear()).slice(-2);
  return `${day}/${month}/${year}`;
}

function escapeHTML(text) {
  return text
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function stripHTML(html) {
  const container = document.createElement("div");
  container.innerHTML = html;
  return container.textContent || "";
}

function sanitizeHTML(html) {
  const template = document.createElement("template");
  template.innerHTML = html;
  const allowedTags = ["A", "B", "BLOCKQUOTE", "BR", "DIV", "EM", "H2", "H3", "I", "LI", "OL", "P", "SPAN", "STRONG", "U", "UL"];
  const allowedStyles = ["font-weight", "font-style", "text-decoration", "text-align"];

  template.content.querySelectorAll("*").forEach((element) => {
    if (!allowedTags.includes(element.tagName)) {
      element.replaceWith(...element.childNodes);
      return;
    }

    [...element.attributes].forEach((attribute) => {
      const isSafeLink = element.tagName === "A" && attribute.name === "href" && attribute.value.startsWith("https://");
      const isSafeStyle = attribute.name === "style";

      if (isSafeStyle) {
        const keptStyles = element
          .getAttribute("style")
          .split(";")
          .map((style) => style.trim())
          .filter((style) => allowedStyles.includes(style.split(":")[0].trim()))
          .join("; ");

        if (keptStyles) {
          element.setAttribute("style", keptStyles);
        } else {
          element.removeAttribute("style");
        }
      } else if (!isSafeLink) {
        element.removeAttribute(attribute.name);
      }
    });
  });

  return template.innerHTML;
}

function getPostBodyHTML(post) {
  return post.bodyHTML || `<p>${escapeHTML(post.body || "")}</p>`;
}

function getReadingTime(text) {
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(words / 200));
  return `${minutes} min read`;
}

function getPostMood(index) {
  const moods = [
    "confused but building",
    "small win unlocked",
    "breaking things politely",
    "notes from the mess",
    "half lost, still moving"
  ];
  return moods[index % moods.length];
}

function getPostTags(post, index) {
  if (post.tags && post.tags.length > 0) {
    return post.tags;
  }

  const tagSets = [
    ["web dev", "chaos log"],
    ["notes", "learning"],
    ["project", "build log"],
    ["debugging", "tiny wins"]
  ];
  return tagSets[index % tagSets.length];
}

function createPreview(post, index) {
  const plainBody = stripHTML(getPostBodyHTML(post));
  const previewText = plainBody.slice(0, 120);
  const imageSource = post.image || placeholderImage;
  const article = document.createElement("article");
  const tags = getPostTags(post, index);
  article.className = "post-card";
  const postLink = post.isStarter ? `post.html?starter=${post.starterIndex}` : `post.html?id=${post.localIndex}`;
  const postId = getPostId(post);
  const isSaved = getSavedArticleIds().includes(postId);
  article.dataset.postId = postId;
  article.dataset.href = postLink;
  article.tabIndex = 0;
  article.setAttribute("role", "link");
  const editControls = post.isStarter
    ? ""
    : `
      <div>
        <a class="edit-post" href="write.html?id=${post.localIndex}">Edit</a>
        <button class="delete-post" type="button" data-index="${post.localIndex}">Delete</button>
      </div>
    `;
  article.innerHTML = `
    <button class="save-post" type="button" data-post-id="${postId}" aria-pressed="${isSaved}">
      ${isSaved ? "★" : "☆"}
    </button>
    <div class="post-heading">
      <div class="post-marker">
        <time datetime="${post.createdAt}">${formatDate(post.createdAt)}</time>
        <img class="post-preview-image" src="${escapeHTML(imageSource)}" alt="">
      </div>
      <div>
        <h2>${escapeHTML(post.title)}</h2>
      </div>
    </div>
    <div class="post-meta">
      ${tags.map((tag) => `<span class="tag">${escapeHTML(tag)}</span>`).join("")}
      <span>${getReadingTime(plainBody)}</span>
    </div>
    <p class="mood">Mood: ${getPostMood(index)}</p>
    <p>${escapeHTML(previewText)}${plainBody.length > 120 ? "..." : ""}</p>
    <div class="post-actions">
      ${editControls}
      <a class="read-more" href="${postLink}">Open item...</a>
    </div>
  `;
  article.addEventListener("click", (event) => {
    if (event.target.closest("a, button")) {
      return;
    }

    window.location.href = postLink;
  });
  article.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      window.location.href = postLink;
    }
  });
  return article;
}

function isNewPost(post) {
  if (post.isStarter) {
    return true;
  }

  const oneMonth = 30 * 24 * 60 * 60 * 1000;
  const postAge = Date.now() - new Date(post.createdAt).getTime();
  return postAge < oneMonth;
}

function deletePost(index) {
  const posts = getPosts();
  posts.splice(index, 1);
  savePosts(posts);
  window.location.reload();
}

function toggleSavedArticle(postId) {
  const savedArticleIds = getSavedArticleIds();
  const isSaved = savedArticleIds.includes(postId);
  const nextSavedArticleIds = isSaved
    ? savedArticleIds.filter((savedId) => savedId !== postId)
    : [...savedArticleIds, postId];

  saveArticleIds(nextSavedArticleIds);

  document.querySelectorAll(`.save-post[data-post-id="${postId}"]`).forEach((button) => {
    button.textContent = isSaved ? "☆" : "★";
    button.setAttribute("aria-pressed", String(!isSaved));
  });
}

function showSavedPosts() {
  const savedPostsSection = document.querySelector("#saved-posts");
  const olderSavedPostsSection = document.querySelector("#older-saved-posts");
  if (!savedPostsSection) {
    return;
  }

  const posts = getDisplayPosts();
  const newPosts = posts
    .map((post, index) => ({ post, index }))
    .filter((item) => isNewPost(item.post));
  const olderPosts = posts
    .map((post, index) => ({ post, index }))
    .filter((item) => !isNewPost(item.post));

  savedPostsSection.innerHTML = "<h2>Rabbit holes</h2>";
  if (newPosts.length > 0) {
    newPosts.forEach((item) => {
      savedPostsSection.appendChild(createPreview(item.post, item.index));
    });
  }

  if (olderSavedPostsSection && olderPosts.length > 0) {
    olderSavedPostsSection.innerHTML = "<h2>Archive shelf</h2>";
    olderPosts.forEach((item) => {
      olderSavedPostsSection.appendChild(createPreview(item.post, item.index));
    });
  }

  document.querySelectorAll(".delete-post").forEach((button) => {
    button.addEventListener("click", () => {
      deletePost(Number(button.dataset.index));
    });
  });

  document.querySelectorAll(".save-post").forEach((button) => {
    button.addEventListener("click", () => {
      toggleSavedArticle(button.dataset.postId);
    });
  });
}

function showPrivateNotes() {
  const notesList = document.querySelector("#private-notes-list");
  if (!notesList) {
    return;
  }

  const notes = getPosts();
  if (notes.length === 0) {
    notesList.innerHTML = `<p class="empty-posts">No private notes yet.</p>`;
    return;
  }

  notesList.innerHTML = notes.map((note, index) => {
    const plainBody = stripHTML(getPostBodyHTML(note));
    const preview = plainBody.slice(0, 140);

    return `
      <article class="scratchpad-note-card">
        <time datetime="${note.createdAt}">${formatDate(note.createdAt)}</time>
        <h3>${escapeHTML(note.title)}</h3>
        <p>${escapeHTML(preview)}${plainBody.length > 140 ? "..." : ""}</p>
        <div class="post-actions">
          <a class="edit-post" href="write.html?id=${index}">Edit</a>
          <button class="delete-post" type="button" data-index="${index}">Delete</button>
          <a class="read-more" href="post.html?id=${index}">Open note...</a>
        </div>
      </article>
    `;
  }).join("");

  notesList.querySelectorAll(".delete-post").forEach((button) => {
    button.addEventListener("click", () => {
      deletePost(Number(button.dataset.index));
    });
  });
}

function setupPostForm() {
  const form = document.querySelector("#post-form");
  if (!form) {
    return;
  }

  let hasUnsavedChanges = false;
  const params = new URLSearchParams(window.location.search);
  const hasPostId = params.has("id");
  const postId = Number(params.get("id"));
  const posts = getPosts();
  const postToEdit = hasPostId ? posts[postId] : null;
  const titleInput = document.querySelector("#post-title");
  const imageInput = document.querySelector("#post-image");
  const imagePreview = document.querySelector("#image-preview");
  const bodyInput = document.querySelector("#post-body");
  const saveButton = form.querySelector("button");
  let selectedImage = postToEdit ? postToEdit.image || "" : "";

  function showImagePreview(imageSource) {
    if (!imagePreview) {
      return;
    }

    if (imageSource) {
      imagePreview.src = imageSource;
      imagePreview.hidden = false;
    } else {
      imagePreview.removeAttribute("src");
      imagePreview.hidden = true;
    }
  }

  if (postToEdit) {
    titleInput.value = postToEdit.title;
    bodyInput.innerHTML = getPostBodyHTML(postToEdit);
    showImagePreview(selectedImage);
    saveButton.textContent = "Update note";
  } else {
    titleInput.value = "";
    bodyInput.innerHTML = "";
    showImagePreview("");
  }

  imageInput.addEventListener("change", () => {
    const file = imageInput.files[0];
    if (!file) {
      selectedImage = "";
      showImagePreview("");
      return;
    }

    const reader = new FileReader();
    reader.addEventListener("load", () => {
      selectedImage = reader.result;
      showImagePreview(selectedImage);
      hasUnsavedChanges = true;
    });
    reader.readAsDataURL(file);
  });

  form.addEventListener("input", () => {
    hasUnsavedChanges = true;
  });

  window.addEventListener("beforeunload", (event) => {
    if (!hasUnsavedChanges) {
      return;
    }

    event.preventDefault();
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    hasUnsavedChanges = false;
    const cleanBody = sanitizeHTML(bodyInput.innerHTML);

    if (stripHTML(cleanBody).trim() === "") {
      hasUnsavedChanges = true;
      bodyInput.focus();
      return;
    }

    const updatedPost = {
      title: titleInput.value,
      image: selectedImage,
      bodyHTML: cleanBody,
      createdAt: new Date().toISOString()
    };

    if (postToEdit) {
      updatedPost.createdAt = postToEdit.createdAt;
      posts[postId] = updatedPost;
    } else {
      posts.unshift(updatedPost);
    }

    try {
      savePosts(posts);
      window.location.href = "scratchpad.html";
    } catch (error) {
      hasUnsavedChanges = true;
      alert("That post is too large to save in the browser. Try using a smaller image.");
    }
  });
}

function countWords(text) {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

function setupThoughtForm() {
  const form = document.querySelector("#thought-form");
  if (!form) {
    return;
  }

  const thoughtBody = document.querySelector("#thought-body");
  const wordCount = document.querySelector("#thought-word-count");

  function updateWordCount() {
    const totalWords = countWords(thoughtBody.value);
    wordCount.textContent = totalWords;
    wordCount.classList.toggle("over-limit", totalWords > 200);
  }

  thoughtBody.addEventListener("input", updateWordCount);

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const thoughtText = thoughtBody.value.trim();
    const totalWords = countWords(thoughtText);

    if (!thoughtText || totalWords > 200) {
      thoughtBody.focus();
      updateWordCount();
      return;
    }

    const thoughts = getThoughts();
    thoughts.unshift({
      body: thoughtText,
      createdAt: new Date().toISOString()
    });

    saveThoughts(thoughts);
    window.location.href = "collective-thinking.html";
  });

  updateWordCount();
}

function showCollectiveThoughts() {
  const thoughtList = document.querySelector("#collective-thinking-list");
  if (!thoughtList) {
    return;
  }

  const isStaticPreview = thoughtList.dataset.staticOnly === "true";
  const thoughts = isStaticPreview
    ? starterThoughts.slice(0, 3)
    : [...getThoughts(), ...starterThoughts];

  if (thoughts.length === 0) {
    thoughtList.innerHTML = `<p class="empty-posts">No thoughts yet.</p>`;
    return;
  }

  thoughtList.innerHTML = thoughts.map((thought) => `
    <article class="thought-card">
      <time datetime="${thought.createdAt}">${formatDate(thought.createdAt)}</time>
      <p>${escapeHTML(thought.body)}</p>
      ${thought.isStarter ? `<p class="hint">room note</p>` : ""}
    </article>
  `).join("");
}

function renderInternetDrawer() {
  const drawerLinks = document.querySelector("#internet-drawer-links");
  if (!drawerLinks) {
    return;
  }

  const customLinks = getDrawerLinks();
  const links = [
    ...starterDrawerLinks.map((link) => ({ ...link, isStarter: true })),
    ...customLinks.map((link, index) => ({ ...link, customIndex: index }))
  ];

  drawerLinks.innerHTML = links.map((link) => `
    <article class="drawer-link-card">
      <div>
        <h3>${escapeHTML(link.name)}</h3>
        <p>${escapeHTML(link.note || link.url)}</p>
      </div>
      <div class="drawer-link-actions">
        <a class="button-link" href="${escapeHTML(link.url)}" target="_blank" rel="noopener noreferrer">Open</a>
        ${link.isStarter ? "" : `<button class="remove-drawer-link" type="button" data-index="${link.customIndex}">Remove</button>`}
      </div>
    </article>
  `).join("");

  document.querySelectorAll(".remove-drawer-link").forEach((button) => {
    button.addEventListener("click", () => {
      const nextLinks = getDrawerLinks();
      nextLinks.splice(Number(button.dataset.index), 1);
      saveDrawerLinks(nextLinks);
      renderInternetDrawer();
    });
  });
}

function setupInternetDrawerForm() {
  const form = document.querySelector("#internet-drawer-form");
  if (!form) {
    return;
  }

  const nameInput = document.querySelector("#drawer-link-name");
  const urlInput = document.querySelector("#drawer-link-url");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = nameInput.value.trim();
    const url = urlInput.value.trim();

    if (!name || !url) {
      return;
    }

    try {
      const parsedUrl = new URL(url);
      if (!["http:", "https:"].includes(parsedUrl.protocol)) {
        urlInput.focus();
        return;
      }
    } catch (error) {
      urlInput.focus();
      return;
    }

    const links = getDrawerLinks();
    links.push({ name, url, note: "Added by you." });
    saveDrawerLinks(links);
    form.reset();
    renderInternetDrawer();
  });
}

function getBlindListeningHistory() {
  return readLocalJSON(blindListeningHistoryKey, []);
}

function saveBlindListeningHistory(history) {
  return writeLocalJSON(blindListeningHistoryKey, history);
}

function getBlindDiscoveredAlbums() {
  return readLocalJSON(blindDiscoveredAlbumsKey, []);
}

function saveBlindDiscoveredAlbums(albumIds) {
  return writeLocalJSON(blindDiscoveredAlbumsKey, albumIds);
}

function getBlindFavoriteAlbums() {
  return readLocalJSON(blindFavoriteAlbumsKey, []);
}

function saveBlindFavoriteAlbums(albumIds) {
  return writeLocalJSON(blindFavoriteAlbumsKey, albumIds);
}

function getRandomBlindAlbum(currentAlbumId) {
  const availableAlbums = blindAlbums.filter((album) => album.id !== currentAlbumId);
  return availableAlbums[Math.floor(Math.random() * availableAlbums.length)] || blindAlbums[0];
}

function recordBlindReveal(album) {
  const history = getBlindListeningHistory();
  history.unshift({
    albumId: album.id,
    action: "reveal",
    createdAt: new Date().toISOString()
  });
  saveBlindListeningHistory(history.slice(0, 100));

  const discoveredAlbums = getBlindDiscoveredAlbums();
  if (!discoveredAlbums.includes(album.id)) {
    saveBlindDiscoveredAlbums([...discoveredAlbums, album.id]);
  }
}

function toggleBlindFavorite(album) {
  const favoriteAlbums = getBlindFavoriteAlbums();
  const isFavorite = favoriteAlbums.includes(album.id);
  const nextFavorites = isFavorite
    ? favoriteAlbums.filter((albumId) => albumId !== album.id)
    : [...favoriteAlbums, album.id];

  saveBlindFavoriteAlbums(nextFavorites);
  return !isFavorite;
}

function setupBlindListening() {
  const card = document.querySelector("#blind-listening-card");
  if (!card) {
    return;
  }

  let currentAlbum = getRandomBlindAlbum();
  let isRevealed = false;

  function renderAlbum() {
    const favoriteAlbums = getBlindFavoriteAlbums();
    const isFavorite = favoriteAlbums.includes(currentAlbum.id);
    card.classList.toggle("is-revealed", isRevealed);
    card.innerHTML = `
      <div class="blind-cover-wrap">
        <img class="blind-cover" src="${currentAlbum.coverImage}" alt="Album cover">
      </div>
      <div class="blind-actions">
        <button id="blind-reveal" type="button">💿 Reveal</button>
        <button id="blind-skip" type="button">➡ Skip</button>
      </div>
      <div class="blind-details" ${isRevealed ? "" : "hidden"}>
        <h2>${escapeHTML(currentAlbum.title)}</h2>
        <p>${escapeHTML(currentAlbum.artist)} · ${escapeHTML(currentAlbum.year)} · ${escapeHTML(currentAlbum.genre)}</p>
        <p>${escapeHTML(currentAlbum.description)}</p>
        <div class="blind-link-row">
          <a class="button-link" href="${currentAlbum.bandcampUrl}" target="_blank" rel="noopener noreferrer">Open on Bandcamp</a>
          <a class="button-link" href="${currentAlbum.spotifyUrl}" target="_blank" rel="noopener noreferrer">Open on Spotify</a>
          <a class="button-link" href="${currentAlbum.youtubeSearchUrl}" target="_blank" rel="noopener noreferrer">Search on YouTube</a>
          <button id="blind-favorite" type="button">${isFavorite ? "Saved favorite" : "Save favorite"}</button>
        </div>
      </div>
    `;

    document.querySelector("#blind-reveal").addEventListener("click", () => {
      recordBlindReveal(currentAlbum);
      isRevealed = true;
      renderAlbum();
    });

    document.querySelector("#blind-skip").addEventListener("click", () => {
      currentAlbum = getRandomBlindAlbum(currentAlbum.id);
      isRevealed = false;
      renderAlbum();
    });

    const favoriteButton = document.querySelector("#blind-favorite");
    if (favoriteButton) {
      favoriteButton.addEventListener("click", () => {
        const isNowFavorite = toggleBlindFavorite(currentAlbum);
        favoriteButton.textContent = isNowFavorite ? "Saved favorite" : "Save favorite";
      });
    }
  }

  renderAlbum();
}

let isExploring = false;

function getRandomItem(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function showRoomTransition(destination, messages = roomTransitionMessages) {
  let overlay = document.querySelector("#room-transition-overlay");
  if (!overlay) {
    overlay = document.createElement("div");
    overlay.id = "room-transition-overlay";
    overlay.className = "room-transition-overlay";
    overlay.setAttribute("aria-live", "polite");
    document.body.append(overlay);
  }

  overlay.innerHTML = `
    <div class="room-transition-card">
      <span class="room-transition-light" aria-hidden="true"></span>
      <p>${escapeHTML(getRandomItem(messages))}</p>
      <small>${escapeHTML(destination.title)}</small>
    </div>
  `;

  window.requestAnimationFrame(() => {
    overlay.classList.add("is-visible");
  });
}

function travelToDestination(destination, messages = roomTransitionMessages) {
  if (isExploring) {
    return;
  }

  isExploring = true;
  document.body.classList.add("room-is-opening");
  showRoomTransition(destination, messages);

  window.setTimeout(() => {
    window.location.href = destination.target;
  }, 780);
}

function openRandomInternetRabbitHole() {
  const item = getRandomItem(rabbitHoleItems);
  travelToDestination({
    title: item.title,
    target: item.link
  }, rabbitHoleTransitionMessages);
}

function openRandomRoom(event) {
  if (event) {
    event.preventDefault();
  }

  travelToDestination(getRandomItem(roomDestinations), roomTransitionMessages);
}

function setupRabbitHoleMachine() {
  const openButton = document.querySelector("#open-rabbit-hole");
  const surpriseButton = document.querySelector("#surprise-me-button");

  if (openButton) {
    openButton.addEventListener("click", openRandomInternetRabbitHole);
  }

  if (surpriseButton) {
    surpriseButton.addEventListener("click", () => {
      const surpriseDestinations = [
        {
          title: "Internet Rabbit Hole",
          run: openRandomInternetRabbitHole
        },
        {
          title: "Explore the Room",
          run: () => travelToDestination(getRandomItem(roomDestinations), rabbitHoleTransitionMessages)
        },
        {
          title: "Hidden Signals",
          run: () => travelToDestination({ title: "Hidden Signals", target: "hidden-signals.html" }, rabbitHoleTransitionMessages)
        },
        {
          title: "CD Player",
          run: () => travelToDestination({ title: "CD Player", target: "blind-listening.html" }, rabbitHoleTransitionMessages)
        },
        {
          title: "Object Drawer",
          run: () => travelToDestination({ title: "Object Drawer", target: "object-drawer.html" }, rabbitHoleTransitionMessages)
        },
        {
          title: "Movie Shelf",
          run: () => travelToDestination({ title: "Movie Shelf", target: "movie-shelf.html" }, rabbitHoleTransitionMessages)
        },
        {
          title: "Coffee Break",
          run: () => travelToDestination({ title: "Coffee Break", target: "coffee-break.html" }, rabbitHoleTransitionMessages)
        },
        {
          title: "Groovy Radio",
          run: () => travelToDestination({ title: "Groovy Radio", target: "radio.html" }, rabbitHoleTransitionMessages)
        }
      ];

      getRandomItem(surpriseDestinations).run();
    });
  }
}

function setupRoomExplorer() {
  const exploreButtons = document.querySelectorAll("#explore-room-button, [data-explore-room]");
  const sidebarExplore = document.querySelector("#control-tower-explore");

  if (sidebarExplore) {
    sidebarExplore.addEventListener("click", openRandomRoom);
  }

  exploreButtons.forEach((button) => {
    button.addEventListener("click", openRandomRoom);
  });
}

function showObjectDrawer() {
  const objectDrawer = document.querySelector("#object-drawer");
  if (!objectDrawer) {
    return;
  }

  const objects = objectDrawerItems.slice(0, 5);
  objectDrawer.innerHTML = `
    <div class="daily-object-kicker">Object Drawer</div>
    <h2>Strange Objects</h2>
    <p class="daily-object-summary">A permanent drawer of small things. Placeholder objects for now.</p>
    <div class="shell-grid">
      ${objects.map((object) => `
        <article class="shell-card object-drawer-item">
          <span class="daily-object-emoji" aria-hidden="true">${object.emoji}</span>
          <h3>${escapeHTML(object.name)}</h3>
          <p>Invented in ${escapeHTML(object.year)}. ${escapeHTML(object.short)}</p>
          <p class="daily-object-long" hidden>${escapeHTML(object.long)}</p>
          <button class="object-drawer-toggle daily-object-link" type="button">Open item...</button>
        </article>
      `).join("")}
    </div>
  `;

  objectDrawer.querySelectorAll(".object-drawer-toggle").forEach((button) => {
    const longText = button.parentElement.querySelector(".daily-object-long");

    button.addEventListener("click", () => {
      const isHidden = longText.hidden;
      longText.hidden = !isHidden;
      button.textContent = isHidden ? "Close item..." : "Open item...";
    });
  });
}

function showMovieShelf() {
  const movieShelf = document.querySelector("#movie-shelf-list");
  if (!movieShelf) {
    return;
  }

  movieShelf.innerHTML = movieShelfItems.map((movie) => `
    <article class="shell-card">
      <div class="daily-object-kicker">${escapeHTML(movie.mood)}</div>
      <h3>${escapeHTML(movie.title)}</h3>
      <p>${escapeHTML(movie.year)}</p>
      <p>${escapeHTML(movie.description)}</p>
    </article>
  `).join("");
}

function showHiddenSignals() {
  const signalList = document.querySelector("#hidden-signals-list");
  const signalResult = document.querySelector("#hidden-signal-result");
  if (!signalList) {
    return;
  }

  signalList.innerHTML = hiddenSignalFolders.map((folder, index) => `
    <article class="archive-folder">
      <div class="archive-folder-tab">${escapeHTML(folder.code)}</div>
      <h3>${escapeHTML(folder.title)}</h3>
      <p>${escapeHTML(folder.description)}</p>
      <button class="hidden-signal-button" type="button" data-index="${index}">Open folder</button>
    </article>
  `).join("");

  signalList.querySelectorAll(".hidden-signal-button").forEach((button) => {
    button.addEventListener("click", () => {
      const folder = hiddenSignalFolders[Number(button.dataset.index)];
      if (!signalResult || !folder) {
        return;
      }

      let fileIndex = Math.floor(Math.random() * folder.files.length);
      const lastFileIndex = Number(button.dataset.lastFileIndex);
      if (folder.files.length > 1 && fileIndex === lastFileIndex) {
        fileIndex = (fileIndex + 1) % folder.files.length;
      }

      button.dataset.lastFileIndex = String(fileIndex);
      const file = folder.files[fileIndex];
      if (!file) {
        signalResult.hidden = false;
        signalResult.innerHTML = `
          <div class="archive-file-stamp">empty drawer</div>
          <h3>${escapeHTML(folder.title)}</h3>
          <p class="hint">No files have been added to this folder yet.</p>
        `;
        return;
      }

      signalResult.hidden = false;
      signalResult.innerHTML = `
        <div class="archive-file-stamp">released copy</div>
        <div class="daily-object-kicker">${escapeHTML(folder.title)}</div>
        <h2>${escapeHTML(file.title)}</h2>
        <dl class="archive-file-meta">
          <div>
            <dt>Type</dt>
            <dd>${escapeHTML(file.type)}</dd>
          </div>
          <div>
            <dt>Source</dt>
            <dd>${escapeHTML(file.source)}</dd>
          </div>
        </dl>
        <p>${escapeHTML(file.description)}</p>
        <a class="button-link archive-original-link" href="${escapeHTML(file.sourceUrl)}" target="_blank" rel="noopener noreferrer">Open Original</a>
      `;
      signalResult.scrollIntoView({ behavior: "smooth", block: "nearest" });
    });
  });
}

function showFullSavedPost() {
  const savedPost = document.querySelector("#saved-post");
  if (!savedPost) {
    return;
  }

  const params = new URLSearchParams(window.location.search);
  const isStarterPost = params.has("starter");
  const postId = Number(params.get(isStarterPost ? "starter" : "id"));
  const post = isStarterPost ? starterPosts[postId] : getPosts()[postId];

  if (!post) {
    savedPost.innerHTML = "<p>Post not found.</p>";
    return;
  }

  document.querySelector("#saved-post-title").textContent = post.title;
  const imageSource = post.image || placeholderImage;
  savedPost.innerHTML = `
    <h2 class="zen-title">${escapeHTML(post.title)}</h2>
    <time datetime="${post.createdAt}">${formatDate(post.createdAt)}</time>
    <img src="${escapeHTML(imageSource)}" alt="">
    <div class="post-content">${sanitizeHTML(getPostBodyHTML(post))}</div>
  `;

  if (params.get("zen") === "1") {
    document.body.classList.add("zen-mode");
  }
}

function updatePostCount() {
  const postCount = document.querySelector("#post-count");
  if (!postCount) {
    return;
  }

  const articles = document.querySelectorAll("article");
  const visibleArticles = Array.from(articles).filter((article) => !article.hidden);
  const count = visibleArticles.length;
  postCount.textContent = `${count} ${count === 1 ? "item" : "items"}`;
}

function setupSearch() {
  const searchInput = document.querySelector("#post-search");
  const clearSearch = document.querySelector("#clear-search");
  const noResults = document.querySelector("#no-search-results");
  const sectionsToHide = document.querySelectorAll("#saved-posts, #older-saved-posts, #about, footer");
  if (!searchInput) {
    return;
  }

  function filterPosts() {
    const searchText = searchInput.value.toLowerCase();
    const articles = document.querySelectorAll("article");

    articles.forEach((article) => {
      const articleText = article.textContent.toLowerCase();
      const matchesSearch = articleText.includes(searchText);
      article.hidden = !matchesSearch;
    });

    if (noResults) {
      const hasMatches = Array.from(articles).some((article) => !article.hidden);
      const showNoResults = !hasMatches && searchText !== "";
      noResults.hidden = !showNoResults;
      sectionsToHide.forEach((section) => {
        section.hidden = showNoResults;
      });
    }

    if (clearSearch) {
      clearSearch.hidden = searchText === "";
    }

    updatePostCount();
  }

  searchInput.addEventListener("input", filterPosts);

  if (clearSearch) {
    clearSearch.addEventListener("click", () => {
      searchInput.value = "";
      filterPosts();
      searchInput.focus();
    });
  }
}

function setupRandomPost() {
  const randomPostButton = document.querySelector("#random-post");
  if (!randomPostButton) {
    return;
  }

  randomPostButton.addEventListener("click", () => {
    const posts = Array.from(document.querySelectorAll(".post-card")).filter((post) => !post.hidden);
    if (posts.length === 0) {
      randomPostButton.textContent = "No items yet";
      return;
    }

    const randomIndex = Math.floor(Math.random() * posts.length);
    const randomPost = posts[randomIndex];
    randomPost.classList.add("spotlight");
    randomPost.scrollIntoView({ behavior: "smooth", block: "center" });

    window.setTimeout(() => {
      randomPost.classList.remove("spotlight");
    }, 1200);
  });
}

function setupControlPanel() {
  const savedFilterButton = document.querySelector("#saved-filter");
  const savedFilterEmpty = document.querySelector("#saved-filter-empty");
  let showingSavedOnly = false;

  if (savedFilterButton) {
    savedFilterButton.addEventListener("click", () => {
      showingSavedOnly = !showingSavedOnly;
      const savedArticleIds = getSavedArticleIds();

      document.querySelectorAll(".post-card").forEach((card) => {
        card.hidden = showingSavedOnly && !savedArticleIds.includes(card.dataset.postId);
      });

      savedFilterButton.setAttribute("aria-pressed", String(showingSavedOnly));
      savedFilterButton.textContent = showingSavedOnly ? "All Items" : "Saved Items";
      if (savedFilterEmpty) {
        const hasVisibleCards = Array.from(document.querySelectorAll(".post-card")).some((card) => !card.hidden);
        savedFilterEmpty.hidden = !showingSavedOnly || hasVisibleCards;
      }
      updatePostCount();
    });
  }
}

function setupRandomQuote() {
  const quote = document.querySelector("#random-quote");
  const quoteButton = document.querySelector("#random-quote-button");
  if (!quote || !quoteButton) {
    return;
  }

  quoteButton.addEventListener("click", () => {
    const randomQuote = chillQuotes[Math.floor(Math.random() * chillQuotes.length)];
    quote.textContent = randomQuote;
  });
}

function setupRandomArticle() {
  const articleButton = document.querySelector("#random-article-button");
  if (!articleButton) {
    return;
  }

  articleButton.addEventListener("click", () => {
    const posts = getDisplayPosts();
    if (posts.length === 0) {
      articleButton.textContent = "No items yet";
      return;
    }

    const randomPost = posts[Math.floor(Math.random() * posts.length)];
    const postLink = randomPost.isStarter
      ? `post.html?starter=${randomPost.starterIndex}&zen=1`
      : `post.html?id=${randomPost.localIndex}&zen=1`;

    window.location.href = postLink;
  });
}

function setupRandomRadio() {
  const radioButton = document.querySelector("#random-radio-button");
  if (!radioButton) {
    return;
  }

  radioButton.addEventListener("click", () => {
    window.open(radioGardenUrl, "_blank", "noopener,noreferrer");
  });
}

function getControlTowerHTML() {
  return `
    <aside class="desk-sidebar" aria-label="Control tower navigation">
      <h2>Control Tower</h2>
      <a class="tower-icon-link" href="index.html" aria-label="Home"><span>⌂</span></a>
      <button class="desk-label" type="button" aria-expanded="true" aria-controls="desk-section">
        Desk
        <span aria-hidden="true">-</span>
      </button>
      <div id="desk-section" class="desk-section-links">
        <a href="rabbit-hole.html"><span>🕳</span>Rabbit Hole</a>
        <a href="object-drawer.html"><span>🗄</span>Object Drawer</a>
        <a href="coffee-break.html"><span>☕</span>Coffee Break</a>
        <a href="radio.html"><span>📻</span>Groovy Radio</a>
        <a href="blind-listening.html"><span>💿</span>CD Player</a>
        <a href="collective-thinking.html"><span>💭</span>Collective Thinking</a>
        <a href="movie-shelf.html"><span>🎬</span>Movie Shelf</a>
        <a href="hidden-signals.html"><span>📁</span>Hidden Signals</a>
        <a href="scratchpad.html"><span>📝</span>Scratchpad</a>
      </div>
      <button class="desk-label" type="button" aria-expanded="true" aria-controls="internet-drawer-section">
        Internet Drawer
        <span aria-hidden="true">-</span>
      </button>
      <div id="internet-drawer-section" class="desk-section-links">
        <a href="https://www.window-swap.com/" target="_blank" rel="noopener noreferrer"><span>🪟</span>WindowSwap</a>
        <a href="https://radio.garden/" target="_blank" rel="noopener noreferrer"><span>🌍</span>Radio Garden</a>
        <a href="https://apod.nasa.gov/apod/" target="_blank" rel="noopener noreferrer"><span>🚀</span>NASA APOD</a>
        <a href="https://play.typeracer.com/?universe=jokes" target="_blank" rel="noopener noreferrer"><span>⌨️</span>TypeRacer</a>
        <a href="https://everynoise.com/" target="_blank" rel="noopener noreferrer"><span>🎧</span>Every Noise at Once</a>
        <a href="https://theuselessweb.com/" target="_blank" rel="noopener noreferrer"><span>🎲</span>Random Internet</a>
        <a href="internet-drawer.html"><span>🗂</span>Add to drawer</a>
      </div>
      <div class="control-tower-footer">
        <button class="desk-label" type="button" aria-expanded="false" aria-controls="hotkeys-section">
          Hotkeys
          <span aria-hidden="true">+</span>
        </button>
        <div id="hotkeys-section" class="desk-section-links hotkeys-list is-collapsed">
          <p><kbd>C</kbd> Control Tower</p>
          <p><kbd>Z</kbd> Zen mode</p>
        </div>
      </div>
    </aside>
  `;
}

function setupControlTowerShell() {
  document.querySelector(".desk-sidebar")?.remove();
  document.body.insertAdjacentHTML("afterbegin", getControlTowerHTML());

  const sidebar = document.querySelector(".desk-sidebar");
  if (!sidebar || sidebar.querySelector(".control-tower-toggle")) {
    return;
  }

  const toggleButton = document.createElement("button");
  toggleButton.className = "control-tower-toggle";
  toggleButton.type = "button";
  toggleButton.setAttribute("aria-label", "Collapse Control Tower");
  toggleButton.title = "Press C to open / close Control Tower";
  toggleButton.textContent = "‹";
  sidebar.prepend(toggleButton);

  function applyCollapsedState(isCollapsed) {
    document.body.classList.toggle("control-tower-collapsed", isCollapsed);
    toggleButton.textContent = isCollapsed ? "›" : "‹";
    toggleButton.setAttribute("aria-label", isCollapsed ? "Expand Control Tower" : "Collapse Control Tower");
  }

  applyCollapsedState(readLocalString(controlTowerCollapsedKey, "false") === "true");

  toggleButton.addEventListener("click", () => {
    const isCollapsed = !document.body.classList.contains("control-tower-collapsed");
    writeLocalString(controlTowerCollapsedKey, String(isCollapsed));
    applyCollapsedState(isCollapsed);
  });

  document.addEventListener("keydown", (event) => {
    const activeElement = document.activeElement;
    const isWriting = activeElement && (
      activeElement.tagName === "INPUT" ||
      activeElement.tagName === "TEXTAREA" ||
      activeElement.isContentEditable
    );

    if (isWriting || event.key.toLowerCase() !== "c") {
      return;
    }

    event.preventDefault();
    toggleButton.click();
  });
}

function updateControlTowerToggleIcon() {
  const toggleButton = document.querySelector(".control-tower-toggle");
  if (!toggleButton) {
    return;
  }

  const isCollapsed = document.body.classList.contains("control-tower-collapsed") || document.body.classList.contains("zen-mode");
  toggleButton.textContent = isCollapsed ? "›" : "‹";
  toggleButton.setAttribute("aria-label", isCollapsed ? "Expand Control Tower" : "Collapse Control Tower");
}

function setupCollapsibleSidebar() {
  const sidebarButtons = document.querySelectorAll(".desk-label[aria-controls]");

  sidebarButtons.forEach((button) => {
    const section = document.querySelector(`#${button.getAttribute("aria-controls")}`);
    const icon = button.querySelector("span");

    if (!section) {
      return;
    }

    button.addEventListener("click", () => {
      const isOpen = button.getAttribute("aria-expanded") === "true";
      button.setAttribute("aria-expanded", String(!isOpen));
      section.classList.toggle("is-collapsed", isOpen);

      if (icon) {
        icon.textContent = isOpen ? "+" : "-";
      }
    });
  });
}

function setupCollapsibleMoodPanel() {
  const moodPanel = document.querySelector(".mood-panel-compact");
  const moodToggle = document.querySelector(".mood-toggle");
  if (!moodPanel || !moodToggle) {
    return;
  }

  const icon = moodToggle.querySelector("span");

  moodToggle.addEventListener("click", () => {
    const isOpen = moodToggle.getAttribute("aria-expanded") === "true";
    moodToggle.setAttribute("aria-expanded", String(!isOpen));
    moodPanel.classList.toggle("is-collapsed", isOpen);

    if (icon) {
      icon.textContent = isOpen ? "+" : "-";
    }
  });
}

function setupZenMode() {
  const postArticle = document.querySelector("#saved-post") || document.querySelector("main article");
  if (!postArticle) {
    return;
  }

  document.addEventListener("keydown", (event) => {
    const activeElement = document.activeElement;
    const isWriting = activeElement && (
      activeElement.tagName === "INPUT" ||
      activeElement.tagName === "TEXTAREA" ||
      activeElement.isContentEditable
    );

    if (isWriting || event.key.toLowerCase() !== "z") {
      return;
    }

    document.body.classList.toggle("zen-mode");
    updateControlTowerToggleIcon();
  });
}

function setupTheme() {
  const savedTheme = readLocalString(themeKey, "cyberpunk");
  const currentMood = document.querySelector("#current-mood");

  function applyTheme(themeName) {
    themes.forEach((theme) => {
      document.body.classList.remove(theme.name);
    });

    document.body.classList.remove("dark", "dark-mode", "light", "paper", "terminal");
    document.body.classList.add(themeName);
    writeLocalString(themeKey, themeName);

    const activeTheme = themes.find((theme) => theme.name === themeName);
    if (currentMood && activeTheme) {
      currentMood.textContent = `Current mood: ${activeTheme.label}`;
    }

    document.querySelectorAll("[data-mode]").forEach((button) => {
      const isActive = button.dataset.mode === themeName;
      button.classList.toggle("active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });
  }

  document.querySelectorAll("[data-mode]").forEach((button) => {
    button.addEventListener("click", () => {
      applyTheme(button.dataset.mode);
    });
  });

  const safeTheme = themes.some((theme) => theme.name === savedTheme) ? savedTheme : "cyberpunk";
  applyTheme(safeTheme);
}

setupSiteScale();
setupControlTowerShell();
setupTheme();
showSavedPosts();
showPrivateNotes();
setupPostForm();
setupThoughtForm();
showCollectiveThoughts();
setupInternetDrawerForm();
renderInternetDrawer();
setupBlindListening();
setupRabbitHoleMachine();
setupRoomExplorer();
showObjectDrawer();
showMovieShelf();
showHiddenSignals();
showFullSavedPost();
setupSearch();
setupRandomPost();
setupControlPanel();
setupZenMode();
setupRandomQuote();
setupRandomArticle();
setupRandomRadio();
setupCollapsibleSidebar();
setupCollapsibleMoodPanel();
updateControlTowerToggleIcon();
updatePostCount();

